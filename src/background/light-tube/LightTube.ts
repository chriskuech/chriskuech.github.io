import "client-only";
import {
  AmbientLight,
  Color,
  CylinderGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { PerlinNoise } from "./PerlinNoise";
import { CylinderMesh } from "./CylinderMesh";
import { Animation } from "../Animation";
import assert from "assert";

const biasTowardsEdges = (x: number, n: number): number =>
  Math.pow(x, n) / (Math.pow(x, n) + Math.pow(1 - x, n));

const interpolateNumber = (a: number, b: number, t: number): number =>
  a + (b - a) * t;

const interpolateColor = (a: number, b: number, t: number): number => {
  const a1 = a & 0xff;
  const a2 = (a >> 8) & 0xff;
  const a3 = (a >> 16) & 0xff;
  const b1 = b & 0xff;
  const b2 = (b >> 8) & 0xff;
  const b3 = (b >> 16) & 0xff;
  return (
    (interpolateNumber(a1, b1, t) << 16) |
    (interpolateNumber(a2, b2, t) << 8) |
    interpolateNumber(a3, b3, t)
  );
};

export class LightTube implements Animation {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private composer: EffectComposer;
  private cylinderMesh: CylinderMesh;
  private animationFrameId: number | null = null;
  private lastTime: number | null = null;
  private startTime: number | null = null;
  private lasers: { mesh: Mesh; light: PointLight; speed: number }[] = [];
  private laserColors = [0xff00ff, 0x22aaff, 0x800080, 0x00008b];

  private perlin = {
    small: new PerlinNoise(1 / 100),
    large: new PerlinNoise(10),
    extraLarge: new PerlinNoise(100),
  };

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new Scene();
    this.scene.background = new Color(0x000000);

    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 10;
    this.camera.position.y = 4;
    this.camera.lookAt(new Vector3(0, -10, -10));

    this.renderer = new WebGLRenderer({ canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const resolution = 100;
    this.cylinderMesh = new CylinderMesh(5, 100, resolution, 5 * resolution);
    this.cylinderMesh.mesh.position.z = -40;
    this.scene.add(this.cylinderMesh.mesh);

    const ambientLight = new AmbientLight(0x5304fd, 0.1); // dim ambient light
    this.scene.add(ambientLight);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(
      new UnrealBloomPass(
        new Vector2(window.innerWidth, window.innerHeight).multiplyScalar(
          window.devicePixelRatio
        ),
        4, // strength
        0.7, // radius
        0 // threshold
      )
    );
    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setPixelRatio(window.devicePixelRatio);

    this.start();
  }

  resize(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  private update(dt: number): void {
    this.applyPerlinNoise();
    this.updateLasers(dt);
    this.maybeCreateLaser();
  }

  private applyPerlinNoise(): void {
    assert(this.startTime, "startTime is not set");
    const dtSecs = (performance.now() - this.startTime) / 1000;
    const z = dtSecs / 300;
    for (let i = 0; i < this.cylinderMesh.us; i++) {
      for (let j = 0; j < this.cylinderMesh.vs; j++) {
        const [u, v] = [i / this.cylinderMesh.us, j / this.cylinderMesh.vs];
        const radius = this.perlin.large.noise(u, v, z) + 5;
        this.cylinderMesh.setCoord(u, v, radius);
      }
    }
  }

  private updateLasers(dt: number): void {
    this.lasers = this.lasers.filter(({ mesh, light, speed }) => {
      mesh.position.z -= speed * dt;
      light.position.copy(mesh.position);
      if (mesh.position.z < -90) {
        this.scene.remove(mesh);
        this.scene.remove(light);
        return false;
      }
      return true;
    });
  }

  private maybeCreateLaser(): void {
    // Random chance to create a laser
    if (!(Math.random() < 0.01)) return;

    // const strength = Math.pow(Math.random(), 1);
    const strength = Math.pow(biasTowardsEdges(Math.random(), 10), 2);
    const radius = 0.01;
    const length = strength * 10 + 0.3;

    const colorIndex = Math.floor(strength * this.laserColors.length);
    const color = this.laserColors[colorIndex];

    const geometry = new CylinderGeometry(radius, radius, length, 8);
    geometry.rotateX(Math.PI / 2);

    const tubeRadius = 5;
    const angleInTube = Math.random() * 2 * Math.PI;
    const laser = new Mesh(
      geometry,
      new MeshBasicMaterial({
        color: interpolateColor(0xaaaaaa, 0x555555, strength) | color,
      })
    );
    laser.position.set(
      tubeRadius * Math.cos(angleInTube),
      tubeRadius * Math.sin(angleInTube),
      10
    );

    const light = new PointLight(color, length, 50);
    light.position.copy(laser.position);

    this.scene.add(laser);
    this.scene.add(light);

    this.lasers.push({ mesh: laser, light, speed: 10 / Math.pow(strength, 2) });
  }

  start(): void {
    if (this.animationFrameId !== null) {
      return;
    }

    const animate = (time: number) => {
      if (this.lastTime !== null) {
        const dt = (time - this.lastTime) / 1000;
        this.update(dt);
      }
      this.lastTime = time;
      this.composer.render();
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.startTime = performance.now();
    this.animationFrameId = requestAnimationFrame(animate);
  }

  stop(): void {
    assert(this.animationFrameId !== null, "animationFrameId is not null");

    cancelAnimationFrame(this.animationFrameId);
    this.animationFrameId = null;
    this.lastTime = null;
    this.startTime = null;
  }
}

import {
  AmbientLight,
  Color,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { Ball } from "./Ball";

const WORLD_DIMENSION = 100;
const NUM_BALLS = 1000;
const BALL_SCALE = 10;

const COLORS = [
  // "#E4E27F",
  "#f8d171",
  "#daf196",
  "#ede177",
  // "#DBD46B",
];

export class World {
  private static readonly FRAMES_PER_SECOND = 60;
  private balls: Ball[] = [];
  private animationFrameId: number | null = null;
  private camera: PerspectiveCamera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  private renderer: WebGLRenderer;
  private composer: EffectComposer;

  get domElement(): HTMLCanvasElement {
    return this.renderer.domElement;
  }

  constructor() {
    const scene: Scene = new Scene();
    scene.background = new Color(0xffffff);

    for (let i = 0; i < NUM_BALLS; i++) {
      const position = new Vector3(
        2 * Math.random() * WORLD_DIMENSION - WORLD_DIMENSION,
        2 * Math.random() * WORLD_DIMENSION - WORLD_DIMENSION,
        2 * Math.random() * WORLD_DIMENSION - WORLD_DIMENSION
      );
      const radius = Math.random() * BALL_SCALE + BALL_SCALE / 2;
      const mass = Math.pow(radius, 3);
      const momentum = 50; // constant momentum for all balls
      const speed = momentum / mass;
      const direction = new Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize();
      const velocity = direction.multiplyScalar(speed);

      const ball = new Ball(
        position,
        velocity,
        radius,
        mass,
        COLORS[i % COLORS.length]
      );
      this.balls.push(ball);
      scene.add(ball.mesh);
    }

    const light = new DirectionalLight(0xffffff, 3);
    light.position
      .set(WORLD_DIMENSION / 3, WORLD_DIMENSION, WORLD_DIMENSION)
      .normalize();
    scene.add(light);

    const ambientLight = new AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    this.camera.position.z = WORLD_DIMENSION;

    this.renderer = new WebGLRenderer({});
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(scene, this.camera));
    this.composer.addPass(
      new UnrealBloomPass(
        new Vector2(window.innerWidth, window.innerHeight).multiplyScalar(
          window.devicePixelRatio
        ),
        0.3, // strength
        0.7, // radius
        0 // threshold
      )
    );
    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setPixelRatio(window.devicePixelRatio);
    this.composer.render();
  }

  resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setSize(window.innerWidth, window.innerHeight);
  }

  start() {
    if (this.animationFrameId === null) {
      const step = () => {
        this.update(1 / World.FRAMES_PER_SECOND);
        this.animationFrameId = requestAnimationFrame(step);
      };
      this.animationFrameId = requestAnimationFrame(step);
    }
  }

  stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  // dt is in seconds
  update(dt: number) {
    for (const ball of this.balls) {
      ball.updatePosition(dt);
      this.checkBounds(ball);
    }

    this.composer.render();
  }

  checkBounds(ball: Ball) {
    const halfDimension = WORLD_DIMENSION;
    if (
      ball.position.x - ball.radius < -halfDimension ||
      ball.position.x + ball.radius > halfDimension
    ) {
      ball.velocity.x *= -1;
    }
    if (
      ball.position.y - ball.radius < -halfDimension ||
      ball.position.y + ball.radius > halfDimension
    ) {
      ball.velocity.y *= -1;
    }
    if (
      ball.position.z - ball.radius < -halfDimension ||
      ball.position.z + ball.radius > halfDimension
    ) {
      ball.velocity.z *= -1;
    }
  }

  fixOverlaps() {
    for (const ball of this.balls) {
      for (const otherBall of this.balls) {
        ball.fixOverlap(otherBall);
      }
    }
  }
}

import { Mesh, MeshPhongMaterial, SphereGeometry, Vector3 } from "three";

export class Ball {
  position: Vector3;
  velocity: Vector3;
  radius: number;
  mass: number;
  mesh: Mesh;

  constructor(
    position: Vector3,
    velocity: Vector3,
    radius: number,
    mass: number,
    color: string
  ) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.mass = mass;
    this.mesh = new Mesh(
      new SphereGeometry(radius, 32, 32),
      new MeshPhongMaterial({ color })
    );
    this.mesh.position.copy(this.position);
  }

  updatePosition(dt: number) {
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
    this.position.z += this.velocity.z * dt;
    this.mesh.position.copy(this.position);
  }

  fixOverlap(other: Ball) {
    const dx = other.position.x - this.position.x;
    const dy = other.position.y - this.position.y;
    const dz = other.position.z - this.position.z;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const minDist = this.radius + other.radius;

    if (distance < minDist) {
      const nx = dx / distance;
      const ny = dy / distance;
      const nz = dz / distance;

      this.position.x -= nx * (minDist - distance);
      this.position.y -= ny * (minDist - distance);
      this.position.z -= nz * (minDist - distance);
    }
    this.mesh.position.copy(this.position);
  }

  handleCollision(other: Ball) {
    const dx = other.position.x - this.position.x;
    const dy = other.position.y - this.position.y;
    const dz = other.position.z - this.position.z;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const minDist = this.radius + other.radius;

    if (distance < minDist) {
      const nx = dx / distance;
      const ny = dy / distance;
      const nz = dz / distance;

      const dvx = this.velocity.x - other.velocity.x;
      const dvy = this.velocity.y - other.velocity.y;
      const dvz = this.velocity.z - other.velocity.z;

      const dotProduct = dvx * nx + dvy * ny + dvz * nz;

      const impulse = (2 * dotProduct) / (this.mass + other.mass);

      this.velocity.x -= impulse * other.mass * nx;
      this.velocity.y -= impulse * other.mass * ny;
      this.velocity.z -= impulse * other.mass * nz;

      other.velocity.x += impulse * this.mass * nx;
      other.velocity.y += impulse * this.mass * ny;
      other.velocity.z += impulse * this.mass * nz;
    }
    this.mesh.position.copy(this.position);
    other.mesh.position.copy(other.position);
  }
}

import { Matrix } from "./Matrix";

// Perlin noise generation function
export class PerlinNoise {
  private permutation: Uint8ClampedArray;

  constructor(private readonly intensity: number) {
    const length = 256;
    const p = new Uint8ClampedArray(length);
    for (let i = 0; i < length; i++) {
      p[i] = i;
    }
    // Shuffle the array
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    // Duplicate the array
    this.permutation = new Uint8ClampedArray(length * 2);
    for (let i = 0; i < length; i++) {
      this.permutation[i] = p[i];
      this.permutation[i + length] = p[i];
    }
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number, z: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  public matrix(rows: number, cols: number, dt: number): Matrix {
    const m = Matrix.zeros(rows, cols);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        m.set(i, j, this.noise(j / cols, i / rows, dt));
      }
    }
    return m;
  }

  public noise(x: number, y: number, z: number): number {
    x *= this.intensity;
    y *= this.intensity;
    z *= this.intensity;

    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.permutation[X] + Y;
    const AA = this.permutation[A] + Z;
    const AB = this.permutation[A + 1] + Z;
    const B = this.permutation[X + 1] + Y;
    const BA = this.permutation[B] + Z;
    const BB = this.permutation[B + 1] + Z;

    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.permutation[AA], x, y, z),
          this.grad(this.permutation[BA], x - 1, y, z)
        ),
        this.lerp(
          u,
          this.grad(this.permutation[AB], x, y - 1, z),
          this.grad(this.permutation[BB], x - 1, y - 1, z)
        )
      ),
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.permutation[AA + 1], x, y, z - 1),
          this.grad(this.permutation[BA + 1], x - 1, y, z - 1)
        ),
        this.lerp(
          u,
          this.grad(this.permutation[AB + 1], x, y - 1, z - 1),
          this.grad(this.permutation[BB + 1], x - 1, y - 1, z - 1)
        )
      )
    );
  }
}

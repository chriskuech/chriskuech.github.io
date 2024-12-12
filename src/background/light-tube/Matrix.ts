export class Matrix {
  constructor(
    readonly data: Float64Array,
    readonly width: number,
    readonly height: number
  ) {}

  get(i: number, j: number) {
    return this.data[i * this.width + j];
  }

  set(i: number, j: number, value: number) {
    this.data[i * this.width + j] = value;
  }

  add(other: Matrix | number): Matrix {
    if (typeof other === "number") {
      return this.add(Matrix.ones(this.height, this.width).mul(other));
    }
    const result = Matrix.zeros(this.height, this.width);
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        result.set(i, j, this.get(i, j) + other.get(i, j));
      }
    }
    return result;
  }

  mul(other: Matrix | number): Matrix {
    if (typeof other === "number") {
      const result = Matrix.zeros(this.height, this.width);
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          result.set(i, j, this.get(i, j) * other);
        }
      }
      return result;
    }
    const result = Matrix.zeros(this.height, other.width);
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < other.width; j++) {
        for (let k = 0; k < this.width; k++) {
          result.set(i, j, result.get(i, j) + this.get(i, k) * other.get(k, j));
        }
      }
    }
    return result;
  }

  draw(startI: number, startJ: number, matrix: Matrix) {
    const data = Matrix.zeros(this.height, this.width);
    for (let i = 0; i < matrix.height; i++) {
      for (let j = 0; j < matrix.width; j++) {
        data.set(startI + i, startJ + j, matrix.get(i, j));
      }
    }
    return data;
  }

  static gaussian(size: number, sigma: number): Matrix {
    const data = Matrix.zeros(size, size);
    const center = Math.floor(size / 2);
    const sigma2 = sigma * sigma;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const x = i - center;
        const y = j - center;
        data.set(i, j, Math.exp(-(x * x + y * y) / (2 * sigma2)));
      }
    }

    return data;
  }

  static zeros(rows: number, cols: number): Matrix {
    const data = new Float64Array(rows * cols);
    return new Matrix(data, rows, cols);
  }

  static ones(rows: number, cols: number): Matrix {
    const data = new Float64Array(rows * cols).fill(1);
    return new Matrix(data, rows, cols);
  }
}

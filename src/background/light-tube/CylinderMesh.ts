import { CylinderGeometry, Mesh, MeshStandardMaterial } from "three";
import assert from "assert";

/**
 * CylinderMesh is a mesh that is a cylinder along the z-axis and centered at the origin. For specific (u, v) coordinates on the surface, the radius can be get/set.
 */
export class CylinderMesh {
  /**
   * The underlying three.js mesh to add to the scene.
   */
  readonly mesh: Mesh;
  private geometry: CylinderGeometry;

  /**
   * @param radius the radius of the cylinder
   * @param length the length of the cylinder
   * @param us the number of segmented faces around the circumference of the cylinder
   * @param vs the number of rows of faces along the length of the cylinder
   */
  constructor(
    readonly radius: number,
    readonly length: number,
    readonly us: number,
    readonly vs: number
  ) {
    this.geometry = new CylinderGeometry(radius, radius, length, us, vs, true);

    this.mesh = new Mesh(
      this.geometry,
      new MeshStandardMaterial({
        color: 0xffffff,
        wireframe: true,
      })
    );

    this.mesh.rotation.x = Math.PI / 2;
  }

  /**
   * Sets the (u, v) coordinates of the mesh at the given index to the given value.
   */
  setCoord(u: number, v: number, radius: number): void {
    const index = this.getIndexFromUV(u, v);

    const position = this.geometry.attributes.position;
    const angleOffset = Math.PI / 6; // 30 degrees offset for equilateral triangles
    position.setXYZ(
      index,
      radius * Math.sin(u * Math.PI * 2 + angleOffset),
      position.getY(index),
      radius * Math.cos(u * Math.PI * 2 + angleOffset)
    );
    position.needsUpdate = true;
  }

  /**
   * Gets the value of the mesh at the given (u, v) coordinates.
   */
  getCoord(u: number, v: number): number {
    const index = this.getIndexFromUV(u, v);

    const position = this.geometry.attributes.position;
    const x = position.getX(index);
    const z = position.getZ(index);
    return Math.sqrt(x * x + z * z);
  }

  /**
   * Helper method to get the index from UV coordinates.
   */
  private getIndexFromUV(u: number, v: number): number {
    assert(
      u >= 0 && u <= 1 && v >= 0 && v <= 1,
      "UV coordinates must be between 0 and 1"
    );

    const uIndex = Math.round(u * this.us);
    const vIndex = Math.round(v * this.vs);

    assert(
      uIndex % 1 === 0 && vIndex % 1 === 0,
      "UV coordinates must be integers"
    );

    return uIndex + vIndex * this.us;
  }
}

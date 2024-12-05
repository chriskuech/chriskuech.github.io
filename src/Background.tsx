import { useLayoutEffect, useRef, useState } from "react";
import { World } from "./World";

export const Background = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [world] = useState<World>(() => new World());

  useLayoutEffect(() => {
    const mount = mountRef.current;
    const resize = () => world.resize();

    mount?.appendChild(world.domElement);
    world.start();
    window.addEventListener("resize", resize);
    return () => {
      mount?.removeChild(world.domElement);
      world.stop();
      window.removeEventListener("resize", resize);
    };
  }, [mountRef, world, world.domElement]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        filter: "blur(2px)",
      }}
    />
  );
};

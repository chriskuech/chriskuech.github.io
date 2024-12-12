"use client";

import { FC, useLayoutEffect, useMemo, useRef } from "react";
import { LightTube } from "./light-tube/LightTube";

export const AnimationRunner: FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const animation = new LightTube(ref.current);
    const resize = () => animation.resize();

    window.addEventListener("resize", resize);
    animation.start();

    return () => {
      window.removeEventListener("resize", resize);
      animation.stop();
    };
  }, [ref.current]);

  return <canvas ref={ref} style={{ width: "100vw", height: "100vh" }} />;
};

export default AnimationRunner;

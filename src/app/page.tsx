import Background from "@/background/Background";
import { FC, PropsWithChildren } from "react";
import { Resume } from "./_resume/Resume";

const Layer: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "auto",
    }}
  >
    {children}
  </div>
);

export default function Index() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Layer>
        <Background />
      </Layer>
      <Layer>
        <Resume />
      </Layer>
    </div>
  );
}

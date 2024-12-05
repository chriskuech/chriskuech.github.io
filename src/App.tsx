import "./App.css";
import { Background } from "./Background";
import { Resume } from "./Resume";

const Layer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

export const App = () => (
  <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
    <Layer>
      <Background />
    </Layer>
    <Layer>
      <Resume />
    </Layer>
  </div>
);

import pic from "./assets/me.jpg";

export const Resume = () => (
  <div style={{ maxWidth: "70%" }}>
    <img
      src={pic}
      style={{
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
        width: "500px",
        maxWidth: "calc(100% - 20px)",
        border: "10px solid white",
        margin: 0,
        display: "block",
      }}
    />
    <h1
      style={{
        lineHeight: "1.3em",
        margin: 0,
        padding: 0,
        fontSize: "4rem",
        fontFamily: "Futura, sans-serif",
        color: "rgb(147, 177, 101)",
        background: "rgb(3 31 13)",
      }}
    >
      Buenos Dias!
    </h1>
  </div>
);

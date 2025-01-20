export const ElementList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "420px",
        justifyContent: "space-between",
        backgroundColor: "#373737",
        padding: "10px 18px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          marginRight: "30px",
          borderRadius: "50%",
          background: props.gradient,
        }}
      ></div>
      <div>
        <h3 style={{ color: "#fff", marginBottom: "10px" }}>{props.title}</h3>
        <p style={{ color: "#C0C0C0" }}>{props.description}</p>
      </div>
    </div>
  );
};

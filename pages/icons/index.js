import IconGrid from "../../components/IconGrid/iconGrid";


function IconPage() {
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      <div
        style={{
          width: "80%",
          backgroundColor: "#F2F4F4",
          padding: "1rem",
          marginTop: "2rem",
        }}
      >
        <h3 style={{ marginLeft: "1rem" }}>{"Iconos en Apps"}</h3>
        <IconGrid />
      </div>
    </div>
  );
}

export default IconPage;

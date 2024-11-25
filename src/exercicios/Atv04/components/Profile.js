import React from "react";

function Profile({ name, image }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={image}
        alt={`Foto de ${name}`}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      />
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>{name}</p>
    </div>
  );
}

export default Profile;

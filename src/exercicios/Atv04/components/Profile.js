import React from "react";


function Profile({ name, image }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src={image}
        alt={`Foto de ${name}`}
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <p>{name}</p>
    </div>
  );
}

export default Profile;

import React from "react";
import Profile from "./Profile";
import m2 from "../imgs/m2.jpeg";
import h2 from "../imgs/h2.jpeg";




function Gallery() {
  return (
    <div>
      <h3>Galeria de Perfis</h3>
      <Profile name="João" image={h2} />
      <Profile name="Ana" image={m2} />
    </div>
  );
}

export default Gallery;

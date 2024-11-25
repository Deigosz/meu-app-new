import React from "react";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import ListRendering from "./components/ListRendering";
import ConditionalRendering from "./components/ConditionalRendering";
import h1 from "./imgs/h1.jpeg";
import { Link } from "react-router-dom";
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <h1>Atividade 03</h1>
      <Profile name="Marcos" image={h1} />
      <Gallery />
      <ListRendering />
      <ConditionalRendering />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default App;

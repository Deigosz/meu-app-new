import React from "react";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import ListRendering from "./components/ListRendering";
import ConditionalRendering from "./components/ConditionalRendering";
import { Link } from "react-router-dom";
import h1 from "./imgs/h1.jpeg";

function App() {
  return (
    <div style={{ fontFamily: "'Fira Code', monospace", padding: "20px" }}>
      <h1>Atividade 04 - React Aula</h1>
      
      <h2>1.1 Seu Primeiro Componente</h2>
      <Profile name="Diego" image={h1} />

      <h2>1.2 Importando e Exportando Componentes</h2>
      <Gallery />

      <h2>1.3 Renderizando Listas</h2>
      <ListRendering />

      <h2>1.4 Renderização Condicional</h2>
      <ConditionalRendering />
      <Link to="/">Voltar</Link>
    <br />
    </div>
    
  );
}


export default App;

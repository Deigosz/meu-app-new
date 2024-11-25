import React from 'react';
import Toolbar from './components/Toolbar';
import Gallery from './components/Gallery';
import Counter from './components/Counter';
import Form from './components/Form';
import MovingDot from './components/MovingDot';
import { Link } from "react-router-dom";
import './styles/App.css';

function Atv05() {
  return (
    <div className="container">
      <h1>Atividade 05</h1>
      <Toolbar 
        onPlay={() => alert('Playing!')} 
        onUpload={() => alert('Uploading!')} 
      />
      <Gallery />
      <Counter />
      <Form />
      <MovingDot />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv05;

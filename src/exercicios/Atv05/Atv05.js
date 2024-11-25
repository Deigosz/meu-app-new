import React from 'react';
import Form2 from './components/Formluario';
import Form3 from './components/Formluario2';
import List from './components/Lista';
import List2 from './components/Lista2';
import List4 from './components/Reverse';
import BucketList from './components/Todo';
import MovingDot from './components/MovingDot';
import Toolbar from './components/Toolbar';
import { Link } from "react-router-dom";

import './styles/App.css';

function Atv05() {
  return (
    <div className="container">
      <h1>Atividade 05</h1>
      <Toolbar />
      <Form2 />
      <Form3 />
      <List />
      <List2 />
      <List4 />
      <BucketList />
      <MovingDot />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Atv05;

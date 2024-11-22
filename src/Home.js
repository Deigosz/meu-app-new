import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Home = ()=>{
    return(
        <div>
            <h1>Página Inicial</h1>     
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 01 - Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 02 - Relógio</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 03 - Contador de Pessoas</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 04 - Componentes Aula 04</Link>
                    </li>
                    <li>
                        <Link to="/">Atividade 05 - Componentes Aula 05</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
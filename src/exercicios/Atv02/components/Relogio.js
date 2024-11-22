import React, { useEffect } from "react";
import '../styles/App.css'; // Estilos do relógio

function Relogio() {
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            const clockElement = document.getElementById('relogio');
            if (clockElement) {
                clockElement.innerText = currentTime; // Atualiza o texto diretamente no DOM
            }
        }, 1000);

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relogio">
            <h3 id="relogio">00:00:00</h3> {/* Inicializa com um valor qualquer */}
        </div>
    );
}

export default Relogio;

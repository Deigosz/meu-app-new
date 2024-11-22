import Relogio from "./components/Relogio";
import { Link } from "react-router-dom";


function Atv02() {
    return(
        <>
            <h2>Atividade 02 - Relogio</h2>
            <Relogio/>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv02;
import Letreiro from "./components/Letreiro";
import { Link } from "react-router-dom";


function Atv01() {
    return(
        <>
            <h2>Atividade 01 - Letreiro</h2>
            <Letreiro/>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv01;
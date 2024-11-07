import { Link } from "react-router-dom";
import Counter from "./componentes/Contador";

function Atv03() {
    return(
        <>
            <h2>Atividade 03</h2>
            <Counter/>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv03;
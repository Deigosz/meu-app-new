import React, { useState } from "react";


function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>Renderização Condicional</h3>
      {isLoggedIn ? (
        <p>Bem-vindo(a) de volta!</p>
      ) : (
        <p>Você não está logado. Faça login para continuar.</p>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Sair" : "Entrar"}
      </button>
    </div>
  );
}

export default ConditionalRendering;

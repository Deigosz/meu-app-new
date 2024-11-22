import React, { useState } from "react";
import "../styles/App.css";
import manIcon from "../imgs/man.png";
import womanIcon from "../imgs/woman.png";

const Counter = ({ label, onIncrement, onDecrement, count }) => (
    <div className="counter">
        <img src={label === "Homem" ? manIcon : womanIcon} alt={label} className="icon" />
        <p>{label}</p>
        <p className="count">{count}</p>
        <div className="buttons">
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    </div>
);

const App = () => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  const total = maleCount + femaleCount;

  return (
    <div className="app">
      <h1>Contador de Pessoas</h1>
      <div className="master-counter">
        <h2>Total: {total}</h2>
      </div>
      <div className="counters">
        <Counter
          label="Homem"
          count={maleCount}
          onIncrement={() => setMaleCount(maleCount + 1)}
          onDecrement={() => setMaleCount(Math.max(0, maleCount - 1))}
        />
        <Counter
          label="Mulher"
          count={femaleCount}
          onIncrement={() => setFemaleCount(femaleCount + 1)}
          onDecrement={() => setFemaleCount(Math.max(0, femaleCount - 1))}
        />
      </div>
    </div>
  );
};

export default App;

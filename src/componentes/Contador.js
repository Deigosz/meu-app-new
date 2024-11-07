import React, { useState } from 'react';
import removeIcon from '../imgs/remove.png';
import womanIcon from '../imgs/woman.png';
import manIcon from '../imgs/man.png';
import addIcon from '../imgs/add.png';


function Counter() {
    const [menCount, setMenCount] = useState(0);
    const [womenCount, setWomenCount] = useState(0);
  
    const addMan = () => setMenCount(menCount + 1);
    const removeMan = () => setMenCount(menCount > 0 ? menCount - 1 : 0);
  
    const addWoman = () => setWomenCount(womenCount + 1);
    const removeWoman = () => setWomenCount(womenCount > 0 ? womenCount - 1 : 0);
  
    const totalCount = menCount + womenCount;
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Contador de Pessoas</h1>
        
        {/* Bloco de Homens e Mulheres lado a lado */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          
          {/* Contador de Homens */}
          <div style={{ textAlign: 'center' }}>
            <h2>Homens</h2>
            <img src={manIcon} alt="Ícone de Homem" style={{ width: '50px', height: '50px' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              <button onClick={removeMan} style={{ background: 'none', border: 'none' }}>
                <img src={removeIcon} alt="Remover" style={{ width: '30px', height: '30px' }} />
              </button>
              <span>{menCount}</span>
              <button onClick={addMan} style={{ background: 'none', border: 'none' }}>
                <img src={addIcon} alt="Adicionar" style={{ width: '30px', height: '30px' }} />
              </button>
            </div>
          </div>
          
          {/* Contador de Mulheres */}
          <div style={{ textAlign: 'center' }}>
            <h2>Mulheres</h2>
            <img src={womanIcon} alt="Ícone de Mulher" style={{ width: '50px', height: '50px' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              <button onClick={removeWoman} style={{ background: 'none', border: 'none' }}>
                <img src={removeIcon} alt="Remover" style={{ width: '30px', height: '30px' }} />
              </button>
              <span>{womenCount}</span>
              <button onClick={addWoman} style={{ background: 'none', border: 'none' }}>
                <img src={addIcon} alt="Adicionar" style={{ width: '30px', height: '30px' }} />
              </button>
            </div>
          </div>
        </div>
  
        {/* Contador Master */}
        <div style={{ marginTop: '30px', fontSize: '1.5rem' }}>
          <h2>Total</h2>
          <span>{totalCount}</span>
        </div>
      </div>
    );
  }
  
  export default Counter;
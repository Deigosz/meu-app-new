import React, { useState } from 'react';

function List4() {
  const [items, setItems] = useState(['Big Bellies', 'Lunar Landscape', 'Terracotta Army']);

  const reverseList = () => {
    setItems([...items].reverse());
  };

  return (
    <div>
      <h3>List4</h3>
      <button onClick={reverseList}>Reverse</button>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List4;

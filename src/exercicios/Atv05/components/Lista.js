import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const item = prompt('Enter a sculptor name:');
    if (item) {
      setItems([...items, item]);
    }
  };

  return (
    <div>
      <h3>Inspiring sculptors:</h3>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;

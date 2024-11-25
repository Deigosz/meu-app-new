import React, { useState } from 'react';

function List2() {
  const [items, setItems] = useState(['Marta Colvin Andrade', 'Lamidi Olonade Fakeye', 'Louise Nevelson']);

  const deleteItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h3>Inspiring sculptors:</h3>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item} <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List2;

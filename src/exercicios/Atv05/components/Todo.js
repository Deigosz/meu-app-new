import React, { useState } from 'react';

function BucketList() {
  const [myList, setMyList] = useState([]);
  const [sharedList, setSharedList] = useState(['Big Bellies', 'Lunar Landscape', 'Terracotta Army']);
  const [newItem, setNewItem] = useState(''); // Estado para o novo item

  const toggleItem = (item) => {
    setMyList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const addItem = () => {
    if (newItem.trim() !== '' && !sharedList.includes(newItem)) {
      setSharedList([...sharedList, newItem]);
      setNewItem(''); // Limpa o campo de entrada
    }
  };

  return (
    <div>
      <h3>Art Bucket List</h3>
      <div>
        <h4>Add to the shared list:</h4>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new item"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <h4>My list of art to see:</h4>
        <ul className="list">
          {sharedList.map((item) => (
            <li key={item} className="list-item">
              <label>
                <input
                  type="checkbox"
                  checked={myList.includes(item)}
                  onChange={() => toggleItem(item)}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Your list of art to see:</h4>
        <ul className="list">
          {sharedList.map((item) => (
            <li key={item} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BucketList;

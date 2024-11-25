import React, { useState } from 'react';

function Form3() {
  const [name, setName] = useState('Niki de Saint Phalle');
  const [title, setTitle] = useState('Blue Nana');
  const [city, setCity] = useState('Hamburg');
  const [image, setImage] = useState('https://i.imgur.com/Sd1AgL.jpg');

  return (
    <div>
      <h3>Form3</h3>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>
          Image:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
      </form>
      <p>
        <em>{title}</em> by {name} (located in {city})
      </p>
      <img src={image} alt={title} style={{ width: '300px', borderRadius: '10px' }} />
    </div>
  );
}

export default Form3;

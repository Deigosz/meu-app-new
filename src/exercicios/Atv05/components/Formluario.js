import React, { useState } from 'react';

function Form2() {
  const [firstName, setFirstName] = useState('Barbara');
  const [lastName, setLastName] = useState('Hepworth');
  const [email, setEmail] = useState('bhepworth@sculpture.com');

  return (
    <div>
      <h3>Form2</h3>
      <form>
        <label>
          First name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </form>
      <p>
        {firstName} {lastName} ({email})
      </p>
    </div>
  );
}

export default Form2;

import React from "react";



const people = [
  { id: 1, name: "Albert Einstein", profession: "Physicist" },
  { id: 2, name: "Marie Curie", profession: "Chemist" },
  { id: 3, name: "Ada Lovelace", profession: "Mathematician" },
];

function ListRendering() {
  return (
    <div>
      <h3>Online</h3>
      <ul className="list">
        {people.map((person) => (
          <li key={person.id} className="list-item">
            {person.name} - {person.profession}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRendering;

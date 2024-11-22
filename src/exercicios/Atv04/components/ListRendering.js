import React from "react";


const people = [
  { id: 1, name: "Albert Einstein", profession: "Physicist" },
  { id: 2, name: "Marie Curie", profession: "Chemist" },
  { id: 3, name: "Ada Lovelace", profession: "Mathematician" },
];

function ListRendering() {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          {person.name} - {person.profession}
        </li>
      ))}
    </ul>
  );
}

export default ListRendering;

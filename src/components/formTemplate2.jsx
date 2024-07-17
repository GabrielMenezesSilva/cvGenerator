import React from "react";
import { useState } from "react";

function formComponent1({ template, setTemplate }) {
  const [name, setName] = useState("");
  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <div className="form">
      <h1>About me</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={person.name}
        onChange={(e) => {
          setPerson({ ...person, name: e.target.value });
        }}
      />
    </div>
  );
}
export default formComponent1;
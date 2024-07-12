import React, { useState } from "react";

export default function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleChangeQuantity(e) {
    setQuantity(Number(e.target.value));
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { id: Date.now(), description, quantity, packed: false };
    console.log(newItem);
    onAddItem(newItem);

    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleChangeQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleChangeDescription}
      />
      <button>Add</button>
    </form>
  );
}

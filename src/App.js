import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleUpdateItem(itemId) {
    setItems((items) =>
      [...items].map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }

  function handleDeleteItem(itemId) {
    setItems((items) => [...items].filter((item) => item.id !== itemId));
  }

  function handleClearList() {
    if (!items.length) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

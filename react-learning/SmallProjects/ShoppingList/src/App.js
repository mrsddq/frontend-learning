import "./styles.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(indexToRemove) {
    setItems((current) => current.filter((_, index) => index !== indexToRemove));
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.namedItem("item").value.trim();
    if (!value) return;
    setItems((current) => [...current, value]);
    form.reset();
  }

  return (
    <>
      <h1>Project 4: Shopping List</h1>
      <div className="shopping-list">
        <h2>Items To Buy</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="item"
            aria-label="New item"
            placeholder="Add a new item"
            required
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={() => onRemoveItem(index)} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete" aria-label={`Remove ${item}`} onClick={onRemoveItem}>
        x
      </button>
    </li>
  );
}

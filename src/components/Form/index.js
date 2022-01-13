import React from "react";
import List from "../List";
import "./Form.css";

function Form({ updateInput, updateItems, todos, newItem, deleteItem }) {
  return (
    <div className="container">
      <form onSubmit={updateItems}>
        <input
          className="item"
          onChange={updateInput}
          type="text"
          value={newItem}
        />
        <button className="item">Click Me</button>
      </form>
      <List todos={todos} deleteItem={deleteItem} />
    </div>
  );
}

export default Form;

import React from "react";
import List from "../List";

function Form({ updateInput, updateItems, todos, newItem, deleteItem }) {
  return (
    <div>
      <form onSubmit={updateItems}>
        <input onChange={updateInput} type="text" value={newItem} />
        <button>Click Me</button>
      </form>
      <List todos={todos} deleteItem={deleteItem} />
    </div>
  );
}

export default Form;

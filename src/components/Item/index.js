import React from "react";

function Item({ text, deleteItem }) {
  return (
    <div>
      <p>
        {text}
        <button onClick={deleteItem}>X</button>
      </p>
    </div>
  );
}

export default Item;

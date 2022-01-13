import React, { useState } from "react";
import "./Item.css";

function Item({ text, deleteItem }) {
  const [cross, setCross] = useState(false);

  function updateCross() {
    setCross(!cross);
    console.log(cross);
  }

  return (
    <div>
      <p className={cross ? "cross" : ""}>
        {text}
        <button className="button" onClick={deleteItem}>
          X
        </button>
        <input className="item" type="checkbox" onClick={updateCross} />
      </p>
    </div>
  );
}

export default Item;

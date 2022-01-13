import React from "react";
import Item from "../Item";

function List({ todos, deleteItem }) {
  return (
    <ul>
      {todos.map((item, index) => {
        return (
          <li key={index}>
            <Item
              className="cross"
              text={item}
              deleteItem={() => {
                deleteItem(index);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default List;

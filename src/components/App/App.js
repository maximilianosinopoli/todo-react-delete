import "./App.css";
import Form from "../Form";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([
    "Learn something new",
    "Cook something decent",
  ]);

  function updateInput(e) {
    setNewItem(e.target.value);
  }

  function updateItems(e) {
    e.preventDefault();
    setTodos([...todos, newItem]);
    setNewItem("");
  }

  function deleteItem(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    console.log(todos);
  }

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <Form
        updateInput={updateInput}
        updateItems={updateItems}
        deleteItem={deleteItem}
        todos={todos}
        newItem={newItem}
      />
    </div>
  );
}

export default App;

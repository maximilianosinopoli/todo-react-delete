import "./App.css";
import Form from "../Form";
import { useState } from "react";

function App() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  let day = weekday[date.getDay()];

  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([
    "Learn something new",
    "Cook something decent",
    "Improve my React Skills..",
  ]);

  function updateInput(e) {
    setNewItem(e.target.value);
  }

  function updateItems(e) {
    if (newItem !== "") {
      e.preventDefault();
      setTodos([...todos, newItem]);
      setNewItem("");
    } else {
      e.preventDefault();
      alert("Write down a task! Try Again!");
    }
  }

  function deleteItem(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div className="App">
      <h1>To Do List for {day}:</h1>
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

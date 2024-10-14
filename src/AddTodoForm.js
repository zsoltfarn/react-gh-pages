// AddTodoForm.js
import React, { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim() === "") return;
    addTodo(todoInput);
    setTodoInput(""); // Clear input after adding todo
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;

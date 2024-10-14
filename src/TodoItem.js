import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";


function TodoItem({ todo, index, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditSubmit = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <li className={todo.isCompleted ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleComplete(index)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        <FontAwesomeIcon icon={faEdit} /> {/* Edit icon */}
      </button>
      {isEditing && (
        <button onClick={handleEditSubmit}>
          <FontAwesomeIcon icon={faSave} /> {/* Save icon */}
        </button>
      )}
      <button onClick={() => deleteTodo(index)}>
        <FontAwesomeIcon icon={faTrash} /> {/* Trash icon */}
      </button>
    </li>
  );
}



export default TodoItem;

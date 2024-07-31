import React, { useState } from "react";

export default function TodoForm({ handleAddTodo }) {
  const [inputText, setInputText] = useState("");

  function createTodo() {
    if (!inputText) {
      alert("Input cannot be empty.");
      return
    }
    handleAddTodo(inputText);
    setInputText("");
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        id="new-task"
        placeholder="Add a new task..."
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            createTodo();
          }
        }}
      />
      <button
        id="add-task-button"
        onClick={() => createTodo()}
      >
        Add
      </button>
    </div>
  );
}

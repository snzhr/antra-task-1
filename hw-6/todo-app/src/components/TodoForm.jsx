import React, { useEffect, useState } from "react";

export default function TodoForm({ handleSetTodo, editableTodo }) {
  const [inputText, setInputText] = useState("");

  function createTodo() {
    if (!inputText) {
      alert("Input cannot be empty.");
      return;
    }

    handleSetTodo(inputText);
    setInputText("");
  }

  useEffect(() => {
    if (editableTodo) {
      setInputText(editableTodo?.title);
    }
  }, [editableTodo]);

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        id="new-task"
        placeholder="Add a new todo..."
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            createTodo();
          }
        }}
      />
      <button id="add-task-button" onClick={() => createTodo()}>
        {editableTodo ? "Save" : "Add"}
      </button>
    </div>
  );
}

import React from "react";

export default function Todo({
  id,
  title,
  handleDelete,
  handleEdit,
  handleCancel,
  index,
  currentTodo,
}) {
  function handleEditClick() {
    if (currentTodo) {
      handleCancel();
    } else {
      handleEdit({ id, title });
    }
  }

  return (
    <li className="task-item">
      {index + 1}. {title}
      <div>
        <button className="delete-button" onClick={() => handleDelete(id)}>
          Delete
        </button>
        <button className="edit-button" onClick={handleEditClick}>
          {" "}
          {currentTodo?.id === id ? "Cancel" : "Edit"}
        </button>
      </div>
    </li>
  );
}

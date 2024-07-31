import React from "react";

export default function Todo({ id, title, handleDelete }) {
  return (
    <li className="task-item">
      {id}. {title} 
      <button className="delete-button" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

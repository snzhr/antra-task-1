import React, { Component } from "react";

export default class Todo extends Component {
  handleEditClick() {
    if (this.props.currentTodo) {
      this.props.handleCancel();
    } else {
      this.props.handleEdit({ id: this.props.id, title: this.props.title });
    }
  }
  render() {
    return (
      <li className="task-item">
        {this.props.index + 1}. {this.props.title}
        <div>
          <button
            className="delete-button"
            onClick={() => this.props.handleDelete(this.props.id)}
          >
            Delete
          </button>
          <button
            className="edit-button"
            onClick={() => this.handleEditClick()}
          >
            {" "}
            {this.props.currentTodo?.id === this.props.id ? "Cancel" : "Edit"}
          </button>
        </div>
      </li>
    );
  }
}

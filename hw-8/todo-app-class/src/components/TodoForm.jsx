import React, { Component } from "react";

export default class TodoForm extends Component {


  state = {
    inputText: "",
  };

  createTodo() {
    if (!this.state.inputText) {
      alert("Input cannot be empty.");
      return;
    }

    this.props.handleSetTodo(this.state.inputText);
    this.setState({inputText: ""})
  }

  componentDidUpdate(prevProps){
    if (this.props.editableTodo !== prevProps.editableTodo){
    this.setState({inputText: this.props.editableTodo?.title})
    }
  }

  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          value={this.state.inputText}
          onChange={(e) => this.setState({ inputText: e.target.value })}
          id="new-task"
          placeholder="Add a new todo..."
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              this.createTodo();
            }
          }}
        />
        <button id="add-task-button" onClick={() => this.createTodo()}>
          {this.props.editableTodo ? "Save" : "Add"}
        </button>
      </div>
    );
  }
}

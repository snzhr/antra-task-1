import "./App.css";
import Todo from "./components/Todo";
import { useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(inputValue) {
    const todo = {
      id: todos.length + 1,
      title: inputValue,
    };
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="container">
      <TodoForm handleAddTodo={addTodo} />
      <ul id="task-list">
        {todos.length ? (
          todos.map((todo) => (
            <Todo key={todo.id} {...todo} handleDelete={deleteTodo} />
          ))
        ) : (
          <span>No todos</span>
        )}
      </ul>
    </div>
  );
}

export default App;

import "./App.css";
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import { addTodo, editTodo, getTodos, removeTodo } from "./apis/todoApis";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  async function setTodo(inputValue) {
    const todo = {
      title: inputValue
    };
    try {
      if (currentTodo) {
        await editTodo(currentTodo.id, todo);
      } else {
        await addTodo(todo);
      }
      await getData();
      setCurrentTodo(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function getData() {
    try {
      const res = await getTodos();
      setTodos(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTodo(id) {
    try {
      await removeTodo(id);
      await getData();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <TodoForm handleSetTodo={setTodo} editableTodo={currentTodo} />
      <ul id="task-list">
        {todos.length ? (
          todos.map((todo, index) => (
            <Todo
              key={todo.id}
              {...todo}
              index={index}
              handleEdit={(todo) => setCurrentTodo(todo)}
              handleDelete={deleteTodo}
              handleCancel={() => setCurrentTodo(null)}
              currentTodo={currentTodo}
            />
          ))
        ) : (
          <span>No todos</span>
        )}
      </ul>
    </div>
  );
}

export default App;

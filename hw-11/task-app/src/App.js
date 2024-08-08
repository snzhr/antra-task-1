import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import { CustomDispatch } from "./redux/CustomDispatch";
import { CustomSelector } from "./redux/CustomSelector";

function App() {
  const [title, setTitle] = useState("");
  const tasks = CustomSelector((state) => state.tasks);
  const dispatch = CustomDispatch();

  const handleOnChange = (e) => {
      setTitle(e.target.value)
  }

  const handleAddTask = () => {
    const newTask = { id: tasks.length + 1, title };
    dispatch({ type: "ADD", payload: newTask });
    setTitle("");
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={handleOnChange}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((i) => {
          return <Task key={i.id} id={i.id} title={i.title} handleRemove={handleDeleteTask}/>;
        })}
      </ul>
    </div>
  );
}

export default App;

import './App.css';
import { Component } from 'react';
import { addTodo, editTodo, getTodos, removeTodo } from './apis/todoApis';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

class App extends Component{

  state = {
    todos: [],
    currentTodo: null
  }

  async setTodo(inputValue) {

    const todo = {
      title: inputValue
    };
      
    try {
      if (this.state.currentTodo) {
        await editTodo(this.state.currentTodo.id, todo);
      } else {
        await addTodo(todo);
      }
      await this.getData();
      this.setState({currentTodo: null})
    } catch (error) {
      console.log(error);
    }
  }

  async getData() {
    try {
      const res = await getTodos();
      this.setState({todos: res})
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTodo(id) {
    try {
      await removeTodo(id);
      await this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount(){
    this.getData();    
  }

  render(){
    return (
      <div className="container">
        <TodoForm handleSetTodo={(e) => this.setTodo(e)} editableTodo={this.state.currentTodo} />
        <ul id="task-list">
          {this.state.todos.length ? (
            this.state.todos.map((todo, index) => (
              <Todo
                key={todo.id}
                {...todo}
                index={index}
                handleEdit={(todo) => {
                  this.setState({currentTodo: todo})
                }}
                handleDelete={(id) => this.deleteTodo(id)}
                handleCancel={() => this.setState({currentTodo: null})}
                currentTodo={this.state.currentTodo}
              />
            ))
          ) : (
            <span>No todos</span>
          )}
        </ul>
      </div>
    );
  }
}

export default App;

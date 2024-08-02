const baseUrl = "http://localhost:5000/todos";
const headers = { "Content-Type": "application/json" };

async function getTodos() {
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function addTodo(todo) {
  try {
    const res = await fetch(baseUrl, {method: "POST", body: JSON.stringify(todo), headers });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function removeTodo(id) {
    try {
      const res = await fetch(`${baseUrl}/${id}`, {method: "DELETE"});
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

async function editTodo(id, todo) {
    try {
      const res = await fetch(`${baseUrl}/${id}`, {method: "PATCH", body: JSON.stringify(todo), headers });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

export {addTodo, getTodos, editTodo, removeTodo};
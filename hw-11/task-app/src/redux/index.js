import { legacy_createStore as createStore } from "redux";

export const initialState = {
  tasks: [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Redux" },
    { id: 3, title: "Do the homework" },
    { id: 4, title: "Repeat everything" },
  ],
};

export const taskReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE":
      const filteredArr = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return { ...state, tasks: filteredArr };
    default:
      return state;
  }
};

const store = createStore(taskReducer, initialState);
export default store;
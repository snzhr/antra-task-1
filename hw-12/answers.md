## What is FLUX?

- Flex is an architectural pattern that is used for state management.It was introduced by Meta. It has a one-way data flow, where with the hekp of actions we update the state and state updates the view.


## What is Redux? How do you use it with React components?

- Redux is a state management library for JavaScript applications and mostly used in React. It helps us to manage the the state of our app by using actions to describe any updates and reducers to update the state.
- So in order to use it with React, we have to install it in our app. Then we create a store with initial state, define some reducers that updates the state. We can also use action creator functions. And in our component we can connect to the store using useSelector hook, and trigger actions using useDispatch.


## What is a reducer?

- Basically reducer is a function that updates the state according to the actions. We may have multiple reducers.


## How do you choose between ContextAPI and Redux for global state management?

- ContextAPI is good for smaller applications with a very simple state logic.
- Redux is good for more complex ones with a larger scale. 


## What is redux thunk and why do you want to use it?

- Redux Thunk is a middleware for Redux that helps us to handle asynchronous operations by allowing actions creators return function instead of object. It makes our job easier when it comes to data fetching or side effects. 
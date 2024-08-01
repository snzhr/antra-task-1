## What is useEffect? What are the different behaviors of useEffect? What is a dependency array?

- useEffect is a React hook which helps us to handle side effects such as data fetching, subscriptions and etc. 
- useEffect has different behaviors like, if we pass only callback function, then it will run after every component render, so this is default behavior. If we pass an empty dependency array as a second argument, then it will run only once after first component render. Another behavior is when we pass array of dependencies(some values), then it will run when those values change. We can also return a function which is going to be the cleanup function, in case if we need to clear some subscriptions or event handlers in order to prevent memory leak. 
- Dependency array is an array of values, which we want to keep track of. So, if array is empty, useEffect will run only once, if array has some values, then React will trigger that useEffect when any of those values change.

## What is useRef and when do you want to use it?

- useRef is another React hook which helps us to create mutable data, that is we can mutate it directly. Compared to useState, useRef doesn't cause re-render. Mostly it is used to get access to DOM elements. 


## How to reuse hook logic in React?

- In order to reuse hook logic in React, we can create a custom hook. Custom hooks are useful when we want to keep our code cleaner and make it more modular. By creating custom hooks, we are going to create some mostly used logic(such as data fetching) as a separate module, making our components cleaner and more readable. We can also use React's built-in hooks in custom hooks.
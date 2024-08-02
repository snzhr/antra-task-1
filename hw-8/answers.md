## What are some differences between class and functional components?

- Class components are the traditional way of creating React components with built-in state and lifecycle methods. Functional components are a newer, simpler approach that use hooks to manage state and effects. Most developers now prefer functional components because they are easier to work with and more concise.

## Explain what lifecycle is in a simple way. How do you manage it in class and functional components?

- Lifecycle in React refers to the different stages a component goes through from when it’s created to when it’s removed from the screen.For example in Class components we have special methods like componentDidMount,componentDidUpdate and componentWillUnmount to handle it.
But in functional components we can handle it with useEffect hook.

## Explain immutability in one sentence.

- Immutability means you can’t change something once it’s created. If you need to change it, you create a new one.
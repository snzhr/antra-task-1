## What is useState?

- useState is a function that helps us to add local state to our components in React application.
So, we use it to keep track of values that are going to be used in a component.

## What is props drilling and state lifting?

- Props drilling is when we pass some data down from parent to the child through other children
even if they don't need that data. So, our code becomes less readable and hard to maintain.

- State lifting is like when we try to share some data between 2 or more components. So, in order to make this happen, we are lifting the state to the parent component, so the sibling component also can
access the state. When we change that state from one component the another one will also get the changes.

## What is the ‘key’ attribute?

- Key is an attribute that we have to use when we try to render list of items and is should be something unique. It helps React to keep track of every single item, so it can render efficiently.

## What is synthetic event?

- Synthetic event is a wrapper event to the browser's native event. It helps us to make sure that event handling code works properly in all browsers. Also, React uses it for optimization purposes.

## What is virtual dom?

- Virtual DOM is a copy of the original DOM which React creates it in memory to improve the performance. So, React creates it initially, and whenever change occurs in an application, React creates new virtual DOM, and compares the old one with the new one. According to the difference, React re-renders only that place where change occured by optimizing the performance.
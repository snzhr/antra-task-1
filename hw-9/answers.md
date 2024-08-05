## How do you decide when to split a component into subcomponents?
- Mostly I look at repeating elements or blocks. If any block is appeared more than once or twice, I think we can make it a component, so we can reuse it many times.

## What is the difference between state and props?
- State is a local data, which belongs to a specific component. So, we can change it within the component.
- Props are also a data, but it belongs to the parent component. So, basically, when we pass parent's local data to the children components is called props. It is readonly information.

## How to trigger rerender in a component?
- When the local state is changed or props are changed component will be rerendered.

## Why do you like react over other front-end libraries and frameworks?
- React is easier to learn, it uses functional components. It is lightweight, which means comes with very small amount of extra libraries. You can extend it according to your needs (install 3rd party libraries etc.) And it is very convenient for both small and large scale applications.

## What’s the difference between controlled components and uncontrolled components?
- Controlled components are managed by React. So we control the state through React and React takes care of the rest.
- Uncontrolled components are not managed by React rather we use DOM in order to do some operations.

## How to prevent components from unnecessary rerendering?
- We can use React.memo, and wrap our component with it, so it will be memoized. And will prevent re-rendering. shouldComponentUpdate can be used in classComponents. Also we can use useCallback and useMemo to memoize component functions and data.

## Why are props needed to be immutable?
- Props need to be immutable because of data flow from parent to children. It should be clear and predictable. Mistly we use props only for showing that information to the clients. Or accorgind to the props we can use another local logic in our child component.

## Explain the Virtual DOM and how React uses it to improve performance.
Virtual DOM is a copy of DOM, that React uses it to keep track of changes.Whenever something changes, React compares the Virtual DOM with the previous one, so then it updates the real DOM. This approach helps us to make our app faster and efficient.

## Can you explain the useMemo and useCallback hooks and provide examples of when you might use them?
- We use useMemo when we want to memoize the local data. It is very useful when we do not want to recalculate somthing that is expensive.

- We use useCallback when we want to memoize the functions so they will be recreated when the dependencies change.

## Explain the concept of Higher-Order Components (HOCs) and provide an example use case.
- Higher order components are functions that take a components as a parameter and return a new component with some extra functionality. As an example, we can create a HOC component which takes a component, and if user is authenticated we can show our component, otherwise we can redirect user to login component. So, HOC component wraps our component and according to the condition will render or redirect to another component.

## Discuss the differences between React's class components and functional components. Which one do you prefer and why?

- Class components are legacy way of creating components. And they are a little bit confusing.
- Functional components are modern way of creating components. Easier to read and write and they have hooks which are very helpful.

## How do you ensure your code is maintainable and scalable?
- We have to use clear naming conventions, consistent formatting. Break down complex code into smaller code. Do not repeat yourself. We can add comments sometimes, and write a documentation.
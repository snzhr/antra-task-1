/*
1) 
a) Instance methods are functions that belongs to and instance or an object which was created
from a class. It can becalled on instances of class and can get access or can modify the instance
properties.

b) Static methods are called on the class itself, not on their instances. Unlike instance methods
they don't have access to instance properties. However, can access other static properties and 
methods of the class.

2) JavaScript is a single-threaded language, so it can execute only one piece of code at a time.
But, in JavaScript we have something called event loop, which helps us to handle concurrency.
So, event loop consists of: 
a) Call stack - which manages function calls and executions.
b) Web APIs - helps us to handle asynchronous operations.
c) Callback queue - a place where callbacks from asynchronous operations take place for execution.
Mechanism of evet loop continuously checks the call stack and callback queue.

3) async/await helps us in handling asynchronous operation, which makes it easier to read and maintain.
Async means, that you are going to work with asynchronous code and the function will return Promise.
Await is used inside async function and pauses the execution of code until the Promise is resolved.
Differences are, async/await is more readable or is a syntactic sugar for the instance methods such as
then(), catch() and so on.

4) Await keyword can only be used within the async functions. So, using it outside of async function
will give us a Syntax error.

5) Callback hell is the situtation where we have multiple nested callbacks. It comes when we try to
perform several asynchronous operations which depend on each other. The problem is when we nest
multiple callbacks, our code becomes less readable, less maintainable, it's difficult to debug.
*/
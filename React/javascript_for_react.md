---
id: js-for-react
title: Javascript for React
---

# Javascript for React

In this blog, we are listing Javascript fundamental features that we'd recommend you spend some time learning so you can be as effective as possible with React.

## Table of Contents

* [var, let, and const in React](#var-let-const)
* [Destructuring, Rest, and Spread](#destructuring)
* [Shorthand object assignment](#shorthand-object-assignment)
* [Template Literals](#template-literals)
* [Arrow Functions](#arrow-functions)
* [Ternary Operator in React](#ternary-operator)
* [Optional chaining](#optional-chaining)
* [Array methods](#array-methods)
* [import and export in React](#import-export)
* [Promises and Async/Await in React](#promises-async-await)

## var, let, and const in React
<a name="var-let-const">

The rules of thumb:
* Don't use `var` anymore, because `let` and `const` are more specific
* Default to `const`, because it cannot be re-assigned or re-declared
* Use `let` when re-assigning the variable

## Destructuring, Rest, and Spread
<a name="destructuring">

[MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). It's often the case that you have to access plenty of properties from your state or props in your component. Rather than assigning them to a variable one by one, you can use destructuring assignment in JavaScript.

```javascript
const state = { counter: 1, list: ['a', 'b'] };
 
// no object destructuring
const list = state.list;
const counter = state.counter;
// object destructuring
const { list, counter } = state;

// no destructuring
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}
// destructuring
function Greeting({ greeting }) {
  return <h1>{greeting}</h1>;
}
```

Another great feature is the **rest destructuring**. It is often used for splitting out a part of an object, but keeping the remaining properties in another object. [MDN: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```javascript
const state = { counter: 1, list: ['a', 'b'] };
 
// rest destructuring
const { list, ...rest } = state;
 
console.log(rest);
// output: { counter: 1 }
console.log(list);
// output: ['a', 'b']
```

The spread operator comes with three `...`, but shouldn't be mistaken for the rest operator. It depends on the context where it is used. Used within a destructuring (see above), it is as rest operator. Used somewhere else it is a spread operator. [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```javascript
const userCredentials = { firstname: 'Robin' };
const userDetails = { nationality: 'German' };
 
const user = {
  ...userCredentials,
  ...userDetails,
};
 
console.log(user);
// output: { firstname: 'Robin', nationality: 'German' }
```

The spread operator literally spreads all the key value pairs of an object. In React, it comes in handy when props are just being passed down to the next component.

```javascript
// without spread operator
<ul>
  {users.map(user => <li>
    <User
      name={user.name}
      nationality={user.nationality}
    />
  </li>)}
</ul>
// Rather than passing all properties of an object property by property, 
// you can use the spread operator to pass all key value pairs to the next component.
<ul>
  {users.map(user => <li>
    <User {...user} />
  </li>)}
</ul>
// ...
const User = ({ name, nationality }) =>
  <span>{name} from {nationality}</span>;
```

## Shorthand object assignment
<a name="shorthand-object-assignment">

There is one little addition in the JavaScript language which leaves beginners confused. In JavaScript ES6, you can use a shorthand property syntax to initialize your objects more concisely.

```javascript
const a = 'hello'
const b = 42
const c = {d: [true, false]}
console.log({a, b, c})
// this is the same as:
console.log({a: a, b: b, c: c})
// in React:
function Counter({initialCount, step}) {
  const [count, setCount] = useCounter({initialCount, step})
  return <button onClick={setCount}>{count}</button>
}
```

## Template Literals
<a name="template-literals">

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. [MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```javascript
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} 
and not ${2 * a + b}.`);

// in React:
function Box({className, ...props}) {
  return <div className={`box ${className}`} {...props} />
}
```

## Arrow Functions
<a name="arrow-function">
Arrow Functions are one of Javascript's language additions in ES6 which pushed Javascript forward in functional programming. They are used in React applications for keeping the code concise and readable.

```javascript
// JavaScript ES5 function
function getGreeting() {
  return 'Welcome to CoderSchool';
}
 
// JavaScript ES6 arrow function with body
const getGreeting = () => {
  return 'Welcome to CoderSchool';
}
 
// JavaScript ES6 arrow function without body and implicit return
const getGreeting = () =>
  'Welcome to CoderSchool';

// in React:
function ItemList({items}) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  )
}
```

## Ternary Operator in React
<a name="ternary-operator">

[MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is beautifully declarative, especially in JSX.

```javascript
// in React:
function ItemList({items}) {
  return (
    <>
      {items.length ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>There are no items in the list.</div>
      )}
    </>
  )
}
```

Another way of doing it, if you only return one side of the conditional rendering anyway, is using the `&&` operator:

```javascript
const showUsers = false;
 
return (
  <div>
    {showUsers && (
      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    )}
  </div>
);
```

## Optional Chaining
<a name="optional-chaining">

Also known as the "Elvis Operator," this allows you to safely access properties and call functions that may or may not exist. 

```javascript
// what we did before optional chaining:
const streetName = user && user.address && user.address.street.name
// what we can do now:
const streetName = user?.address?.street?.name
// this will run even if options is undefined (in which case, onSuccess would be undefined as well)
const onSuccess = options?.onSuccess
// this will run without error even if onSuccess is undefined (in which case, no function will be called)
onSuccess?.({data: 'yay'})
// and we can combine those things into a single line:
options?.onSuccess?.({data: 'yay'})
// and if you are 100% certain that onSuccess is a function if options exists
// then you don't need the extra ?. before calling it. Only use ?. in situations
// where the thing on the left might not exist.
options?.onSuccess({data: 'yay'})
// in React:
function UserProfile({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      <strong>{user.bio?.slice(0, 50)}...</strong>
    </div>
  )
}
```

A word of caution around this is that if you find yourself doing `?.` a lot in your code, you might want to consider the place where those values originate and make sure they consistently return the values they should.

[MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)


## Array Methods
<a name="array-methods">

The following methods are the most frequently used: `find`, `some`, `every`, `includes`, `map`, `filter`, `reduce`. [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

```javascript
const dogs = [
  {
    id: 'dog-1',
    name: 'Poodle',
    temperament: [
      'Intelligent',
      'Active',
      'Alert',
      'Faithful',
      'Trainable',
      'Instinctual',
    ],
  },
  {
    id: 'dog-2',
    name: 'Bernese Mountain Dog',
    temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
  },
  {
    id: 'dog-3',
    name: 'Labrador Retriever',
    temperament: [
      'Intelligent',
      'Even Tempered',
      'Kind',
      'Agile',
      'Outgoing',
      'Trusting',
      'Gentle',
    ],
  },
]
dogs.find(dog => dog.name === 'Bernese Mountain Dog')
// {id: 'dog-2', name: 'Bernese Mountain Dog', ...etc}
dogs.some(dog => dog.temperament.includes('Aggressive'))
// false
dogs.some(dog => dog.temperament.includes('Trusting'))
// true
dogs.every(dog => dog.temperament.includes('Trusting'))
// false
dogs.every(dog => dog.temperament.includes('Intelligent'))
// true
dogs.map(dog => dog.name)
// ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever']
dogs.filter(dog => dog.temperament.includes('Faithful'))
// [{id: 'dog-1', ..etc}, {id: 'dog-2', ...etc}]
dogs.reduce((allTemperaments, dog) => {
  return [...allTemperaments, ...dog.temperaments]
}, [])
// [ 'Intelligent', 'Active', 'Alert', ...etc ]

// in React:
const App = () => {
  var users = [
    { name: 'Robin', isDeveloper: true },
    { name: 'Markus', isDeveloper: false },
  ];
 
  return (
    <ul>
      {users
        .filter(user => user.isDeveloper)
        .map(user => <li>{user.name}</li>)
      }
    </ul>
  );
};
```

## Import and Export in React
<a name="import-export">

These import and export statements are just another topic which requires explanation when getting started with your first React application. MDN: [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

Let's say in one file you want to export the following variables:

```javascript
// in file1.js
const firstname = 'Charles';
const lastname = 'Lee';
 
export { firstname, lastname };
```

Then you can import them in another file with a relative path to the first file:

```javascript
import { firstname, lastname } from './file1.js';
 
console.log(firstname);
// output: Charles
```

You can also import all exported variables from another file as one object:

```javascript
import * as person from './file1.js';
 
console.log(person.lastname);
// output: Lee
```

The `export default` statement can be used for a few use cases:

* To export and import a single functionality
* To highlight the main functionality of the exported API of a module

```javascript
const sang = {
  firstname: 'Charles',
  lastname: 'Lee',
};
 
export default sang;
```

You don't need the curly braces to import the default export. Furthermore, the import name can differ from the exported default name.

```javascript
import developer from './file1.js';
 
console.log(developer);
// output: { firstname: 'Charles', lastname: 'Lee' }
```

Another example:

```javascript
const firstname = 'Charles';
const lastname = 'Lee';
 
const sang = {
  firstname,
  lastname,
};
 
export {
  firstname,
  lastname,
};
 
export default sang;
```

Import the default or the named exports in another file:

```javascript
import developer, { firstname, lastname } from './file1.js';
 
console.log(developer);
// output: { firstname: 'Charles', lastname: 'Lee' }
console.log(firstname, lastname);
// output: Charles Lee
```

You can also spare additional lines and export the variables directly for named exports:

```javascript
export const firstname = 'Charles';
export const lastname = 'Lee';
```

## Promises and Async/Await in React
<a name="promises-async-await">

[MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

[MDN: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

This one's a big subject and it can take a bit of practice and time working with them to get good at them. Promises are everywhere in the JavaScript ecosystem and thanks to how entrenched React is in that ecosystem, they're everywhere there as well (in fact, React itself uses promises internally).

Promises help you manage asynchronous code and are returned from many DOM APIs as well as third party libraries. Async/await syntax is a special syntax for dealing with promises. The two go hand-in-hand.

```javascript
function promises() {
  const successfulPromise = timeout(100).then(result => `success: ${result}`)
  const failingPromise = timeout(200, true).then(null, error =>
    Promise.reject(`failure: ${error}`),
  )
  const recoveredPromise = timeout(300, true).then(null, error =>
    Promise.resolve(`failed and recovered: ${error}`),
  )
  successfulPromise.then(log, logError)
  failingPromise.then(log, logError)
  recoveredPromise.then(log, logError)
}
function asyncAwaits() {
  async function successfulAsyncAwait() {
    const result = await timeout(100)
    return `success: ${result}`
  }
  async function failedAsyncAwait() {
    const result = await timeout(200, true)
    return `failed: ${result}`
  }
  async function recoveredAsyncAwait() {
    let result
    try {
      result = await timeout(300, true)
      return `failed: ${result}` // this would not be executed
    } catch (error) {
      return `failed and recovered: ${error}`
    }
  }
  successfulAsyncAwait().then(log, logError)
  failedAsyncAwait().then(log, logError)
  recoveredAsyncAwait().then(log, logError)
}
function log(...args) {
  console.log(...args)
}
function logError(...args) {
  console.error(...args)
}
// This is the mothership of all things asynchronous
function timeout(duration = 0, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`rejected after ${duration}ms`)
      } else {
        resolve(`resolved after ${duration}ms`)
      }
    }, duration)
  })
}
// in React:
function GetGreetingForSubject({subject}) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [greeting, setGreeting] = React.useState(null)
  React.useEffect(() => {
    async function fetchGreeting() {
      try {
        const response = await window.fetch('https://example.com/api/greeting')
        const data = await response.json()
        setGreeting(data.greeting)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    setIsLoading(true)
    fetchGreeting()
  }, [])
  return isLoading ? (
    'loading...'
  ) : error ? (
    'ERROR!'
  ) : greeting ? (
    <div>
      {greeting} {subject}
    </div>
  ) : null
}
```
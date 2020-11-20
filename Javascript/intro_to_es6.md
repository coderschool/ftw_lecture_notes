# Intro to ES6

JavaScript is what everyone calls the language, but the official name of JavaScript is ECMAScript. That name comes from the standards organization Ecma, which manages the language standard. **ECMAScript 1 (June 1997)** was the first version of the JavaScript language standard.

Up until now, you’ve mostly been writing ECMAScript 5. ES5 is comfortable and familiar, but ES6 gives us a lot of great new features, which we’ll start learning about this week.

## Table of Contents

- [Shorthand object assignment](#shorthand-object-assignment)
- [Template Literal](#template-literal)
- [var vs let & const](#var-let-const)
- [Destructuring, Rest, and Spread](#destructuring)
- [Default and Rest Parameters](#parameters)
- [Arrow Functions](#arrow-functions)
- [What is `this`?](#this)

## Shorthand object assignment

Intuitive and flexible destructuring of Objects into individual variables during assignment.

```javascript
function shorthandPropertyNames() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return { red, green, blue };
  // instead of
  return {
    red: red,
    green: green,
    blue: blue,
  };
}

console.log(shorthandPropertyNames());
```

## Template Literal <a id="template-literal"></a>

In ES5, you put values into strings by concatenating those values and string fragments:

```javascript
function printCoord(x, y) {
  console.log("(" + x + ", " + y + ")");
}
```

In ES6 you can use string interpolation via template literals:

```javascript
function printCoord(x, y) {
  console.log(`(${x}, ${y})`);
}
```

Template literals also help with representing multi-line strings:

```javascript
const HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;
```

## `var` vs `let` & `const` <a id="var-let-const"></a>

We"ve learned that scope is the area of code in which a variable or value can be accessed.

We already know that variables declared (using the keyword `var`) inside of a function will remain scoped to that function. In other words, it won"t be accessible outside of the function.

ES6 gives us two new variable keywords: `let` and `const`. These two variable keywords introduce **block scope**. This means the variable will be confined to the scope of a block that it is defined in, such as an `if` statement or `for` loop and will not be accessible outside of the opening and closing curly braces of the block.

**The differences between `var` vs `let` & `const`**

- The variables declared by `let` and `const` are block-scoped, their scopes are the innermost enclosing blocks. `let` and `const` behave more strictly and throw more exceptions (e.g. when you access their variables inside their scope before they are declared)

```javascript
function blockScoping() {
  if (true) {
    // this will throw an error
    const x = 24;
    let y = 10;
    // this works
    // var x = 24;
    // var y = 10;
  }
  return { x: x, y: y };
}
```

- Unlike `var`, `let` and `const` statements are not hoisted to the top of their enclosing scope.

```javascript
function temporalDeadZone() {
  console.log(myVar);
  console.log(myLet);
  console.log(myConst);
  var myVar = "var";
  // you can use variables before they"re defined with let and const
  let myLet = "let";
  const myConst = "const";
  return { myVars, myLets, myConsts };
}
```

**The differences between `let` vs `const`:**

- Variables declared with `let` can be reassigned, whereas variables declared with `const` cannot.

- If an array or object is declared using the keyword `const`, the contents of that array or object can be changed, but that variable name will always point to that same piece of memory.

```javascript
const obj = { a: 1, b: 2 };
obj.b = 3;
// obj: {a: 1, b: 3}
```

## Destructuring, Rest, and Spread <a id="destructuring"></a>

[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is a convenient way of extracting multiple values from data stored in (possibly nested) objects and arrays.

```javascript
// Object destructuring
const obj = { first: "Jane", last: "Doe" };
const { first, last } = obj; // first = "Jane"; last = "Doe"
const { first: f, last: l } = obj; // f = "Jane"; l = "Doe"

const state = { counter: 1, list: ["a", "b"] };
// no object destructuring
const list = state.list;
const counter = state.counter;
// object destructuring
const { list, counter } = state;
```

```javascript
// Array destructuring
const iterable = ["a", "b"];
const [x, y] = iterable; // x = "a"; y = "b"
```

**Pick what you need**

If you destructure an object, you mention only those properties that you are interested in:

```javascript
const { x: x } = { x: 7, y: 3 }; // x = 7
```

If you destructure an Array, you can choose to only extract a prefix:

```javascript
const [x, y] = ["a", "b", "c"]; // x="a"; y="b";
```

Another great feature is the **rest destructuring**. It is often used for splitting out a part of an object, but keeping the remaining properties in another object. [MDN: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```javascript
const state = { counter: 1, list: ["a", "b"] };

// rest destructuring
const { list, ...rest } = state;

console.log(rest);
// output: { counter: 1 }
console.log(list);
// output: ["a", "b"]
```

The spread operator comes with three `...`, but shouldn"t be mistaken for the rest operator. It depends on the context where it is used. Used within a destructuring (see above), it is as rest operator. Used somewhere else it is a spread operator. [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```javascript
let arr = [-1, 5, 11, 3];
console.log(Math.max(...arr));
```

Another example to append an array to another array:

```javascript
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];

arr1.push(...arr2);
// arr1 is now ["a", "b", "c", "d"]
```

Or to concatenate Arrays:

```javascript
const x = ["a", "b"];
const y = ["c"];
const z = ["d", "e"];

const arr = [...x, ...y, ...z]; // ["a", "b", "c", "d", "e"]
```

## Default and Rest Parameters <a id="parameters" ></a>

ES6 gives us more ways to handle parameters.

**Default parameters:**

```javascript
function f(x, y = 7, z = 42) {
  return x + y + z;
}

f(1); // 50
```

**Rest parameter:**

```javascript
function f(x, y, ...a) {
  return (x + y) * a.length;
}
f(1, 2, "hello", true, 7); // 9
```

## Arrow Functions <a id="arrow-functions" >

ES6 introduced arrow functions, which allow us to write functions with shorter syntax.

To name an arrow function, you must save it as a variable. If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

```javascript
function getFive() {
  return 5;
}
// Arrow function that has no parameter and returns value by default
const getFive = () => 5;

function divide(a, b) {
  return a / b;
}
// Arrow function with parameters
const divide = (a, b) => a / b;
```

Multiple lines or expressions in an arrow function require the curly braces `{}` and the keyword `return`

```javascript
const squared = (x) => {
  console.log(x);
  return x * x;
}; // block
const squared = (x) => x * x; // expression
```

**Summary**

Arrow functions are handy for one-liners. They come in two flavors:

1.  Without curly braces: `(...args) => expression` - the right side is an expression: the function evaluates it and returns the result.
2.  With curly braces: `(...args) => { body }` - brackets allow us to write multiple statements inside the function, but we need an explicit `return` to return something.

## What is `this`? <a id="this"></a>

In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever. When a function is called as a method of an object, its `this` is set to the object the method is called on.

```javascript
var obj = {
  foo: function () {
    return this;
  },
};

obj.foo() === obj; // true
```

**Arrow functions have no `this`**. `this` in arrow functions is determined by the surounding scope.

```javascript
let person = {
  name: "Jack",
  age: 25,
  sayName: function () {
    console.log(this.age);
    let innerFunc = () => {
      console.log(this.age);
    };
    innerFunc();
  },
};
person.sayName();
```

**You should not use arrow functions to create methods inside objects:**

```javascript
let person = {
  name: "Jack",
  age: 25,
  sayName: () => {
    // this refers to the global .....
    console.log(this.age);
  },
};

person.sayName(); // undefined
```

**Summary**

- When a function is declared, it may use `this`, but that `this` has no value until the function is called.
- When a function is called in the “method” syntax: `object.method()`, the value of `this` during the call is `object`.
- When `this` is accessed inside an arrow function, it is taken from outside.

## Additional reading

- [ES6 Cheatsheet](http://es6-features.org/#Lexicalthis)
- [When not to use arrow functions](https://wesbos.com/arrow-function-no-no)

# Lab - Intro to ES6

## Requirements

- Follow the instructions in the comments and put your code in.
- Organize your code so that it's easy to read and review.

Example:

```javascript
function shorthandPropertyNames() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Refactor the code with shorthand property in ES6
  return {
    red: red,
    green: green,
    blue: blue,
  };
  // YOUR CODE STARTS HERE

  // YOUR CODE ENDS HERE
}

console.log(shorthandPropertyNames());
```

Solution:

```javascript
function shorthandPropertyNames() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Refactor the code with shorthand property in ES6
  // YOUR CODE STARTS HERE
  return { red, green, blue };
  // YOUR CODE ENDS HERE
}

console.log(shorthandPropertyNames());
```

## Table of contents

- [var vs let & const](#varletconst)
- [Destructuring, Spread, and Rest](#destructuring)
- [Arrow functions](#arrow-functions)
- [Deep and Shallow Copies](#copy)

## Assignment 1 - var vs let & const <a id="varletconst"></a>

```javascript
function modifyLetVariable() {
  let releaseName = "ES6";
  {
    releaseName = "ES2015";
  }
  // Put your answer in to make it returns true
  return releaseName === "YOUR_ANSWER";
}
```

```javascript
function trappedVariable() {
  // Create a variable x=3 somewhere so that it throws an
  // ReferenceError: x is not defined
  if (true) {
  }
  return x;
}
```

```javascript
function blockLetAndConst() {
  let x = 111;
  {
    const x = 222;
  }
  // Put your answer in to make it returns true
  return x === "YOUR_ANSWER";
}
```

```javascript
function immutableReference() {
  const object = { a: "b" };
  object.a = "q";
  // Put your answer in to make it returns true
  return object.a === "YOUR_ANSWER";
}
```

```javascript
function doLoop() {
  for (var i = 0; i < 10; i++) {}
  // 1. Put your answer in to make it returns true
  // 2. Then change the for loop so that i is trapped inside of the loop, and can't be returned.
  return i === "YOUR_ANSWER";
}
```

## Assignment 2 - Destructuring, Spread, and Rest <a id="destructuring"></a>

```javascript
function getAverage() {
  const obj = { x: 3.6, y: 7.8, z: 4.3 };
  // refactor with object destructuring in one statement
  const x = obj.x;
  const y = obj.y;
  const z = obj.z;
  // YOUR CODE STARTS HERE

  return Math.floor((x + y + z) / 3.0);
}
```

```javascript
function getAddress() {
  let coderschool = {
    city: "HCMC",
    country: "Vietnam",
    address: {
      number: 12,
      street: "Ton Dan",
      district: "4",
    },
  };
  // Using destructuring to create a 'city', 'country' and 'street' variable,
  // so that the function returns true
  // YOUR CODE STARTS HERE

  return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
}
```

```javascript
function getElements() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  // refactor with skipped destructuring for arrays in one statement
  const first = arr[0];
  const third = arr[2];
  const fourth = arr[4];
  // YOUR CODE STARTS HERE

  return { first, third, fourth };
}
```

```javascript
function getNestedElements() {
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apples", "mangos", "oranges"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];
  // refactor with nested destructuring of arrays
  const carrots = food[0][0];
  const cookies = food[2][0];
  const mangos = food[1][1];
  // YOUR CODE STARTS HERE

  return { carrots, cookies, mangos };
}
```

```javascript
function restParameters(first, ...rest) {
  return rest[0] === 1 && rest[1] === 2;
}
// Put the parameters in so that it prints out true
console.log(restParameters("YOUR_ANSWER"));
```

```javascript
function ontoAnObject() {
  const array = [1, 2, 3, 4, 5, 6];
  const object = {};
  // refactor this with destructuring and rest in one statement
  object.one = array[0];
  object.two = array[1];
  object.three = array[2];
  object.rest = array.slice(3);
  // YOUR CODE STARTS HERE

  return object;
}
```

```javascript
function findTheMax() {
  const arr1 = [1, 7, 2, 4];
  const arr2 = [1, 9, 5, 8];
  // Using Math.max() and spread operator
  // to find the maximum number in both arrays
  return "YOUR_ANSWER";
}
```

```javascript
function concatenateArrays() {
  const arr1 = [0, 1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  // Merge those arrays into one using spread operator in one statement
  const result = "YOUR_ANSWER";
  return result;
}
```

```javascript
function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "h from obj2",
    },
  };
  const result = { ...obj1, ...obj2 };
  // Put your answer in to make it returns true
  return (
    result.a === "YOUR_ANSWER" &&
    result.b === "YOUR_ANSWER" &&
    result.c === "YOUR_ANSWER" &&
    result.d.e === "YOUR_ANSWER" &&
    result.d.f === "YOUR_ANSWER" &&
    result.d.g === "YOUR_ANSWER" &&
    result.d.h === "YOUR_ANSWER"
  );
}
```

## Assignment 3 - Arrow functions <a id="arrow-functions"></a>

```javascript
function multiArgument() {
  // refactor to an arrow function
  const divide = function (a, b) {
    return a / b;
  };
  // YOUR CODE STARTS HERE
  return divide(40, 10);
}
```

```javascript
function spreadWithArrow() {
  // refactor to an arrow function
  const asArray = function (...args) {
    return args;
  };
  // YOUR CODE STARTS HERE
  return asArray(1, 2, 3, 4);
}
```

```javascript
function withObject() {
  // refactor to an arrow function
  const getObject = function (favoriteCandy) {
    return { favoriteCandy };
  };
  // YOUR CODE STARTS HERE
  return getObject("twix");
}
```

```javascript
function withMultiLineExpression() {
  // refactor to a arrow functions
  const getString = function (name) {
    return `
        Hello there ${name}
        How are you doing today?
      `;
  };
  // YOUR CODE STARTS HERE
  return getString("Ryan");
}
```

```javascript
function curryAdd() {
  // refactor to a arrow functions
  // YOUR CODE STARTS HERE
  return curryAddition(9)(3)(5);

  function curryAddition(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
}
```

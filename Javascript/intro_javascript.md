# Intro to JavaScript

JavaScript was created to make the web more dynamic. It is a scripting language made to run inside a host environment - like a web browser! It provides programatic control over the objects in that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.

JavaScript can be client-side and server-side, meaning that it can be used to control user-facing interfaces (e.g. browsers) as well as handle the server-side extensions that connect with a database.

## Variables

JS uses **dynamic typing**, meaning variables can hold values of any type without any type enforcement.

You can declare a variable like this:

```js
var myVariableName;
```

**Rules for Naming Variables**:

- Names must begin with a letter, dollar sign, or an underscore. They cannot begin with a number
- Names can contain any of the above characters plus a number, but you cannot use a dash `-` or a period `.` within the name
- You cannot use keywords or reserved words (such as `var` or `for`)
- All variables are case sensitive
- Use names that describe the kind of information you plan to assign the variable
- If your variable is made up of more than one word, then use **camelCase**, for example `thisIsMyVariableName`

## Values & Types

There are different data types in JavaScript. It’s important to understand what type of data you’re dealing with as you’re writing code, and knowing the types of data are available to you is the first step.

JS uses **dynamic typing**, meaning variables can hold values of any type without any type enforcement.

**Built-in types**: `string`, `number`, `boolean`, `null`, `undefined`, `object`

```javascript
var a;
typeof a; // "undefined"

a = "hello world";
typeof a; // "string"

a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object"--weird, bug

a = undefined;
typeof a; // "undefined"

a = { b: "c" };
typeof a; // "object"
```

## Operators

There are 5 basic types of operators to get you started:

1.  [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment) assign a value to a variable. `var color = 'magenta';`
2.  [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic) perform basic math. `var addTwo = 2 + 2;`
3.  [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String) combine strings. `var greeting = 'Hello! ' + 'Nice to meet you.';`
4.  [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison) compare two values and return a true or false. `var buy = 3 > 5; // Value of buy is false`
5.  [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical) combines expressions and return a Boolean value of true or false. `var buy = (5 > 3) && (2 < 4);`

## Conditional

Basic structure of a conditional:

```javascript
if (expression) {
  statements;
} else if (expression) {
  statements;
} else {
  statements;
}
```

Let's run this example in VSCode:

```javascript
var today = new Date().getDay();

if (today === 6) {
  console.log("Today is Saturday");
} else if (today === 0) {
  console.log("Today is Sunday");
} else {
  console.log("Looking forward to the Weekend");
}
```

`switch` statement can be used as a shorthand for a series of `if..else` statements.

```javascript
switch (today) {
  case 6:
    console.log("Today is Saturday");
    break;
  case 0:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Looking forward to the Weekend");
}
```

You can put two cases to have the same action:

```javascript
switch (a) {
  case 2:
  case 10:
    // some cool stuff
    break;
  case 42:
    // other stuff
    break;
  default:
  // fallback
}
```

## Objects

Objects are a collection of **key-value pairs** surrounded by curly braces. A key is like a name that holds a value. You’re actually used to working with key-value pairs already, because a key-value pair in an object is similar to a variable - the variable name serves as a label for the data.

Each key in an object must be **unique**. You cannot have two keys with the same name.

```javascript
var obj = {
  a: "hello world",
  b: 42,
  c: true,
};

obj.a; // "hello world"
obj.b; // 42
obj.c; // true

obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true
```

Bracket notation is useful if you have a property name that has special characters in it, like `obj["hello world!"]`. Or if you want to access a property/key but the name is stored in another variable, such as:

```javascript
var obj = {
  a: "hello world",
  b: 42,
};

var b = "a";

obj[b]; // "hello world"
obj["b"]; // 42
```

When we assign a function as the value to one of our keys, we call that function a **method**.

```javascript
var school = {
  name: "CoderSchool",
  capacity: 150,
  currentStudents: 75,
  getSlogan: function () {
    return "Always be learning!";
  },
};

console.log(school.getSlogan);
console.log(school.getSlogan());
```

## Arrays

An `array` is an `object` that holds values in nummerically indexed positions. Each value is referred to as an element.

Each value in an array is automatically given a number called an `index`. This index can be used to access a particular value in any given array.

Indices begin at 0 and order incrementally.

```javascript
var arr = ["hello world", 42, true];

arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true
arr.length; // 3

typeof arr; // "object"
```

An array is capable of holding any type of data (even objects and other arrays!), but generally each array should hold just one type of data.

```javascript
// Good practice - each array only holds one type of data
var rainbowColors = ["Red", "Orange", "Yellow"];
var lotteryNumbers = [33, 72, 64, 18, 17, 85];

var denver = "Denver, CO";
var raleigh = "Raleigh, NC";
var atlanta = "Atlanta, GA";

var locations = [denver, raleigh, atlanta];

// Bad practice - this array holds a mix of data types
var randomData = ["hello", true, 100, denver, [1, 2, 3]];
```

### Looping over arrays

`for` loops are commonly used to iterate over the items in an array. To do this, we use the property length and call it on the variable associated with the array we want to iterate over. This property returns the length of, or number of elements in, an array.

```javascript
var fruits = ["apples", "oranges", "bananas"];

function listFruits() {
  for (var i = 0; i < fruits.length; i++) {
    console.log("I have some " + fruits[i]);
  }
}
```

<!-- **`while` loop**:

```javascript
while (numOfCustomers > 0) {
  console.log("How may I help you?");

  // help the customer...

  numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
  console.log("How may I help you?");

  // help the customer...

  numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);
``` -->

## Truthy & Falsy

Truthy & Falsy are nature of values: when a non-boolean value is converted to `boolean`, does it become `true` or `false`.

List of falsy:

- "" (empty string)
- 0, NaN (invalid number)
- null, undefined
- false

List of truthy:

- "hello"
- 42
- true
- [ ], [ 1, 2, 3 ] (arrays)
- { }, { a: 42 } (objects)
- function foo() { .. } (functions)

## Functions

To create a function, you must give it a name and then write the statements required for the function to achieve its task inside the function’s curly braces

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

Function **parameters** are listed inside the parentheses `()` in the function definition.

Function **arguments** are the **values** received by the function when it is invoked.

```javascript
// parameters named on declaration of function
function bakeCake(flavor, frosting, decoration) {
  return `I am baking a ${flavor} cake with ${frosting}. It will be decorated with ${decoration}.`;
}

// arguments passed into a called function
bakeCake("carrot", "cream cheese icing", "walnuts");
```

Inside the function, the arguments (the parameters) behave as local variables.

Because functions perform an action, it’s best to name it with an action verb! For example: `generateRandomNum`, `printGreeting`, `saveGroceryItem`, etc. Notice that the names are camelCased!

### Scope

In JS, each function gets its own scope. Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function’s local variables.

Wherever a `var` appears inside a scope, that declaration is taken to belong to the entire scope and accessible everywhere throughout. This behavior is called **hoisting**.

```javascript
var a = 2;

foo(); // works because `foo()`
// declaration is "hoisted"

function foo() {
  a = 3;

  console.log(a); // 3

  var a; // declaration is "hoisted"
  // to the top of `foo()`
}

console.log(a); // 2
```

A variable name has to be unique within the same scope—there can’t be two different a variables sitting right next to each other. But the same variable name a could appear in different scopes:

```javascript
function one() {
  // this `a` only belongs to the `one()` function
  var a = 1;
  console.log(a);
}

function two() {
  // this `a` only belongs to the `two()` function
  var a = 2;
  console.log(a);
}

one(); // 1
two(); // 2
```

Also, a scope can be nested inside another scope. If one scope is nested inside another, code inside the inner scope can access variables from either scope.

```javascript
function outer() {
  var a = 1;

  function inner() {
    var b = 2;

    // we can access both `a` and `b` here
    console.log(a + b); // 3
  }

  inner();

  // we can only access `a` here
  console.log(a); // 1
}

outer();
```

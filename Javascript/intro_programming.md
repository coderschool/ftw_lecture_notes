# Intro to Programming

There are a few basic concepts you need to remember. They act like building blocks. To build a tall tower, you start first by putting block on top of block. Here are some of the essential programming building blocks:

- **Operators** to perform actions on.

- **Variables** to store data (aka state) during your program’s execution.

- **Conditionals** like if statements to make decisions.

- **Loops** to repeat tasks until a condition stops being true.

- **Functions** to organize your code into logical and reusable chunks.

## Operators

**Variable Assignment**

```
a = b * 2;
```

- `a` and `b` are called **variables**. Variables hold values to be used by the program.
- `=` and `*` are assignment and mathematic **operators**.
- The statement `a = b * 2;` tells the computer to get the value stored in variable `b`, multiply that value by 2, then store the result back to the variable `a`.

**Math**: `+`, `-`, `*`, `/`

**Compound assignment**: `+=`, `-=`, `*=`, `/=`. For example `a += 2` is the same as `a = a + 2`

**Equality**: `==` (loose-equals), `===` (strict-equals), `!=` (loose not-equals), `!==` (strict not-equals)

**Comparison**: `<` (less than), `>` (greater than), `<=` (less than or loose-equals), `>=` (greater than or loose-equals)

**Logical**: `&&` (and), `||` (or)

## Variables

JS uses **dynamic typing**, meaning variables can hold values of any type without any type enforcement.

```javascript
var amount = 9;
amount = amount * 2;
console.log(amount); // 18

// Convert `amount` to a string
amount = "$" + amount;
console.log(amount); // "$18"
```

## Conditionals

The `if` statement requires an expression in between the parentheses `()`.

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

## Loops

Repeating a set of actions until a certain conditions fails is the job of programming loops.

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
```

Sometimes you are looping for the intended purpose of counting a certain set of numbers, like from 0 to 9 (10 numbers). You can do that by setting a loop iteration variable like `i` at value 0 and incrementing it by 1 each iteration.

```javascript
for (var i = 0; i <= 9; i = i + 1) {
  console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9
```

## Functions

A function is generally a named section of code that can be “called” by name, and the code inside it will be run each time.

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

Function **parameters** are listed inside the parentheses `()` in the function definition.

Function **arguments** are the **values** received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

```javascript
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations. For example, instead of using a variable to store the return value of a function:

```javascript
var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";
```

You can use the function directly, as a variable value:

```javascript
var text = "The temperature is " + toCelsius(77) + " Celsius";
```

## Scope

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

# Lab - Fundamentals of Programming

## Requirements

- Create a JavaScript file for each assignment
- Put the question as a comment on top of your solution
- Organize your code so that it's easy to read and review
- You can work on [repl.it](https://repl.it/), [jsbin](https://jsbin.com/?js,console), or [codepen.io](https://codepen.io/pen/) as well. But save your code locally for reviewing purposes.

## Assignments

### Assignment 1 - Area of a circle

- Log the string "Area of a circle" to the console.
- Declare a variable called `pi` and assign the value `3.14` to it in one statement.
- Log the **type** of `pi` to the console.
- Declare a variable called `radius` and assign the value `5` to it in one statement.
- Log the **type** of `radius` to the console.
- Declare a variable called `area` which is calculated by `pi` and `radius` to get the area of a circle (the area of a circle is pi times the radius squared). Hint: In JavaScript the **exponentiation operator** is `**`.
- Log the result to the console in this format using **string concatenation**:

```
The area of a circle given the radius ... (m) is ... (m2)
```

- Change the value of the `radius` to `7` log the result again using **template literal**.

### Assignment 2 - Operators & Comparison

Print the results of the expressions below in this format:

```
EXPRESSION = RESULT
```

Example:

```
"Coder" + "School" = "CoderSchool"
```

Before you execute the code, predict in your head what will be returned.

**Operators**

- `10 + 24`
- `"10" + "24"`
- `"Hello" + " " + 2021`
- `1 + 2 * 3`
- `(1 + 3) ** 2`
- `1 / 0`
- `6 % 2`
- `5.5 % 2`
- `Number("123")`
- `typeof(1 + "")`

**Logical & Comparison**

- `5 == "5"`
- `5 === "5"`
- `8 != 8.0`
- `8 !== 8.0`
- `"true" === true`
- `4 <= 4.0`
- `7 >= 7`
- `true && true`
- `true && false`
- `true || true`
- `false || true`
- `!true`
- `!false`
- `false && (true || true)`
- `false && true || true`

### Assignment 3 - Conditionals

- Declare a variable named `x` and assign it with a number of your choice.
- Write code to log to the console whether `x` is equal to 0 or a positive/negative number in an "user-friendly" way. Example `5 is a positive number`, `0 is zero`.
- Declare 3 variables named `a`, `b`, `c`, and assign them with values in the range 0 to 99 of your choice. Write code to print out the smallest and biggest number between them. Example

```javascript
4 is the smallest number, and 99 is the biggest number between 4, 6, 99
```

### Assignment 4 - Loops

- Declare two integers `a` and `b` (0 < `a` < `b` < 10). Write a `for` loop to print all numbers from `a` to `b` inclusively, in increasing order, if `a < b`, or in decreasing order, if `a > b`.

```javascript
// Example input: a = 1, b = 5
// Example output: 1 2 3 4 5

// Example input: a = 7, b = 4
// Example output: 7 6 5 4
```

- Declare two integers `x` and `y` (0 < `x` < `y` < 999). Write a loop to calculate the sum of numbers from `x` to `y` inclusively. Print out the result in an user-friendly way.

```javascript
// Example: Sum of numbers from 1 to 800 is: ...
```

- Declare a number that has 4 digits of your choice. Write code to print out the sum of its digit.

```javascript
// Example input: 1024
// Example output: Sum of digits of 1024 is 7
```

### Assignment 5 - Functions

- Write a function that does not take any argument, and it logs "Wow, it worked!" to the console
- Write a function that does not take any argument, and it returns your favorite movie as a string. "console.log" the result
- Write a function that takes one argument, your name, and return your name in the middle of a sentence. "console.log" the result
- Put the code of the previous Assignment 4 in functions that take the input numbers as arguments and return the expected output

```javascript
// Example
function seriesOfNumber(a, b) {
  // Your code here
}

seriesOfNumber(8, 5); // In the console: 8 7 6 5
```

### Assignment 6 - Swapping values of two variables

- Declare variable `a` with value 111 and variable `b` with value 999
- Declare a _temporary variable_ called `temp`
- Write the code to swap the value of `a` and `b`
- Log the values of `a` and `b` before and after swapping in an "user-friendly" way

**Rocket (optional)**: Swap values without using the temporary variable.

### Assignment 7 - SuperFizzBuzz

In this assignment, you'll implement an algorithm that is actually used in some programmer interviews.

Iterate through the numbers 1 through 50, and for each one, print out exactly one thing. These rules are in descending priority:

- If it's evenly divisible by 3, 5, and 7 print `SuperFizzBuzz`
- If it's evenly divisible by 3 and 7 print `SuperFizz`
- If it's evenly divisible by 5 and 7 print `SuperBuzz`
- If it's evenly divisible by 3 and 5 print `FizzBuzz`
- If it's evenly divisible by 3, print `Fizz`
- If it's evenly divisible by 5, print `Buzz`
- If it's evenly divisible by 7, print `Super`
- Otherwise print just the number

Hint: to check whether a number is evenly divisible by 3, we can do `x % 3 === 0`

Example output:

```javascript
// 1, 2, Fizz, 4, Buzz, Fizz, Super, 8, Fizz, Buzz, 11, Fizz, 13, Super, FizzBuzz, 16, 17, Fizz, 19, Buzz, SuperFizz, 22, 23, ...
```

Write a function named `convertNumber(number)` that returns the output of a single number.

Write a function named `outputRange(start, end)` that prints out the results of numbers from `start` to `end` inclusively. Use the `convertNumber(number)` function to determine the string for a given number.

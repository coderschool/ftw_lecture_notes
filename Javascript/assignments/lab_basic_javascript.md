# Lab - Basic JavaScript

## Requirements

- Run the example code in the **docs** first before you start coding.
- Organize your code so that it's easy to read and review
- You can work on [repl.it](https://repl.it/), [jsbin](https://jsbin.com/?js,console), or [codepen.io](https://codepen.io/pen/) as well. But save your code locally for reviewing purposes.

## Assignments

### Assignment 1 - Generate random integer number

**Docs**

In JavaScript, to get a random floating-point number ranging from 0 to less than 1 (inclusive of 0 and exclusive of 1), use the `Math.random()` function.

```javascript
console.log(Math.random()); // example: 0.5408145050563944
```

In JavaScript, we use `Math.floor()` to round down to a whole number, `Math.ceil()` to round up, and `Math.round()` to round to the _nearest_ whole number.

```javascript
console.log(Math.floor(4.5)); // expected output: 4
console.log(Math.ceil(4.5)); // expected output: 5
console.log(Math.round(4.5)); // expected output: 5
console.log(Math.round(4.49)); // expected output: 4
```

**Assignment**

- Write a loop that logs 5 random numbers between 0 and 1 to the console.
- Write a function named `getRandomInt()` that return a random integer number from 0 (**inclusive**) to 10 (**exclusive**). Put it in a loop that runs 100 times to check whether you see all of the numbers from 0 to 9?
- Improve the function so that it return a random integer number between `start` (**inclusive**) to `end` (**inclusive**)

```javascript
// From 5 (inclusive) to 8 (inclusive)
console.log(getRandomInt(5, 8)); // example output: 5 or 6 or 7 or 8
```

- Use the function `getRandomInt()` to make another function called `getRandomItem()` that takes an array as an argument and returns a random element in the array. Example

```javascript
var arr = ["apple", "orange", "kiwi"];

console.log(getRandomItem(arr)); // example: orange
```

Hint: `arr.length` returns the number of elements in an array.

### Assignment 2 - Nested For Loop

**Docs**

A composition of loops is called a nested loop. The most common type of nested loops will be one loop inside another. The first loop is usually called the outer loop, while the second loop is called the inner loop. The outer loop always executes first. The inner loop executes inside the outer loop each time the outer loop executes once. Take a look at the example below and visualize how the nested loop works.

```javascript
for (var i = 0; i < 10; i++) {
  var s = "";
  for (var j = 0; j < 10; j++) {
    s = s + i + j + " ";
  }
  console.log(s);
}
```

Output:

```javascript
00 01 02 03 04 05 06 07 08 09
10 11 12 13 14 15 16 17 18 19
20 21 22 23 24 25 26 27 28 29
30 31 32 33 34 35 36 37 38 39
40 41 42 43 44 45 46 47 48 49
50 51 52 53 54 55 56 57 58 59
60 61 62 63 64 65 66 67 68 69
70 71 72 73 74 75 76 77 78 79
80 81 82 83 84 85 86 87 88 89
90 91 92 93 94 95 96 97 98 99
```

**Assignment**

- Write a function that takes a number `n` as an argument and print out the following:

```
1
2 2
3 3 3
4 4 4 4
...
n n n n ... n
```

For example, given `n = 3`, your function should print out:

```
1
2 2
3 3 3
```

- Write a function that prints out an 8×8 grid. At each position of the grid, there is either whitespace or a `#` character. The characters should form a chessboard.

```javascript
// Expected output:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

### Assignment 3 - Iterate over arrays

**Docs**

`for` loops are commonly used to iterate over the items in an array. To do this, we use the property length and call it on the variable associated with the array we want to iterate over. This property returns the length of, or the number of elements in, an array.

```javascript
var fruits = ["apples", "oranges", "bananas"];

function listFruits() {
  for (var i = 0; i < fruits.length; i++) {
    console.log("I have some " + fruits[i]);
  }
}
```

**Assignment**

Peter gets paid `$25` per hour on his remote job. The array below holds 10 numbers, the working hours he worked each day last two weeks (Sat and Sun off).

```javascript
var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
```

- Iterate over the array, and print out `Peter earned $... today!` each day.
- Calculate how much Peter made in the last two weeks.
- Peter realizes that every day his working hour is a random integer number between 6 to 8 inclusively. And he wants to estimate how much he can make in one year (approximately 50 weeks, 5 working days per week). Let use the function you made in Assignment 1 to create an array that contains 250 numbers represent Peter's working hours in one year. Use the array to calculate Peter's estimated yearly income.
- Put your code in a function that takes in the number of weeks and return estimated revenue.

### Assignment 4 - Array Methods

**Docs**

Array methods are built specifically for arrays. They help us change the arrays themselves or get certain information out of them.

Reference: [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

_Determines whether the array contains a value_

_Add an item to the end of an array:_

```javascript
var fruits = ["Apple", "Banana"];
var newLength = fruits.push("Orange");
// newLength will be 3, and fruites becomes ["Apple", "Banana", "Orange"]
```

_Remove an item from the end of an array:_

```javascript
var pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// expected output: true
console.log(pets.includes("at"));
// expected output: false
```

```javascript
var last = fruits.pop(); // remove Orange (from the end)
// last will be "Orange" and fruits becomes ["Apple", "Banana"]
```

_Remove an item from the beginning of an array:_

```javascript
var first = fruits.shift(); // remove Apple from the front
// last will be "Apple" and fruits becomes ["Banana"]
```

_Add an item to the beginning of an array:_

```javascript
newLength = fruits.unshift("Strawberry"); // add to the front
// newLength will be 2, and fruites becomes ["Strawberry", "Banana"]
```

_Copy an array:_

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

```javascript
fruits.push("Mango");
fruits.push("Apple");
fruits.push("Orange");
// fruits = ["Strawberry", "Banana", "Mango", "Apple", "Orange"]
console.log(fruits.slice(2));
// expected output: Array ["Mango", "Apple", "Orange"]
console.log(fruits.slice(2, 4));
// expected output: Array ["Mango", "Apple"]
console.log(fruits.slice(1, 5));
// expected output: Array ["Banana", "Mango", "Apple", "Orange"]
```

_Remove items from an index position_

```javascript
// fruits = ["Strawberry", "Banana", "Mango", "Apple", "Orange"]
var removedItems = fruits.splice(1, 3); // starting at the index position 1 and remove 3 items
// removedItems will be ["Banana", "Mango", "Apple"], fruits becomes  ["Strawberry", "Orange"]
```

**Assignment**

- Write a function called `getLeapYears(start, end)` that returns a list of leap years from the year `start` to the year `end` inclusively. (A year is a leap year if its number is exactly divisible by 4 and is not exactly divisible by 100. A year is always a leap year if its number is exactly divisible by 400).

```javascript
// Example
getLeapYears(1899, 2001);
// 1904 1908 1912 1916 1920 1924 1928 1932 1936 1940 1944 1948 1952 1956 1960 1964 1968 1972 1976 1980 1984 1988 1992 1996 2000
```

- Write a function called `reverseArray(arr)` that returns a copy of the input array in reversed order.

```javascript
console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"];
var arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
// [5, 4, 3, 2, 1]
console.log(arr);
// [1, 2, 3, 4, 5]
```

- Use `getRandomInt()` from Assignment 1 to generate an array called `evenNumbers` containing 100 random integer numbers in the range 0 to 100 inclusively. Remove all odd numbers in `evenNumbers` and store them in an array called `oddNumbers`. Log both arrays to the console.

### Assignment 5 - Object

Given the object below:

```javascript
var userA = {
  id: 123456,
  name: "Peter Parker",
  email: "peter.parker@gmail.com",
  role: "student",
  courseId: 112233,
};
```

Log your answer to the console:

- How many key/value pairs does the object have?
- What is the type of the value of the key `id` and `courseId`?
- How can we change the value of the key `email` to `pparker@gmail.com`?
- Write a function that takes in a user object like this and returns a greeting with the user's info: `"Hi, my name is ..., my email is ..."`. Example:

```javascript
greeting(userA); // Hi, my name is Peter Parker, my email is pparker@gmail.com
```

**Nested Objects**

- Add a list of tasks to the object so that it looks like below

```javascript
{
  id: 123456,
  name: "Peter Parker",
  email: "peter.parker@gmail.com",
  role: "student",
  courseId: 112233,
  tasks = [
    { name: "Task 1", status: "Done"},
    { name: "Task 2", status: "Not Started"},
    { name: "Task 3", status: "In Progress"},
    { name: "Task 4", status: "Not Started"},
    { name: "Task 5", status: "Done"},
    { name: "Task 6", status: "In Progress"},
    { name: "Task 7", status: "Not Started"},
    { name: "Task 8", status: "Done"},
    { name: "Task 9", status: "Done"},
    { name: "Task 10", status: "In Progress"}
  ]
};
```

- Write a function called `listOfTask()` that takes in a user object like this and print out 3 lists of tasks that are "Not Started", "In Progress", and "Done", respectively. Example:

```javascript
listOfTask(userA);

// Expected output in the console:
// Not Started:
// - Task 2
// - Task 4
// - Task 7
// In Progress:
// - Task 3
// - Task 6
// - Task 10
// Done:
// - Task 1
// - Task 5
// - Task 8
// - Task 9
```

**Test your code**

- Create a function called `generateFakeTasks()` that returns an array of `n` number of tasks (`n` is the argument). The fake tasks use this object below as a template. The name of a task starts with "Task " followed by an index. The index starts from 1. The value of `status` is a random choice between "In progress", "Not Started", "Done" (Hint: use the function `getRandomItem()` in Assignment 1).

```javascript
var task1 = {
  name: "Task 1", // The name is "Task " followed by an integer number
  status: "pending", // One options between ["In progress", "Not Started", "done"]
};
```

The array `userA.tasks` in the exercise above should be a good example.

```javascript
var tasks = generateFakeTasks(3);
console.log(tasks);

// Example output:
// [
//   { name: "Task 1", status: "Done" },
//   { name: "Task 2", status: "Not Started" },
//   { name: "Task 3", status: "In Progress" },
// ]
```

Assign the generated tasks to the `userA` object and test your `listOfTask()` function.

### Assignment 6 - Working with String

**Docs**

As we go through our programming careers, we'll be working a lot with text. To facilitate this, we'll want to get familiar with some common string methods and properties.

Reference: [MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

- `length`: the **property** of a String object contains the length of the string

```javascript
var s = "Life, the universe and everything. Answer:";

console.log(`${s} ${s.length}`);
// expected output: "Life, the universe and everything. Answer: 42"
```

- **Character Access**: treat the string as an array-like object, where each individual characters correspond to a numerical index.

```javascript
return "cat"[1]; // returns "a"
```

- The `includes()` method determines whether one string may be found within another string, returning true or false as appropriate.

```javascript
var sentence = "The quick brown fox jumps over the lazy dog.";
var word = "fox";
console.log(sentence.includes(word)); // expected output: true
```

- The `startsWith()`, `endsWith()` method determines whether a string starts/ends with the characters of a specified string, returning true or false as appropriate.

```javascript
var str1 = "Saturday night plans";
console.log(str1.startsWith("Sat")); // expected output: true
var str2 = "Is this a question";
console.log(str2.endsWith("?")); // expected output: false
```

- `slice(start [, end])`: Extracts a section of a string and returns a new string.

```javascript
var str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31));
// expected output: "the lazy dog."
console.log(str.slice(4, 19));
// expected output: "quick brown fox"
console.log(str.slice(-4));
// expected output: "dog."
console.log(str.slice(-9, -5));
// expected output: "lazy"
```

- `split([sep [, limit] ])`: Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

```javascript
var str = "The quick brown fox jumps over the lazy dog.";

var words = str.split(" ");
console.log(words);
//expected output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
console.log(words[3]);
// expected output: "fox"
```

- `toLowerCase()`/`toUpperCase()` Returns the calling string value converted to lowercase/uppercase.

```javascript
var str = "The Quick Brown Fox Jumps Over The Lazy Dog.";

console.log(str.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."
console.log(str.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

- The `trim()` method removes whitespace from both ends of a string.

```javascript
const greeting = "   Hello world!   ";
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trim());
// expected output: "Hello world!";
```

**Assignment**

- Write a function that takes an Array of Booleans and Strings. This function should return a String - the first string that appears in the array that was passed in.

```
var variousThings = [
  true, true, true, false,
  true, true, 1, true,
  true, false, true, false,
  true, "hello", false, true,
  true, true, true, true,
  false, false, "world", true
];
findFirstString(variousThings);
// => 'hello'
```

- Write a function called `normalizeEmails(emails)` that takes an array of emails (string). This function should return an array. All emails in the returned array should be all lowercase, and all whitespaces at both ends of each email should be removed.

```javascript
var emails = ["  PETER@gmail.com", "Mia1024@gmail.COM  ", " Dorian@gmail.com "];
console.log(normalizeEmails(emails));
// ["peter@gmail.com", "mia1024@gmail.com", "dorian@gmail.com"]
```

- Write a function called `splitNames(fullName)` that takes an full name and return an object that contains `firstName` and `lastName` as the key.

```javascript
console.log(splitNames("Peter Parker"));
// {firstName: "Peter", lastName: "Parker"}
```

- Generate random password: write a function `getRandomString(length)` that takes a number as the length and generates an arbitrary string by picking characters randomly from A-Z, a-z, and 0-9.

```javascript
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomString(length) {
  // Your code here
}

console.log(generateString(5));
// example output: B5cgH
```

## Rockets (Optional)

### Assignment 7 - Sum of two

Write a function that takes one argument, an array of numbers with at least 4 elements. It should return the sum of the two lowest positive numbers in that array. For example, when an array is passed in like `[19, 5, 42, 2, 77]`, the output should be 7 because `5 + 2 = 7`.

### Assignment 8 - nth Fibonacci

In mathematics, the Fibonacci numbers, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

```javascript
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

Write a function that takes in a number `n` and returns the n_th Fibonacci number. Example

- `fibo(0)` returns 0
- `fibo(3)` returns 2
- `fibo(10)` returns 55

### Assignment 9 - Merging arrays

Write a function called `mergeArrays(arr1, arr2)` that takes in two arrays of numbers. Both of them are sorted from least to greatest. This function should merge the two arrays and return a single array of numbers. The returned array should be sorted in ascending order. If the input arrays store a specific number both, remove duplicated in the returned result.

```javascript
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
console.log(mergeArrays(arr1, arr2));
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr1 = [1, 3, 5, 7, 9, 11, 12];
arr2 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(arr1, arr2);
// => [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
```

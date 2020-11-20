# Array Prototype methods

Prototype methods are functions that allow you to manipulate the value of a particular data type or class. JavaScript comes with several built-in data types that each have their own prototype methods, that allow you to interact with them in certain ways. For example, you might want to add or remove an item from an array. Or inspect the properties on an object. Prototype methods allow you to perform these actions and manipulate your values.

For example, prototype methods of

- **String**: [trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim), [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), [repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

- **Object**: [keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

- **Array**: [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

**Array Iteration Prototype Methods** loop through an existing array and apply a callback function to each element that might mutate each element and return a new value.

WAIT. Can’t we already iterate through arrays with a `for` loop?! Yes, we can often accomplish the same thing using a `for` loop, but the array iteration methods do provide some good benefits!

There are occassional times when it makes more sense to use a for loop over something like a forEach. You can read more about why to use one over the other [here](https://alligator.io/js/foreach-vs-for-loops/).

## Callback Functions

A callback function is **a function passed into another function as an argument**, which is then invoked inside the outer function to complete some kind of routine or action.

An example of callback functions is the Event Listener function that you pass in the `addEventListener()` function.

Another example is in `setTimeout()` and `setInterval()`:

- `setTimeOut(callback, delay, arg1, arg2, ...)` allows us to run a function once after the interval of time.
- `setInterval(callback, delay, arg1, arg2, ...)` allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

```javascript
function sayHi(name) {
  console.log(`Hi ${name}`);
}

// This calls sayHi() after one second
setTimeOut(sayHi, 1000, "CoderSchool");
```

```javascript
let n = 1;
function counter() {
  console.log(n);
  n = n + 1;
}

// repeat with the interval of one second
let timerId = setInterval(counter, 1000);
// stop after 5 seconds
setTimeout(() => {
  clearInterval(timerId);
}, 5000);
```

> Note: A common mistake is adding `()` after the function:
> `setTimeout(sayHi(), 1000); // wrong`
> That doesn’t work, because `setTimeout` expects a reference to a function. And here `sayHi()` runs the function, and the result of its execution is passed to `setTimeout`. In our case the result of `sayHi()` is `undefined` (the function returns nothing), so nothing is scheduled.

> Note: the callback function stays in memory until the scheduler calls it or until `clearInterval` is called. So when we don’t need the scheduled function anymore, it’s better to cancel it.

## Array Prototype Methods

There are many array prototype methods out there, but we are going to focus on some of these methods:

### `forEach()`

The [arr.forEach(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method allows to run a function for every element of the array.

```javascript
// Syntax
arr.forEach(function (item, index, array) {
  // ... do something with item
});
// index and array are optional
```

Example:

```javascript
["Mango", "Banana", "Orange"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
```

The result of the function (if it returns any) is thrown away and ignored.

### `find()`

Imagine we have an array of objects. How do we find an object with the specific condition?

Here the [arr.find(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method comes in handy.

```javascript
// Syntax
let result = arr.find(function (item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
// index and array are optional
```

Example:

```javascript
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

console.log(user.name); // John
```

In real life arrays of objects is a common thing, so the `find()` method is very useful.

The [arr.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method is essentially the same, but it returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.

### `filter()`

The `find()` method looks for a single (first) element that makes the function return true.

If there may be many, we can use [arr.filter(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

The syntax is similar to `find()`, but `filter()` returns an array of all matching elements:

```javascript
// Syntax
let results = arr.filter(function (item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
// index and array are optional
```

Example:

```javascript
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers.length); // 2
```

### `map()`

The [arr.map(cb)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

```javascript
// Syntax
let result = arr.map(function (item, index, array) {
  // returns the new value instead of item
});
// index and array are optional
```

Example:

```javascript
let arr = ["Mango", "Banana", "Orange"];
let lengths = arr.map((item) => item.length);
console.log(lengths); // [5, 6, 6]
```

### `sort()`

The call to [arr.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

Example:

```javascript
let arr = [1, 2, 15];

// the method reorders the content of arr
arr.sort();

console.log()(arr); // 1, 15, 2
```

The order became `1, 15, 2`, because the items are **sorted as strings** by default. For string `"2" > "15"` indeed. To sort numerical values, we can do:

```javascript
arr.sort((a, b) => a - b);
```

It's quite common to sort a list of objects base on one of the attributes. Example:

```javascript
let users = [
  { id: 1, name: "John", age: 32 },
  { id: 2, name: "Pete", age: 14 },
  { id: 3, name: "Mary", age: 60 },
];

const compareAge = (userA, userB) => {
  if (userA.age > userB.age) return 1;
  if (userA.age === userB.age) return 0;
  if (userA.age < userB.age) return -1;
};

users.sort(compareAge);
console.log(users);
// [
//   { id: 2, name: 'Pete', age: 14 },
//   { id: 1, name: 'John', age: 32 },
//   { id: 3, name: 'Mary', age: 60 }
// ]
```

### `reduce()`

The method [arr.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) is used to calculate a single value based on the array.

```javascript
// Syntax
let value = arr.reduce(function (accumulator, item, index, array) {
  // ...
}, initial);
```

The function is applied to all array elements one after another and “carries on” its result to the next call.

Arguments:

- `accumulator` – is the result of the previous function call, equals initial the first time (if `initial` is provided).
- `item` – is the current array item.
- `index` – is its position.
- `array` – is the array.

Example

```javascript
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15
```

```javascript
let cart = [
  { id: 1, name: "Banana", price: 0.5, quantity: 5 },
  { id: 2, name: "Mango", price: 1.5, quantity: 3 },
  { id: 3, name: "Orange", price: 0.9, quantity: 7 },
];

let totalPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
console.log(totalPrice); // $13.3
```

The method [arr.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) does the same, but goes from right to left.

## Additional reading

- [JavaScript Callback Functions - What are Callbacks in JS and How to Use Them](https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/)
- [forEach vs For Loops](https://alligator.io/js/foreach-vs-for-loops/)
- [Finally Understand the JavaScript Reduce Method](https://alligator.io/js/finally-understand-reduce/)
- [Why and when to use forEach, map, filter, reduce, and find in JavaScript](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)

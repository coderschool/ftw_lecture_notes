# Lab - Array methods

A cheat sheet of array methods:

**To add/remove elements:**

- `push(...items)` -- adds items to the end,
- `pop()` -- extracts an item from the end,
- `shift()` -- extracts an item from the beginning,
- `unshift(...items)` -- adds items to the beginning.
- `splice(pos, deleteCount, ...items)` -- at index `pos` deletes `deleteCount` elements and inserts `items`.
- `slice(start, end)` -- creates a new array, copies elements from index `start` till `end` (not inclusive) into it.
- `concat(...items)` -- returns a new array: copies all members of the current one and adds `items` to it. If any of `items` is an array, then its elements are taken.

**To search among elements:**

- `indexOf/lastIndexOf(item, pos)` -- look for `item` starting from position `pos`, return the index or `-1` if not found.
- `includes(value)` -- returns `true` if the array has `value`, otherwise `false`.
- `find/filter(func)` -- filter elements through the function, return first/all values that make it return `true`.
- `findIndex` is like `find`, but returns the index instead of a value.

**To iterate over elements:**

- `forEach(func)` -- calls `func` for every element, does not return anything.

**To transform the array:**

- `map(func)` -- creates a new array from results of calling `func` for every element.
- `sort(func)` -- sorts the array in-place, then returns it.
- `reverse()` -- reverses the array in-place, then returns it.
- `split/join` -- convert a string to array and back.
- `reduce/reduceRight(func, initial)` -- calculate a single value over the array by calling `func` for each element and passing an intermediate result between the calls.

Additionally:

- `Array.isArray(arr)` checks `arr` for being an array.

> Note that methods `sort`, `reverse` and `splice` modify the array itself.

## Assignments

### Assignment 1

Given an array:

```javascript
const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];
```

Use `filter()` to:

- Print out an array of the inventors whose name starts with 'A'.
- Print out an array of the inventors whose first name and last name start with the same letter. For example, "Galileo Galilei" or "Hanna Hammarstrom"

Use `sort()` to:

- Sort all the inventors in alphabetical order, A-Z.
- Sort all the inventors by length of name, shortest name first.

Use `map()` to:

- Print out an array of the length of every inventor's full name.
- Print out an array of all the inventors' names in uppercase.

Use `reduce()` to:

- Create a string that has the first name of every inventor. ("Albert Issac Galileo ...")
- Calculate sum of the length of all inventer's names.

### Assignment 2

Given

```javascript
let startAmount = 1000;
let transactions = [
  { currency: "USD", amount: 12, type: "withdrawal" },
  { currency: "USD", amount: 104, type: "withdrawal" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 250, type: "withdrawal" },
  { currency: "USD", amount: 500, type: "deposit" },
  { currency: "USD", amount: 447, type: "withdrawal" },
  { currency: "USD", amount: 120, type: "deposit" },
  { currency: "USD", amount: 58, type: "withdrawal" },
  { currency: "USD", amount: 90, type: "withdrawal" },
];
const usdToVND = 23000;
```

- `startAmount` was the amount of money on the first day
- `transactions` are list of transaction everyday. A transaction could be a withdrawal (take money out of the account) or a deposit (put money into an account). Amount is the amount of money in each transaction.
- `usdToVND` is the currency exchange rate between USD and VND.

Write a function that:

- Uses `forEach()` to print out the transaction history in this format:

```bash
Balance: $1000
Transaction History:
- You withdrew $12. The new balance is $988
- You deposited $112. The new balance is $1100
```

- Uses `reduce()` to calculate the balance in the end.
- Uses `filter()` and `reduce()` to calculate two numbers: the sum of withdrawal transactions (expense), and deposit transactions (income).
- Uses `map()` to get a new array of transaction in VND
- Returns an new list of transactions that sorted by `type`
- Returns an new list of withdrawal transactions that sorted by `amount`
- Returns an new list of deposit transactions that sorted by `amount`

### Assignment 3

Given

```javascript
let shoppingCart = [
  { id: "A31", item: "T-shirt", price: 9.9, quantity: 5 },
  { id: "A32", item: "Jacket", price: 99.9, quantity: 1 },
  { id: "A33", item: "Skirt", price: 19.9, quantity: 2 },
  { id: "A34", item: "Ankle Pant", price: 39.9, quantity: 3 },
  { id: "A35", item: "Polo shirt", price: 14.9, quantity: 3 },
  { id: "A36", item: "Chino Short", price: 29.9, quantity: 2 },
  { id: "A37", item: "Easy Short", price: 19.9, quantity: 2 },
];
```

- Write a function that returns an array of prices for each product in the cart (item price \* quantity).
- Write a function that returns the total price.
- Write a function called `removeItemsFromCart(productId, quantity)` that will remove the `quantity` number of item with the `productId` in the cart and return the result in a new array. If the quantity after removing is 0, remove the product out of the cart.
- Write a function called `addItemToCart(product, quantity)` that will add new products into the cart if there is no product like this, or increase the quantity if the cart already contains that kind of product. The result will be returned in a new array.

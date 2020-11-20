# Asynchronous JavaScript

## Promise

In programming, we often have a "producing code" that does something and takes time. For instance, code that loads the data over a network. We also have "consuming code" that wants the result of the "producing code" once it's ready. A **promise** is a special JavaScript object that links the "producing code" and the "consuming code" together.

```javascript
let promise = new Promise(function (resolve, reject) {
  // executor
  setTimeout(() => resolve("done"), 1000);
});
console.log(promise);
// Promise { <pending> }
```

The function passed to `new Promise` is called the **executor**. When `new Promise` is created, the executor runs automatically. Its arguments `resolve` and `reject` are callbacks provided by JavaScript itself. Our code is only inside the executor. When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- `resolve(value)`: if the job finished successfully, with result value.
- `reject(error)`: if an error occurred, error is the error object.

**Consumers: then, catch, finally**

A Promise object serves as a link between the executor and the consuming functions, which will receive the result or error.

The most important, fundamental one is `.then`

```javascript
promise.then(
  function (result) {
    /* handle a successful result */
  },
  function (error) {
    /* handle an error */
  }
);
```

Example

```javascript
let promise = new Promise(function (resolve, reject) {
  // executor
  setTimeout(() => resolve("done"), 1000);
});
// resolve runs the first function in .then
promise.then(
  (result) => console.log(result), // "done" after 1 second
  (error) => console.log(error) // doesn't run
);
```

```javascript
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// reject runs the second function in .then
promise.then(
  (result) => console.log(result), // doesn't run
  (error) => console.log(error) // shows "Error: Whoops!" after 1 second
);
```

If we’re interested only in successful completions, then we can provide only one function argument to `.then`:

```javascript
promise.then(console.log);
```

If we’re interested only in errors, then we can use `null` as the first argument: `.then(null, errorHandlingFunction)`. Or we can use `.catch(errorHandlingFunction)`, which is exactly the same:

```javascript
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promise.catch(console.log); // shows "Error: Whoops!" after 1 second
```

The call `.finally(cb)` means that the function `cb` (callback) always runs when the promise is settled (resolve or reject). `finally` is good handler for performing cleanup.

## Async/await

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

**Async**

The word `async` before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

```javascript
async function f() {
  return 1;
}

f().then(alert); // 1
```

**Await**

The keyword `await` makes JavaScript wait until that promise settles and returns its result.

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();
```

The function execution “pauses” at the line (\*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.

> Note: you can't use `await` in non-async function, there would be a syntax error

> Note: you can't use `await` in top-level code, you need to wrap it into an `async` function

### Error handling

In the case of a rejection, `await promise` throws an error. We can catch that error using `try..catch`:

```javascript
async function f() {
  try {
    let response = await fetch("/no-user-here");
    let user = await response.json();
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();
```

## Summary

The `async` keyword before a function has two effects:

- Makes it always return a promise.
- Allows `await` to be used in it.

The `await` keyword before a promise makes JavaScript wait until that promise settles, and then:

- If it’s an error, the exception is generated — same as if `throw error` were called at that very place.
- Otherwise, it returns the result.

Together they provide a great framework to write asynchronous code that is easy to both read and write.

With `async/await` we rarely need to write`promise.then/catch`, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also `Promise.all` is nice when we are waiting for many tasks simultaneously.

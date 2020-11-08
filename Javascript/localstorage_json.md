# localStorage and JSON

## Client-side vs. Server-side Storage

**Server-side storage**: On someone else's computer (often in a data warehouse, in a database). Suitable for storing sensitive information.

**Client-side storage**: On the user's computer, using a JavaScript API (Most commonly the web storage API). Suitable for storing less sensitive information (i.e., a shopping cart).

## Client-side Storage

Browsers provide two main types of primary Storage that is accessible without messing with a database:

- [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) - gets reset whenever your browser session restarts
- [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - has no specified expiration date.

Client-side Storage is a secure way your browser can store key-value pairs that are unique to each domain. If you store some information on a page hosted at `github.com`, it is not accessible from a page hosted at `twitter.com`. This is for security reasons and guarantees that the pages won't end up with conflicting names and overwriting items in Storage from another site.

## Local Storage

[`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) is a property you can call on the global `window` variable within your browser, just like you can call `document`, that allows you to access a local storage object for persisting data.

`localStorage` supports the following methods:

- `localStorage.setItem();` takes two arguments---a key and value (key must be a string)---and stores the given value under the provided key.
- `localStorage.getItem();` gets an item from storage based on the key provided.
- `localStorage.removeItem();` takes a key and removes that key and its associated value from Storage.
- `localStorage.clear();` removes all items from storage for that domain.

## What is JSON?

JSON stands for "JavaScript Object Notation" and is a method for representing complex data types as strings. It's useful for localStorage, and it's also used for sending information back and forth over the web. It's a subset of JavaScript's object syntax. JSON is a language-independent data format that is easy for humans to read and write and easy for machines to parse and generate.

JSON has the following rules:

- Keys must be double-quoted.
- No trailing comma (Trailing commas refers to a comma at the end of a series of values in an array or array-like object, leaving an essentially empty slot)
- Values must be one of the following types: Strings (double-quoted), Numbers, Booleans, Arrays, Objects

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
`"

The browser provides a `JSON` object with two methods.

- `JSON.stringify();` turns any JavaScript object into a valid JSON string.
- `JSON.parse();` turns any valid JSON into a JavaScript object.

To store JSON in localStorage:

- You should use `JSON.stringify()` before storing it in localStorage.
- You should use `JSON.parse()` after retrieving it from localStorage.
```

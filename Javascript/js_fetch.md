# Using Fetch to get Data

JavaScript can send network requests to the server and load new information whenever it’s needed.

There’s an umbrella term “AJAX” (abbreviated Asynchronous JavaScript And XML) for network requests from JavaScript. We don’t have to use XML though: the term comes from old times, that’s why that word is there. You may have heard that term already.

The `fetch()` method is a way to send a network request and get information from the server.

```javascript
let promise = fetch(url, [options]);
```

`options` is optional parameters: method, headers, etc.. Without `options`, that is a simple `GET` request, downloading the contents of the `url`.

`fetch()` return a `promise` which resolves with an object of the built-in [Response](https://fetch.spec.whatwg.org/#response-class) class as soon as the server responds with headers.

To the the response body, we need to use an additional method call

```javascript
let response = await fetch(url);
let commits = await response.json(); // read response body and parse as JSON
```

Or the same without `await`, using pure promises syntax:

```javascript
fetch(url')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));
```

**POST requests**

```javascript
let user = {
  name: "John",
  email: "john2020@gmail.com",
};

let response = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
});

let result = await response.json();
console.log(result.message);
```

Fetch options:

- `method` – HTTP-method
- `headers` – an object with request headers
- `body` – the data to send (request body)

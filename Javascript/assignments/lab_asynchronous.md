# Lab - Asynchronous Javascript

## Requirements

- Follow the instructions in the comments and put your code in.
- Organize your code so that it's easy to read and review.

## Promise

### Assignment 1 - Re-resolve a promise?

What’s the output of the code below?

```javascript
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
```

### Assignment 2 - Delay with a promise

```javascript
function delay(ms) {
  // YOUR CODE STARTS HERE
}

delay(3000).then(() => console.log("runs after 3 seconds"));
```

### Assignment 3 - Counter every second

Write a function that print out a number that is increased by 1 every 1 second. For example:

```javascript
1 // after 1st second
2 // after 2nd second
3 // after 3rd second
...
```

## Async/await and fetch

### Assignment 4

In this challenge you will build a website that show where you are based on GPS coordinates.

**Step 1** - Setup project

```
|-geocode/
    |- index.html
    |- style.css
    |- script.js
```

- Create 3 empty files like the structure above.

In `index.html`:

- Create the HTML boilerplate structure using the emmet abbreviation `html:5`
- Change `<title>` to "Where am I"
- Link to `style.css` using the emmet abbreviation `link:css`
- Link to the javascript file by adding a `<script>` tag at the end of the `<body>` element:

```html
<script type="text/javascript" src="script.js"></script>
```

**Step 2** - Where am I

Given a function that returns the geolocation

```javascript
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
```

Write a function 'whereAmI' which is a `async` function and it does:

- Invoke `getPosition()` to get the GPS coordinates: a latitude value (lat) and a longitude value (lng)
- Once you have the coordinates, do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: `https://geocode.xyz/api`. The URL of your AJAX call will have this format: `https://geocode.xyz/${lat},${lng}?geoit=json`
- Once you have the data, log a message to the console to see what you received. For example: "You are in HCMC, Vietnam"
- Error handling: This API limits to only 1 request per second. If you reload fast, you will get an error. Make sure your function can handle that and print out a notification to users.

**Step 3**

- Create a button call "Start" that when users click it, it will call `whereAmI()`.
- If you have the data, create a `<h1>` below the button to show the data.
- If there is an error, create a `<h1>` below the button to show the error with text color red.

**Step 4** Rocket

- https://restcountries.eu/ provides informations about every countries in the world. Once you have the country name in `whereAmI()` function. Send another request to `https://restcountries.eu/rest/v2/name/${country}` to get detail infor of the country you are living in. In the response, you will find the `flag` attribute which contains a link to the flag image of the country.
- Create a `<img>` tag that show the flag image.
- Handle any error that could happen.

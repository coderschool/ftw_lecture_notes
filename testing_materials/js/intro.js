var amount = 9;
amount = amount * 2;
console.log(amount); // 18

// Convert `amount` to a string
amount = "$" + amount;
console.log(amount); // "$18"

amount = 99;
var rate = 0.08;
console.log((amount * rate).toFixed(2));

var today = new Date().getDay();

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

if (today === 6) {
  console.log("Today is Saturday");
} else if (today === 0) {
  console.log("Today is Sunday");
} else {
  console.log("Looking forward to the Weekend");
}

var a;
console.log("typeof a:", typeof a); // "undefined"

a = "hello world";
console.log("typeof a:", typeof a); // "string"

a = 42;
console.log("typeof a:", typeof a); // "number"

a = true;
console.log("typeof a:", typeof a); // "boolean"

a = null;
console.log("typeof a:", typeof a); // "object"--weird, bug

a = undefined;
console.log("typeof a:", typeof a); // "undefined"

a = { b: "c" };
console.log("typeof a:", typeof a); // "object"

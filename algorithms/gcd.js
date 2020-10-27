const prompts = require("prompts");

const arguments = [
  {
    type: "number",
    name: "a",
    message: "Please input a number:",
  },
  {
    type: "number",
    name: "b",
    message: "Please input another number:",
  },
];
// Find the greatest common divisor of two numbers
function gcd(a, b) {
  while (b > 0) {
    const c = a % b;
    a = b;
    b = c;
  }
  return a;
}

(async () => {
  const response = await prompts(arguments);

  console.time("Answer time:");
  const result = gcd(response.a, response.b);
  console.log(`The greatest common divisor: ${result}`);
  console.timeEnd("Answer time:");
})();

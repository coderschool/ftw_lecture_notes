# Intro to Javascript

## Values & Types

**Built-in types**: `string`, `number`, `boolean`, `null`, `undefined`, `object`

```javascript
var a;
typeof a; // "undefined"

a = "hello world";
typeof a; // "string"

a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object"--weird, bug

a = undefined;
typeof a; // "undefined"

a = { b: "c" };
typeof a; // "object"
```

## Objects

```javascript
var obj = {
  a: "hello world",
  b: 42,
  c: true,
};

obj.a; // "hello world"
obj.b; // 42
obj.c; // true

obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true
```

Bracket notation is useful if you have a property name that has special characters in it, like `obj["hello world!"]`. Or if you want to access a property/key but the name is stored in another variable, such as:

```javascript
var obj = {
  a: "hello world",
  b: 42,
};

var b = "a";

obj[b]; // "hello world"
obj["b"]; // 42
```

## Arrays

An `array` is an `object` that holds values in nummerically indexed positions.

```javascript
var arr = ["hello world", 42, true];

arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true
arr.length; // 3

typeof arr; // "object"
```

## Truthy & Falsy

Truthy & Falsy are nature of values: when a non-boolean value is coerced to `boolean`, does it become `true` or `false`.

List of falsy:

- "" (empty string)
- 0, NaN (invalid number)
- null, undefined
- false

List of truthy:

- "hello"
- 42
- true
- [ ], [ 1, "2", 3 ] (arrays)
- { }, { a: 42 } (objects)
- function foo() { .. } (functions)

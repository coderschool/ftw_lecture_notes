# Deep and Shallow Copies

For example

```javascript
const a = [1, 2, 3];
const b = a;
b[0] = 5;
console.log(a); // [5, 2, 3]
```

The value of `a[0]` is also changed. This because the value of `a` is a reference to the memory location that stores the array. `b = a` will copy the reference, not the values in `a`. Think about it as a copy of `a`'s address. So the address of `a` and `b` will be the same; they will be pointing to the same memory location. And the copy is called **shallow**.

A **deep** copy means the data saved to a variable is in fact independent of the original data. The spread operator allows us to make copies of the original data (whether it be an array or object) and create a new copy of it in memory.

```javascript
const a = [1, 2, 3];
const b = [...a];
b[0] = 5;
console.log(b); // [5, 2, 3]
console.log(a); // [1, 2, 3]
```

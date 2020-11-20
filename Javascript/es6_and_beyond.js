"use strict";

/**
 * var, let, const
 */

function basic() {
  let x = 1;
  const y = 2;
  return { x: x, y: y };
}

// console.log(basic());

function immutable() {
  // const obj = { a: "b" };
  const obj = Object.freeze({ a: "b" });
  const arr = [1, 2, 3, 4];
  obj.a = "q";
  arr.splice(1, 1);
  return { obj: obj, arr: arr };
}

// console.log(immutable());

function immutableReference() {
  const object = { a: "b" };
  object = { a: "q" };
  return object;
}

// expect: Error
// console.log(immutableReference());

function ifBlock() {
  if (true) {
    // this will throw an error
    // const x = 24;
    // let y = 10;
    // this works
    var x = 24;
    var y = 10;
  }
  return { x: x, y: y };
}

// console.log(ifBlock());

function block() {
  let x = 111;
  {
    const x = 222;
  }
  return x;
}

console.log(block());

function temporalDeadZone() {
  console.log(myVar);
  console.log(myLet);
  console.log(myConst);
  var myVar = "var";
  // you can use variables before they're defined with let and const
  let myLet = "let";
  const myConst = "const";
  return { myVar: myVars, myLet: myLets, myConst: myConsts };
}

// console.log(temporalDeadZone());

// map(): it takes one array, and a function then it will call the function
// with item in the array, and whatever the function returns back is what will be
// put into a new array

function semiPractical() {
  const languages = ["Python", "Java", "JavaScript"];
  const callbacks = [];
  for (var i = 0; i < languages.length; i++) {
    callbacks.push(function thingGetter() {
      return languages[i];
    });
  }
  return callbacks.map((callback) => callback());
}

// var i=0: [ undefined, undefined, undefined ]
// Because i is scoped to the closure, then when callback() is called
// it referencing to the i in the closure which is languages.length
// To fix this, use let i = 0
// console.log(semiPractical());

/**
 * New APIs
 */

function stringRepeat() {
  const length = 20;
  let marker = "";
  for (let index = 0; index < length; index++) {
    marker += "*";
  }
  // ES6
  marker = "*".repeat(length);
  return marker;
}

// console.log(stringRepeat());

function arrayFrom() {
  const arrayLike = { length: 2, 0: "Hello", 1: "World!" };
  // can be appy for NodeList, object, etc. which looks like an array but not
  // which means you can not apply map(), ...
  return Array.from(arrayLike);
}

// console.log(arrayFrom());

function arrayFill() {
  const value = "hey";
  const start = 1;
  const end = 4;
  const array = new Array(7);
  for (let i = 0; i < array.length; i++) {
    if (i >= start && i <= end) {
      array[i] = value;
    }
  }
  // ES6
  array.fill(value, start, end);
  return array;
}

// console.log(arrayFill());

/**
 * Destructuring
 */

function getAverage() {
  // refactor with object destructuring
  const obj = { x: 3.6, y: 7.8, z: 4.3 };
  // ES6
  const { x, y, z } = obj;

  return Math.floor((x + y + z) / 3.0);
  return Math.floor((obj.x + obj.y + obj.z) / 3.0);
}

// console.log(getAverage());

function getAvgTemp() {
  // refactor with nested destructuring
  const weather = {
    location: "Toronto",
    unit: "Celsius",
    today: { max: 2.6, min: -6.3 },
    tomorrow: { max: 3.2, min: -5.8 },
  };
  // const unit = weather.unit;
  // const maxToday = weather.today.max;
  // const minToday = weather.today.min;

  // const maxTomorrow = weather.tomorrow.max;
  // const minTomorrow = weather.tomorrow.min;

  // ES6
  const {
    unit,
    today: { max: maxToday, min: minToday },
    tomorrow: { max: maxTomorrow, min: minTomorrow },
  } = weather;

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: unit,
  };
}

// console.log(getAvgTemp());

function getFirstTwo() {
  // refactor with array destructuring
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  // const firstItem = arr[0];
  // const secondItem = arr[1];
  // ES6
  const [firstItem, secondItem] = arr;

  return {
    firstItem: firstItem,
    secondItem: secondItem,
  };
}
// console.log(getFirstTwo());

function getElements() {
  // returns 1st, 2nd and 5th from an array
  // refactor with skipped destructuring for arrays
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  // const first = arr[0];
  // const second = arr[1];
  // const fifth = arr[4];

  const [first, second, , , fifth] = arr;

  return {
    first: first,
    second: second,
    fifth: fifth,
  };
}
// console.log(getElements());

function getSecondItem() {
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apple", "mango", "orange"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];
  // refactor with nested destructuring of arrays
  // const beans = food[0][1];
  // const orange = food[1][1];
  // const chocolate = food[2][1];

  // SOLUTION
  const [[, beans], [, , orange], [, , , chocolate]] = food;

  return { beans: beans, orange: orange, chocolate: chocolate };
}
// console.log(getSecondItem());

function nestedArrayAndObject() {
  const info = {
    title: "Once Upon a Time",
    protagonist: {
      name: "Emma Swan",
      enemies: [
        { name: "Regina Mills", title: "Evil Queen" },
        { name: "Cora Mills", title: "Queen of Hearts" },
        { name: "Peter Pan", title: `The boy who wouldn't grow up` },
        { name: "Zelena", title: "The Wicked Witch" },
      ],
    },
  };
  // refactor this to a single line of destructuring...
  // const title = info.title;
  // const protagonistName = info.protagonist.name;
  // const enemy = info.protagonist.enemies[3];
  // const enemyTitle = enemy.title;
  // const enemyName = enemy.name;

  // SOLUTION
  const {
    title,
    protagonist: {
      name: protagonistName,
      enemies: [, , , { title: enemyTitle, name: enemyName }],
      // or
      // enemies: { 3: { title: enemyTitle, name: enemyName }}
    },
  } = info;
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;
}
// console.log(nestedArrayAndObject());

// Rest
function ontoAnObject() {
  const array = [1, 2, 3, 4, 5, 6];
  const object = {};
  // refactor this to destructuring
  // object.one = array[0];
  // object.two = array[1];
  // object.three = array[2];
  // object.rest = array.slice(3);
  // SOLUTION
  [object.one, object.two, object.three, ...object.rest] = array;
  return object;
}
// console.log(ontoAnObject());

/**
 * Object literal
 */

function shorthandPropertyNames() {
  // refactor with shortening the object literal
  // and removing reptition
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // SOLUTION
  return { red, green, blue };
  return {
    red: red,
    green: green,
    blue: blue,
  };
}
// console.log(shorthandPropertyNames());

/**
 * Spread & Rest
 */

function spreadFunctionCall() {
  // TODO: return the maximum value in an array of integers
  // use spread operator and Math.max() in refactoring
  const arr = [5, 6, 8, 4, 9];
  // SOLUTION
  return Math.max(...arr);
  return Math.max(5, 6, 7, 8, 9);
}
// console.log(spreadFunctionCall())

function restString() {
  // what does this return?
  const greeting = "Hello world";
  const [h, e, l, l2, o, space, ...splitGreeting] = greeting;
  return splitGreeting;
}
// console.log(restString())

function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "g from obj2",
    },
  };
  return {
    ...obj1,
    ...obj2,
  };
}
// console.log(mergeObjects());

/**
 * Arrow Function
 */

function multiArgument() {
  // refactor to an arrow function
  // const divide = function(a, b) {
  //   return a / b
  // }
  const divide = (a, b) => a / b;
  return divide(40, 10);
}
// console.log(multiArgument())

function noArgument() {
  // refactor to an arrow function
  // const getFive = function () {
  //   return 5;
  // };
  const getFive = () => 5;
  return getFive();
}
// console.log(noArgument())

function singleArgument() {
  // refactor to an arrow function
  // const identity = function (i) {
  //   return i;
  // };
  const identity = (i) => i;
  return identity(350);
}
// console.log(singleArgument())

function spreadWithArrow() {
  // refactor to an arrow function
  // const asArray = function (...args) {
  //   return args;
  // };
  const asArray = (...args) => args;
  return asArray(1, 2, 3, 4);
}
// console.log(spreadWithArrow())

function withStatements() {
  // refactor to an arrow function
  // const tryInvoke = function (obj, fn, ...args) {
  //   try {
  //     return obj[fn](...args);
  //   } catch (e) {
  //     return undefined;
  //   }
  // };
  const tryInvoke = (obj, fn, ...args) => {
    try {
      return obj[fn](...args);
    } catch (e) {
      return undefined;
    }
  };
  return tryInvoke(Math, "pow", 2, 3);
}
// console.log(withStatements())

function withObject() {
  // refactor to an arrow function
  // const getObject = function (favoriteCandy) {
  //   return { favoriteCandy };
  // };

  const getObject = (favoriteCandy) => ({ favoriteCandy });
  return getObject("twix");
}
// console.log(withObject())

function withMultiLineExpression() {
  // const getString = function (name) {
  //   return `
  //       Hello there ${name}
  //       How are you doing today?
  //     `;
  // };
  const getString = (name) => `
        Hello there ${name}
        How are you doing today?
      `;
  return getString("Ryan");
}
// console.log(withMultiLineExpression())

function curryAdd() {
  // refactor to a arrow functions
  const curryAddition = (a) => (b) => (c) => a + b + c;
  return curryAddition(9)(3)(5);

  // function curryAddition(a) {
  //   return function (b) {
  //     return function (c) {
  //       return a + b + c;
  //     };
  //   };
  // }
}
// console.log(curryAdd())

function context() {
  const population = {
    unit: "Million",
    data: [
      { city: "Tokyo", value: 37.833 },
      { city: "Sanghai", value: 22.991 },
      { city: "New Delhi", value: 24.953 },
    ],
    display() {
      // TODO: refactor with arrow function
      // return this.data.map(function populationStringMapper(element) {
      //   return `Population in ${element.city} is ${element.value} ${this.unit}`;
      // }, this); // passing `this` as second argument to bind properly
      return this.data.map((element) => {
        `Population in ${element.city} is ${element.value} ${this.unit}`;
      });
    },
  };
  return population.display();
}
// console.log(context())

/**
 * Set
 */

function basicSet() {
  // What do you think this will return?
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(1);
  return set;
}
// console.log(basicSet());

function unique() {
  // What do you think this will return?
  const obj = { a: 45, b: 50 };
  const s = new Set();
  s.add(obj);
  s.add({ a: 45, b: 50 });
  return s;
}
// console.log(unique());

function initializeSet() {
  // What do you think this will return?
  const arr = [1, 5, 7, 2, 9, 4];
  const set = new Set(arr);
  return set;
}
// console.log(initializeSet());

function setInfo() {
  const obj = { a: 42 };
  const set = new Set([1, 2, obj, 3, 4]);
  // how do you get the size of the set?
  // how can you determine whether the set has a value?
  const [, , thirdItem] = set;
  return {
    size: set.size,
    hasObj: set.has(obj) !== -1,
    hasFive: set.has(5) !== -1,
    thirdItem,
  };
}
// console.log(setInfo());

function removeDuplicates() {
  // given an array
  // we have to remove duplicate entries
  const arr = [6, 8, 3, 9, 6, 5, 8, 2, 3, 9, 7, 7, 2, 1, 0, 8];

  // TODO: use a Set to do this
  // refactor the following
  // const uniqueArr = arr.filter((elem, index) => arr.indexOf(elem) === index);
  const set = new Set(arr);
  const uniqueArr = Array.from(set);

  return uniqueArr;
}
// console.log(removeDuplicates());

function iterateSets() {
  const set = new Set([1, 2, 3, 4]);
  for (const item of set) {
    console.log(item);
  }
}
// iterateSets();

function spreadSets() {
  // what does this return?
  const set = new Set([1, 2, 3, 4]);
  const array = [...set];
  return array;
}
// console.log(spreadSets());

function restSet() {
  // what does this return?
  const set = new Set([1, 2, 3, 4]);
  const [first, second, ...rest] = set;
  return rest;
}
// console.log(restSet());

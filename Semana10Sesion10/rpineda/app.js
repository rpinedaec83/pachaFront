"use strict"

var str = "HELLO WORLD";
console.log(str.charAt(4));

var str = "HELLO WORLD";
console.log(str[6]);

var str = "Hello \
Dolly!";
console.log(str);

var obj = { name: "John", new: "yes" }
console.log(obj);

var str = "       Hello World!        ";
console.log(str.trim());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits = 3.1416;
console.log(Array.isArray(fruits));

var numbers = [45, 4, 9, 16, 25];
numbers.forEach(mostrarNumero);
function mostrarNumero(value) {
  console.log(value);
}


var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log(numbers2)

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(over18);

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

console.log(sum);

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(allOver18);
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(allOver18);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log(a);

var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj.name);

var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(myJSON)

var timInMSs = Date.now();
console.log(timInMSs);

const d = new Date();
console.log(d.toISOString());
console.log(d.toJSON());

var person = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object using a getter:
console.log(person.lang);



///ES6

var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
  console.log(x)
}
console.log(x);
// Here x is 10

var x = 10;
// Here x is 10
{
  const x = 2;
  console.log(x)
}
console.log(x)

// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const w = (x, y) => x * y;

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)

const mynumbers = [23,55,21,87,56];
let maxValue = Math.max(...mynumbers);
console.log(maxValue)

const frutas = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
  ]);

console.log(frutas)


// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters)


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let mycar = new Car("bmw",2022)
console.log(mycar)

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
console.log(myFunction(5)); // will return 15

function suma(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let misuma = suma(4, 9, 16, 25, 29, 100, 66, 77,33,44);
console.log(misuma)


let text = "Hello world, welcome to the universe.";
console.log(text.includes("world") )   // Returns true

let text0 = "Hello world, welcome to the universe.";

console.log(text0.startsWith("Hola"))   // Returns true

var text1 = "John Doe";
console.log(text1.endsWith("Doe"))    // Returns true

let arr = Array.from("ABCDEFG")
console.log(arr)


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits1.keys();

let text2 = "";
for (let x of keys) {
  text2 += x + "<br>";
}
console.log(text2)

const numbers4 = [4, 9, 16, 25, 29];
let first = numbers4.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)

const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits9.entries();
let ww =""
for (let x of f) {
  ww += x;

}
console.log(f)
console.log(ww)

//ES2017

let text88 = "5";
text = text88.padStart(4,0);
console.log(text)
text = text88.padEnd(8,"*");
console.log(text)

async function myDisplay() {
  console.log("Empezo")
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  console.log( await myPromise);
}

myDisplay();
console.log("Continuo con el ciclo")
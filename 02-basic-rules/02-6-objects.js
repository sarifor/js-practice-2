// Arrays
const fruits = ['apple', 'orange', 'banana', 'dragon fruits'];
console.log(fruits[0]); // apple

const a = 10;
const b = 20;
const variableArray = [a, b, 30];
console.log(variableArray[0]); // 10

const duplicated = ["a", "a", "a"];
console.log(duplicated[1]);


// Add a new element to array
const target = ['a', 'i', 'u', 'e', 'o'];
target.unshift('un');
console.log(target); // [ 'un', 'a', 'i', 'u', 'e', 'o' ]
target.push('ka');
console.log(target); // [ 'un', 'a', 'i', 'u',  'e', 'o', 'ka' ]


// const
const target2 = ['ka', 'ki', 'ku'];
// target2 = ['ke', 'ko']; // TypeError: Assignment to constant variable.
target2[3] = 'ke';
console.log(target2); // [ 'ka', 'ki', 'ku', 'ke' ]


// Take an element from array
const target3 = ['sa', 'si', 'su'];

target3.pop(); // take an element from the end
console.log(target3); // [ 'sa', 'si' ]

target3.shift(); // remove the first element
console.log(target3); // [ 'si' ]

const target4 = ['ta', 'chi', 'tsu', 'te', 'to'];
target4.splice(2, 1);
console.log(target4); // [ 'ta', 'chi', 'te', 'to' ]


// Find a specific element
const target5 = ['na', 'ni', 'nu', 'ne', 'no'];

const result = target5.includes('na');
console.log(result); // true

const result2 = target5.indexOf('ni');
console.log(result2); // 1


// Iterate over an array
const target6 = ['sky', 'prizm', 'wing', 'butterfly'];
for (let x = 0; x < target6.length; x++) {
  console.log(target6[x]);
}


// Remove 'ra'
const arr = ['ga', 'ra', 'da', 'ra', 'ma', 'ra'];
let index3 = arr.indexOf('ra');
while(index3 > -1) {
  arr.splice(index3, 1);
  index3 = arr.indexOf('ra');
}
console.log(arr);


// Functions
function e() { console.log('It\'s e!') } // function declaration statement
const f = function() {}; // function expression
const g = () => {}; // arrow function

e();
e();


// Return value
function h() { 
  console.log('It\'s h!');
}
let j = h();
console.log(j); // undefined

function m() {
  console.log('It\'s m!');
  return undefined;
}
let k = m();
console.log(k); // undefined

function i() { 
  console.log('It\'s h!');
  return 'h';
}
j = i();
console.log(j); // h

function test() {
  console.log("koncha");
  return;
  console.log("Ossu");
}
test(); // koncha

function test2() {
  if (false) {
    return;
  }
  console.log('executed');
}
test2(); // executed


// Argument, parameter
function test3(parameter) {
  console.log(parameter); // argument
}
test3('argument');

function test4(param1, param2, param3) {
  console.log(param1, param2, param3); // arg1 arg2 undefined
  console.log(arguments); // [Arguments] { '0': 'arg1', '1': 'arg2' }
}
test4('arg1', 'arg2');


// Multiply function
const multiply = (x, y, z) => {
  return x * y * z
};
console.log(multiply(1, 2, 3)); // 6


// Use another variables in functions
function minus1(x, y) {
  const a1 = 100; // new variable can be declared in functions
  return (x - y) * a1;
}
console.log(minus1(5, 3)); // 200


// Use another variables outside functions
const a2 = 100;
function minus2(x, y) {
  return (x - y) * a2;
}
console.log(minus2(5, 3)); // 200


// Object literal
const today = {
  year: 2023,
  month: 7,
  day: 3,
  'break time': 16, // Add ',' at the end of the last property for more comfortable programming.
}
console.log(today); // { year: 2023, month: 7, day: 3 }

console.log(today.year); // 2023
console.log(today['year']); // 2023

const toshi = 'year';
console.log(today[toshi]); // 2023
console.log(today.hour); // undefined

// console.log(today.break time); // error
// console.log(today[break time]); // SyntaxError: Unexpected token 'break'
console.log(today['break time']); // 16

today.year = 2024;
console.log(today.year); // 2024

delete today.year;
console.log(today.year); // undefined


// Why arrays and functions belong to objects?
function hello() {}
hello.a = 'really?';

const array5 = [];
array5.b = 'wow';

console.log(hello.a); // really?
console.log(array5.b); // wow


// Methods
const debug = {
  log: function(value) { // Function in object is called 'method'.
    console.log(value); // Hello, method
  },
}
debug.log('Hello, method');


// Compare objects
console.log({} === {}); // false
console.log('str' === 'str'); // true
console.log(123 === 123); // true
console.log(false === false); // true
console.log(null === null); // true
console.log(undefined === undefined); // true

const abc = { name: 'abcdesu' };
const array = [1, 2, abc];
console.log(({ name: 'abcdesu' } === array[2])); // false
console.log((abc === array[2])); // true // Compare objects using variables


// Reference and Copy
const a4 = { name: 'teacher' };
const b4 = a4; // refer to object
a4.name = 'student';
console.log(b4.name); // student // Variable a4 and b4 refer to the same object.

let a5 = 'July';
let b5 = a5; // refer to not object
a5 = 'August';
console.log(b5); // July // Copied


// Get 'last' property
const hijiriAgeha = {
  name: {
    first: 'Ageha',
    last: 'Hijiri',
  },
  gender: 'f',
};
console.log(hijiriAgeha.name.last);
console.log(hijiriAgeha['name']['last']);
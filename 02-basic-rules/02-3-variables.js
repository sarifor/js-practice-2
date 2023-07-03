// Initialization
let total = 1000 + 2000 + 3000 + 4000;
console.log(total);
// console.log(string); // ReferenceError: string is not defined

// Declaration only is okay
let empty;
console.log(empty); // undefined

// value can be changed
let change = 'Change me';
change = 'prapapapa';
console.log(change); // prapapapa
change = undefined;
console.log(change); // undefined
change = null;
console.log(change); // null // deleted on purpose

// Use variables in various way
let number = 5;
number = number + 3;
console.log(number); // 8

number = 5
number += 3;
console.log(number); // 8

// const
const value = 'This is constant';
// value = 'Can it be changed?'; // TypeError: Assignment to constant variable.
// console.log(value);
// const wrong; // 'const' declarations must be initialized

// var
var variable;
console.log(variable); // undefined
var variable;
variable = 'Declared again';
console.log(variable);
var let = 'let can be used as a variable name';
console.log(let);

// Switch values between a and b using temporary variable c
let a = 'aaa';
let b = 'bbb';
let c;
c = a;
a = b;
console.log(a);
b = c;
console.log(b);
console.log(a, b);
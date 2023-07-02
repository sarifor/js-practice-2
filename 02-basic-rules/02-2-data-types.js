// string
console.log(typeof "Hello, world!");
console.log('');

let result = new Boolean('' == ' ');
console.log(result);

// console.log('string has single quote(')'); // SyntaxError: Invalid or unexpected token
console.log("string has single quote(')"); // No Error
console.log('string has single quote(\')'); // No Error

// multiple lines
console.log("Good\n\nNight!");

// backtick
console.log(`string`);
console.log(``);
console.log(`backtick(\`) is in string`);
console.log(`Good
Night!`);

// number
console.log(2023);
console.log(-5);

// exponential notation
console.log(5e4); // 5 * 10000 = 50000
console.log(5e+4); // 5 * 10000 = 50000
console.log(5e-3); // 5 * (1/1000) = 0.005

// not number
console.log('5');

// string to number
console.log(typeof parseInt('5')); // number

// Integers
console.log(parseInt('4.8')); // 4

// Real numbers
console.log(parseFloat('4.8')); // 4.8

// NaN(Not a Number)
console.log(parseInt("abcd")); // NaN
console.log(typeof NaN); // number

// Infinity
console.log(2 / 0) // Infinity
console.log(typeof Infinity); // number
console.log(Infinity - Infinity); // NaN
console.log(0 / 0); // NaN

// type casting
console.log('string' + 0); // string0
console.log(typeof('string' + 0)); // string
console.log('1' + 0); // 10
console.log(typeof('1' + 0)); // string
console.log('string' - 0); // NaN
console.log('9' - 5); // 4
console.log(typeof('9' - 5)); // number

// Real Number(Floting point) operations on computers have small accuracy erros
console.log(0.5 + 0.5); // 1
console.log(0.1 + 0.2); // 0.30000000000000004 // Due to the fact that computer knows 0 and 1 only.
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// boolean
console.log(true, false);
console.log(typeof(true)); // Boolean
console.log(NaN == NaN); // false
console.log(NaN != NaN); // true
console.log(true > false); // true // true is 1, false is 0

// == vs. ===
console.log('1' == 1); // true
console.log(1 == true); // true
console.log(1 != '1'); // false

console.log('1' === 1); // false
console.log(1 === true); // false
console.log(1 !== '1'); // true

// Boolean
console.log(Boolean(false)); // false
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
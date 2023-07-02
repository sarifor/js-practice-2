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

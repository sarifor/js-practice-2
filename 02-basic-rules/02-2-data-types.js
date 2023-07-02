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
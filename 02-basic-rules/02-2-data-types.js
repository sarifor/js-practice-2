// string
console.log(typeof "Hello, world!");
console.log('');

let result = new Boolean('' == ' ');
console.log(result);

// console.log('string has single quote(')'); // SyntaxError: Invalid or unexpected token
console.log("string has single quote(')"); // No Error
console.log('string has single quote(\')'); // No Error
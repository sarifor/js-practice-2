// while
// while (true) {
//  console.log('Hello, while!');
//}

// let i = 0;
// while (i < 100) { // 0 ~ 99
//   console.log('Hello, while!');
//   i++;
// }


// for
for (let i = 0; i < 100; i++) { // 0 ~ 99
  console.log('Hello, for!');
}

// for (;;) { // iterated endlessly
// }


// Print from 1 to 100
/* let j = 0;
while (j <= 99) {
  j = j + 1;
  console.log(j);  
}

for(k = 0; k < 100; k++) {
  console.log(k + 1);
} */


// break
let m = 0;
while (true) {
  console.log(m);
  if (m === 5) break;
  m++;
}
console.log(m); // 5


// Iteration endlessly
/* let i = 0;
while (true) { // 'while' statement is more used for endless iteration than 'if' statement because it uses conditional statement.
  console.log(i);
  i++;
} */


// continue
let o = 0;
while (o < 10) {
  o++;
  if (o % 2 === 0) {
    continue;
  }
  console.log(o);
}


// Multiple nested loops
for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) { // When x and y are 9, loops end.
    console.log(x, y);
  }
}

/* 1 1 
1 2 
1 3
1 ... 9

if i * j % 2 = 0
  continue
*/

for (let a = 0; a < 10; a++) {
  for (let b = 0; b < 10; b++) {
    if ((a * b) % 2 === 0) {
      continue;
    } 
    console.log(`${a} multiplyed by ${b} is ${a * b}`);
  }
}
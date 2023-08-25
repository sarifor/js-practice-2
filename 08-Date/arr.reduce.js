// Basic use
const array1 = [1, 2, 3, 4, 5];
const initialValue = 0; // If there is no initial, then reduce method takes the first element of the array as the initial value
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumWithInitial); // 15

// Another use
const result = [1, 2, 3, 4, 5].reduce((a, c) => {
  // console.log(a);
  a[c] = c * 10;
  return a;
}, {}); // Initial value '{}' is assigned
console.log(result); // { '1': 10, '2': 20, '3': 30, '4': 40, '5': 50 }
const array1 = [1, 2, 3, 4, 5];
const initialValue = 0; // If there is no initial, then reduce method takes the first element of the array as the initial value
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumWithInitial); // 15
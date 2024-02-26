// array.reduce()
// - 배열을 기반으로 값 하나를 도출할 때 사용함.
// - reduce 메서드는 각 요소에 대해 콜백 함수를 실행하고,
// - 각 호출의 결과를 누적된 결과 값에 반영하여 최종 결과를 반환함.


// Basic use
const array1 = [1, 2, 3, 4, 5];
const initialValue = 0; // If there is no initial, then reduce method takes the first element of the array as the initial value
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumWithInitial); // 15


// Basic use 2
const array2 = [5, 6, 7];
const result2 = array2.reduce((sum, current) => sum + current, 0); // 콜백 함수와 초기값을 매개변수로 가짐
console.log(result2); // 18


// Another use
const result = [1, 2, 3, 4, 5].reduce((a, c) => {
  // console.log(a);
  a[c] = c * 10;
  return a;
}, {}); // Initial value '{}' is assigned
console.log(result); // { '1': 10, '2': 20, '3': 30, '4': 40, '5': 50 }
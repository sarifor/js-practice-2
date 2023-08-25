const array1 = ["1", "2", "3", "4", "5"];
const result = array1.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(result); // 54321
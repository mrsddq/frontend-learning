const numbers = [1, 2, 3, 4, 5];

// Double each number, filter even results, and sum them
const result = numbers
  .map(num => num * 2)           // [2, 4, 6, 8, 10]
  .filter(num => num % 2 === 0)   // [2, 4, 6, 8, 10]
  .reduce((acc, num) => acc + num, 0); // 30

console.log(result); // Output: 30

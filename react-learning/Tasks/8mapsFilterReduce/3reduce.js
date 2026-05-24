const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

// Explanation: Here, reduce starts with 0 as the initial value of acc and adds each num in the array, resulting in a sum of 10.
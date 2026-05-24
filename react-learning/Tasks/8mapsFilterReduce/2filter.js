const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Explanation: filter checks each element of numbers, including only the even numbers [2, 4] in the new array.
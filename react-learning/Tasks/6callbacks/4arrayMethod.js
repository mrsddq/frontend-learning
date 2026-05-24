const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8]

// Explanation: The map method accepts a callback function that operates on each element in the numbers array, doubling each value.
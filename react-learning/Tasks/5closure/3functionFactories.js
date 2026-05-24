function createAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add5 = createAdder(5);
  console.log(add5(3)); // Output: 8

//   Explanation: createAdder(5) returns a function that adds 5 to its input. Here, x (5) is remembered by the returned function, creating a closure.
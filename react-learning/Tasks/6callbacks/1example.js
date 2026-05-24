function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Calling the callback function
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayGoodbye); 
  // Output:
  // Hello, Alice
  // Goodbye!
  
//   greet takes two arguments: a name and a callback function.
//   After greeting name, it executes callback(), which is the sayGoodbye function in this case.
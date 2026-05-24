// Example with var
function varExample() {
    if (true) {
      var x = 10;
    }
    console.log(x); // Output: 10, because 'var' is function-scoped
  }
  varExample();
  
  // Example with let
  function letExample() {
    if (true) {
      let y = 20;
      console.log(y); // Output: 20
    }
    // console.log(y); // Uncaught ReferenceError: y is not defined, because 'let' is block-scoped
  }
  letExample();
  
  // Example with const
  function constExample() {
    const z = 30;
    console.log(z); // Output: 30
    
    // z = 40; // Uncaught TypeError: Assignment to constant variable, because 'const' cannot be reassigned
  }
  constExample();
  
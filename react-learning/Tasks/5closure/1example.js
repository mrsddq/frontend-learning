function outerFunction() {
    let outerVariable = "I'm outside!";
  
    function innerFunction() {
      console.log(outerVariable); // Accesses outerVariable from the outer function
    }
  
    return innerFunction; // Returns the inner function (creating a closure)
  }
  
  
  const closureFunction = outerFunction();
  closureFunction(); // Output: "I'm outside!"
  
// Explanation:
// outerFunction defines outerVariable and an innerFunction that accesses outerVariable.
// When outerFunction returns innerFunction, it also returns the scope in which innerFunction was created.
// Even though outerFunction has completed execution, closureFunction (the returned innerFunction) still has access to outerVariable due to closure.
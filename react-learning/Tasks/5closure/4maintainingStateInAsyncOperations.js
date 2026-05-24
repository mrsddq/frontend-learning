function delayedGreeting(name) {
    setTimeout(function() {
      console.log("Hello, " + name);
    }, 10000);
  }
  
  delayedGreeting("Alice"); // Output after 1 second: "Hello, Alice"

  
//   Explanation: Even after delayedGreeting has executed, the anonymous function in setTimeout retains access to name due to closure.
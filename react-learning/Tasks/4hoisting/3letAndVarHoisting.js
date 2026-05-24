console.log(myLet); // Uncaught ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myLet); // Output: 10

// Although let myLet is hoisted, it is uninitialized in the TDZ, so accessing myLet before its declaration throws a ReferenceError.
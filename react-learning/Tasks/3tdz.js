function demoTDZ() {
    // Accessing 'a' in TDZ results in ReferenceError
    // console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
  
    let a = 10;
    console.log(a); // Output: 10
  }
demoTDZ();

//   let a is declared after the console.log(a); line.
//   Accessing a before its declaration throws a ReferenceError because a is in the TDZ.
//   Once the declaration let a = 10; is reached, a is initialized, and you can safely access it.
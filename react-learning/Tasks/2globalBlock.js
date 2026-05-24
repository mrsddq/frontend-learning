let globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible here, output: "I'm global"
}

test();
console.log(globalVar); // Also accessible here, output: "I'm global"

function blockScopeExample() {
    if (true) {
      let blockScopedVar = "I'm block-scoped";
      console.log(blockScopedVar); // Accessible here, output: "I'm block-scoped"
    }
    // console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined
  }
  
  blockScopeExample();
  
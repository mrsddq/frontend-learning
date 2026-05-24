//function in JS

//function declaration
//calling the fucntion before creation is function hoisting

const sum1=sum(5,6);
console.log((sum1));

function sum(a,b){
      return a+b;
}

//function expression
const sum2=function(a,b){
      return a+b;
}
console.log(sum2(1,9));
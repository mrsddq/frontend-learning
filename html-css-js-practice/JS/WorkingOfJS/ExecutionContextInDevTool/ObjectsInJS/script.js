const student={
    // Key: Value
    name: 'Laraib',
    age: 22,
    hobby: 'Music',
// below is the anonymous function
    show: function(){
        console.log("This is the detail section");
    }
}

console.log(student);
// to acess key dot notation is used
console.log(student.name);
console.log(student["name"]);
student.show();
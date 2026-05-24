//callback function
function greet(wish){
    console.log(
        `${wish()},Welcome to the Javascript Course`
    );
}

function sayHi(){
    return 'Hi';
}

function sayHello(){
    return 'Hello';
}

function goodMorning(){
    return 'Good Morning';
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);
// Arrays in JS are Dynamic
const cities=[
    'Mumbai',
    'Delhi',
    'Calcutta',
    'Jaipur',
    'Chennai'
    
];

// length
console.log(cities.length);

cities[2]='Kolkata';
console.log(cities);

// adding an element
const teams=['CSK', 'RCB', 'MSG', 'LSG'];
teams.push('GT'); 

const pushArray=teams.push('DC');
console.log(pushArray);

// unshift
teams.unshift('KKR'); 
console.log(teams);

const unshiftArray=teams.unshift('RR');
console.log(unshiftArray);

// removing an element
teams.pop();
console.log(teams);

const popArray=teams.pop();
console.log(popArray);

// shift
teams.shift('DC');
console.log(teams);

const shiftArray=teams.shift('DC');
console.log(shiftArray);


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
console.log("pushArray:",pushArray);

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

// indexOf
const RCBIndex=teams.indexOf('RCB');
console.log(RCBIndex);

console.log(teams);
const GTIndex=teams.indexOf('GT');
console.log("IndexOf",GTIndex);

// includes
const RCBIncludes=teams.includes('RCB');
console.log(RCBIncludes);

// slice : trim the array
// argument: as numbers
console.log(teams);
console.log("Slice:",teams.slice(2));
console.log(teams);

console.log(teams);
console.log("Slice:",teams.slice(-1));
console.log(teams);

console.log(teams);
console.log(teams.slice(-2));
console.log(teams);

// splice: remove and add the elements
console.log(teams);
// (index, delete number of elements, insert)
teams.splice(2,0,'GT');
console.log("Splice",teams);

console.log(teams);
console.log(teams.splice(-2));
console.log(teams);

// concat
const concatArray=["India", "Australia", "USA", "UK"];
const mergedArray=teams.concat(concatArray);
console.log(mergedArray);
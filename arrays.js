// Creating arrays
let arr1 = [];
let arr2 = [ "Item 1", "Item2" ];
let arr3 = new Array();
let arr4 = new Array("Item 1", "Item2")

//Accessing values

let names = ["Yair", "Esmeralda", "Cartman", "Peter"]
console.log (`Names Length: ${names.length}`);
console.log (`First Name: ${names[0]}`);
console.log (`Second Name: ${names[1]}`);
console.log (`Third Name: ${names[2]}`);
console.log (`Fourth Name: ${names[3]}`);
console.log (`Tenth Name: ${names[10]}`);

//Searching for values 
const includesYair = names.includes("Yair");
console.log(`Includes Yair: ${includesYair}`);
const includesBrian = names.includes("Brian");
console.log(`Includes Brian: ${includesBrian}`);
const yairIndex = names.indexOf("Yair");
console.log(`Index of Yair: ${yairIndex}`);
const brainIndex = names.indexOf("Brian");
console.log(`Index of Brian: ${brainIndex}`);

//Adding value - at the end
names.push("Meg");
console.log(names);

//Adding value - at the start
names.unshift("Butters");
console.log(names);

//Adding value - at a specific index
names.splice(1, 0, "Chris");
console.log(names);

//Removing value - at the start
names.shift();
console.log(names);

//Remove value - at specific index
names.splice(5, 1);
console.log(names);

//Arrays and objects
const obj1 = {
    firstName: "Yair",
    lastName: "Vera"
};

const obj2 = {
    firstName: "Bob",
    lastName: "Berger"
};

const obj3 = {
    firstName: "Yair",
    lastName: "Vera"
};

const employee = [obj1, obj2];
console.log(`Is identical object in arrray: ${employee.includes(obj3)}`);
console.log(`Is same object in the array: ${employee.includes(obj1)}`);

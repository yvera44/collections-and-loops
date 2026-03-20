// Creating an object
const obj = {
    firstName: "Yair",
    lastName: "Vera"
};

// creating a map
const map1 = new Map();
map1.set("firstName", "Yair");
map1.set ("lastName", "Vera");
console.log(map1);

// Using Non-string keys
map1.set(new Date().getTime(), "Number key");
map1.set([], "Array key");
map1.set(() => "Hi", "Function key");
console.log(map1);

// Checking the size 
console.log(`Map Size: ${map1.size}`);

// Accessing values
console.log(map1.get("lastName"));
console.log(map1.get([]));


// Deleting values
map1.delete("firstName");
console.log(`Map Size: ${map1.size}`);

// Creating a set 
const set1 = new Set();
set1.add("Yair");

// Cheking set size
console.log(`Set Size ${set1.size}`);

// Trying to add the "same" value
set1.add("Yair");
console.log(`Set Size ${set1.size}`);

// Adding in complex values
const team1 = new Set();
const emp1 = {
    firstName: "Yair",
    lastName: "Vera"
};
team1.add(emp1);
console.log(`Set size: ${team1.size}`);

// Detecting if a Set has an object 

console.log(`Does have employee: ${team1.has(emp1)}`);

// Removing values from a set 
team1.delete(emp1);
console.log(`Set size ${team1.size}`);

//Remove all values
team1.clear();
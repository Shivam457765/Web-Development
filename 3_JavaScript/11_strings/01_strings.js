const name = "shivam"
const repoCount = 50

console.log(name + repoCount + " Value")


console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);


// String declaration
const gameName = new String('Shivam')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
// converting it to lowercase
console.log(gameName.toLowerCase());
// converting it to uppercase
console.log(gameName.toUpperCase());


// Now looking at what character is at which index.
console.log(gameName.charAt(4));

// This will tell you the index of the character.
console.log(gameName.indexOf('v'));
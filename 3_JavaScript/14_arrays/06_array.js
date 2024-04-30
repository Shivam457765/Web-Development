const myarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// inside flat number is passed as to how many levels of subarrays are to be resolved.
const newarray = myarray.flat(Infinity)
console.log(newarray);


//checking if it is an array or not
console.log(Array.isArray("Hitesh"))
// converting given string to array
console.log(Array.from("Hitesh"))

// It is not able to convert it into array so it will return an empty array.
console.log(Array.from({name : "Hitesh"}))


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))
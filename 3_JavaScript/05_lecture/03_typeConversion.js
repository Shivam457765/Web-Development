let score = null

console.log(typeof score);
console.log(typeof(score));


// converting string to number using type conversion
let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// output
// string
// string
// number
// 0  -->  output is 0 which is wrong
// as when we are creating a website for weather purposes than if we are not getting tempertaures from the server due to some issue then it must produce 'not avaible / null' instead of giving 0 as a value, as 0 is also a temperature.
// This will lead to misunderstanding in many cases
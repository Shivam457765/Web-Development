console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));


console.log(Math.min(4,3,6,8,-1));
console.log(Math.max(4,3,6,8,-1));


// Value of math.random() will always be between 0 and 1.
console.log(Math.random());
console.log((Math.random()*10) + 1);

// 1 is added to remove the case when 0 will come 
console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min)
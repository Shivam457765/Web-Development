console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" < 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// output
// false
// false
// true
// The reason is that an equality check ==  and comparisons > <>=<= work differently.
// Comparisons convert null to a number ,treating it as 0.
// That's why  
// null >= 0 is true 
// and 
// null > 0 is false. 


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// output
// false
// false
// false


// strict check
//  ===  ->  It is used to check values and datatypes both at the same time.
console.log("2" === 2);
const myArr = [9,5,1,0,2,4,3]

// slice,splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);
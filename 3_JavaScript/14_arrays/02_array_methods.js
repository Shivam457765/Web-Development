// Array Methods

const myArr = [9,5,1,0,2,4,3]

myArr.push(6);
myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);

// unshift will  place 99 at the start of the array.
myArr.unshift(99)
console.log(myArr);
// shift will remove 99 from the start of the array.
myArr.shift()
console.log(myArr);


// this will return boolean value.
console.log(myArr.includes(9));
// this will return the index of the value if it is present.
console.log(myArr.indexOf(2));
// this will return -1 if value is not present.
console.log(myArr.indexOf(21));


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));
var c = 300

let a = 300
if(true)
{
    let a = 10
    const b = 20
    var c = 30
    console.log("value of a Inside block : ",a);
}

// a and b are defined inside the if block only so they cannot be accessed
// console.log(a);
// console.log(b);

// c is printing even if it is declared inside if block so that's why var is not used much
console.log(c);


console.log("value of a outside block : ",a);


for(let i = 0;i<array.length;i++)
{
    const element = array[i];
}
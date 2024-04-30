function calculateCartPrice(num1)
{
    return num1
}

console.log(calculateCartPrice(2))


function calculateCartPriceArrayinfunction(...num1)
{
    return num1
}

console.log(calculateCartPriceArrayinfunction(200,400,500,2000))



function calculateCartPriceArraymultiplevalues(val1,val2,...num1)
{
    return num1
}

console.log(calculateCartPriceArraymultiplevalues(200,400,500,2000))



const user = {
    username : "Shivam",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2,4,1,5,6]));
function addTwoNumbers(number1,number2)
{
    let result = number1+number2
    return result

}

const result =addTwoNumbers(3,5)

console.log("Result: ",result)

function loginUserMessage(username)
{
    if(username === undefined)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shivam"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())
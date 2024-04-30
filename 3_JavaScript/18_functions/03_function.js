function loginUserMessage(username = "sam")
{
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shivam"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())
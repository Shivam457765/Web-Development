const user = {
    username : "Shivam",
    price : 999,

    welcomeMessage : function()
    {
        // this keyword is used to refer the current context.
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// // here the context is changing
// user.username = "sam"
// user.welcomeMessage()
console.log(this)
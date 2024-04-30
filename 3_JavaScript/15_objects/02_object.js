// singleton  (constructor se bana toh singleton banega)
// Object.create

// declaring symbol
const mySym = Symbol("Key1")

// literals se singleton nahi banta hai
// object literals
const JsUser = {
    name : "Shivam",
    "full name" : "Shivam Kumar Rai",
    [mySym] : "mykey1",
    age : 18,
    location : "Jaipur",
    email : "shivamkrrai@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// How to access object
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "shivam@chatgpt.com"


JsUser.email = "shivam@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

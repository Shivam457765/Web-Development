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
Object.freeze(JsUser)

JsUser.email = "shivam@microsoft.com"
console.log(JsUser);


// There are two types of memory
// One is stack memory and the other is heap memory

// In Primitive datatypes stack memory is used
// In Non-Primitive datatypes heap memory is used.

let myYoutubename = "ShivamKumarRai";

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(myYoutubename); 
console.log(anothername);


let userOne = {
    email : "usergoogle.com",
    upi : "user@ybl",
}

let userTwo = userOne
userTwo.email = "shivamkumarrai457765@gmail.com"

console.log("Printing User One detail : ")
console.log(userOne.email);
console.log(userOne.upi);

console.log("Printing User Two detail : ")
console.log(userTwo.email);
console.log(userTwo.upi);
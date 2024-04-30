// Singleton
// const tinderuser = new Object()


// Non-Singleton 
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Shivam",
            middlename : "Kumar",
            lastname : "Rai"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
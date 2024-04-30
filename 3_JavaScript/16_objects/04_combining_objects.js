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


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign(obj1,obj2)
// const obj5 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2}
const obj5 = {...obj1, ...obj2, ...obj3}

console.log(obj4)
console.log(obj5)


const users = [
    {
        id : 1,
        email : "shivam@gmail.com"
    },
    {
        id : 1,
        email : "shivam@gmail.com"
    },
    {
        id : 1,
        email : "shivam@gmail.com"
    },
    {
        id : 1,
        email : "shivam@gmail.com"
    },
    {
        id : 1,
        email : "shivam@gmail.com"
    },
    {
        id : 1,
        email : "shivam@gmail.com"
    },
    {
        id : 1,
        email : "shivam@gmail.com"
    },


]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

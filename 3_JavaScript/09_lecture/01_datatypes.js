// Types of Datatypes : Primitive and Reference(Non-Primitive)

// Primitive Datatypes : These are Call by Value

// There are seven types of primitive datatypes:

// String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 34564323883733131789n


// Reference Datatypes : Memeory reference is allocated directly

// Array,Objects,Functions

// Array
const heros = ["Shaktiman","naagraj","doga"];

// objects
let myObj = {
    name : "Shivam",
    age : 22,

}

// functions
const myFunction = function()
{
    console.log("Hello world");
}


// This (typeof) function will let you know the datatype of the variable.
console.log(typeof bigNumber)

console.log(typeof outsideTemp)

console.log(typeof myFunction)



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// JavaScript is dynamically typed. This means that variables in JavaScript can
// hold values of any data type, and the data type of a variable can change during 
// the execution of a program. JavaScript does not require explicit declaration of
// data types when declaring variables, and it automatically determines the data 
// type of a variable based on the value assigned to it. This is in contrast to 
// statically typed languages where variable types are explicitly declared and 
// enforced at compile time.






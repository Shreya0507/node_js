// Primitive 

// types :- String, Symbol, Boolean, BigInt, Number, null, undefined

const score = 33
const scoreValue = 33.33

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive)
// Array, Objects, Functions

const names = ["Shreya", "Priyanka", "Vaibhavi"];

let info = {
    name : "shreya",
    age : 20
}

const myFunction = function(){
    console.log("Shreya");
}

console.log(typeof(names))
console.log(typeof(info))
console.log(typeof(myFunction))


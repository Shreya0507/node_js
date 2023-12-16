// object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Shreya",
    // mySym : "Key2",
    [mySym] : "Key2",
    age : 20,
    location : "Pune",
    email : "shreya@gmail.com",
    isLoggedIn : false
}

// console.log(JsUser.email);
// console.log(JsUser["location"]); // When key is written in => " "
// console.log(JsUser);

//Object.freeze(JsUser) 

JsUser.greeting = function(){
    console.log("Hello Js");
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

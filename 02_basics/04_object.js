const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Shreya"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "somemail@gmail.com",
    fullname: {
        userfullname:{
            firstname: "piyu",
            lastname: "borkar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {11:"aa", 22:"bb"}
const obj3 = {111:"aaa", 222:"bbb"}

// const obj4 = {obj1, obj2, obj3} // Gives differently
//const obj4 = {...obj1, ...obj2, ...obj3} // Gives single
//const obj4 = Object.assign({},obj1, obj2, obj3) 
// Here {}=> is target and objs are source
//console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js in hindi",
    price : "9999",
    courseInstructor: "siya"
}

const {courseInstructor: instructor} = course
// console.log(courseInstructor);

console.log(instructor);

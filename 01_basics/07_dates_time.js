const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 11, 15)
let myCreatedDate = new Date("12-15-2023")
console.log(myCreatedDate.toDateString());
// +++++ Months start from 0 to 11 +++++
// Here 0 means Jan & 11 means dec 

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myCreatedDate.getTime());


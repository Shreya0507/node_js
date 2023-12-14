const balance = new Number(400)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // after decimal

const newBalance = 23.59999
// console.log(newBalance.toPrecision(4)); // persice the value upto that decimal

const num = 1000000
// console.log(num.toLocaleString()); // comma in numbers

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.6574));
// console.log(Math.ceil(5.785));
// console.log(Math.floor(5.785));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);

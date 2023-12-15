// +++++ Arrays +++++
// Shallow copy => share the same reference(like heap)

const myArr1 = new Array(11,22,33,44,55,66)

// myArr1.push(77,88)
// myArr1.pop()

// myArr1.unshift(9)
// myArr1.shift()

console.log("A ", myArr1);

// const newArr = myArr1.join()
// console.log(newArr);
// console.log(typeof newArr);

const myn1 = myArr1.slice(1,3); // Donot remove from original array
console.log(myn1);
console.log("B ", myArr1);

const myn2 = myArr1.splice(1,3); // Remove from original array => Manipulate original array
console.log(myn2);
console.log("C ", myArr1);


// +++++ Output +++++
// A  [ 11, 22, 33, 44, 55, 66 ]
// [ 22, 33 ]
// B  [ 11, 22, 33, 44, 55, 66 ]
// [ 22, 33, 44 ]
// C  [ 11, 55, 66 ]


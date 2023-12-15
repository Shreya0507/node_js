const Arr1 = ["Siya", "Prachi", "Ritu"]
const Arr2 = ["Reema", "Piyu", "Shri"]

//Arr1.push(Arr2) // Consider Arr2 as one element in Arr1
//console.log(Arr1);

// const newArr = Arr1.concat(Arr2) // Here newArr will contain both Arr1 & Arr2
// // But suitable for 1 array
// console.log(newArr);

const newArr1 = [...Arr1, ...Arr2]
// Can add any number of arrays
//console.log(newArr1);

const newArr2 = [1,2,3,4,[5,6,[7,8]]]
console.log(newArr2);

const newArr3 = newArr2.flat(Infinity)
console.log(newArr3);



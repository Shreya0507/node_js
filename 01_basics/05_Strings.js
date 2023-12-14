const name = "Shreya"
const age = 20

//console.log(name + " " + age + " " + "yrs")
console.log(`My name is ${name} and my age is ${age}`);

const anothername = new String('Priyu')

console.log(anothername.length);
console.log(anothername.toUpperCase());
console.log(anothername);

const newstring = anothername.substring(0,3)
console.log(newstring);

const newstringOne = "  Siya  "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://shreya.com//shreya%20waghole"
console.log(url.replace('%20', '-'));
// const url = "https://shreya.com//shreya waghole"
// console.log(url.replace(' ', '-'));
console.log(url.includes('priyu'));

console.log(url.split('//'));
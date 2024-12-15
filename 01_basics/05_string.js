const name="hitesh"
const repoCount= 50

//console.log(name+ repoCount+" Value");

console.log(`Hello my name is ${name} & my repo count is ${repoCount}`);

const gameName=new String('Samaaaaa-here-only');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://google.com/google%20here"

console.log(url.replace('%20','-'))

console.log(url.includes('goo'))

console.log(gameName.split('-'));
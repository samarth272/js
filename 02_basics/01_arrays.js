//array

const myArr=[0,1,2,3,4,5]
const myHeros=["Shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()               //remove last value

myArr.unshift(9);            //add value at first
myArr.shift()                 //remove first value

//console.log(myArr.includes(9));       //check
// console.log(myArr.indexOf(3));       //gives index

const newArr=myArr.join()

console.log(myArr);
console.log(newArr);

//slice,splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)

console.log(myn2);

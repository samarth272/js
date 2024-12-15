//Primitive

//7 types : String ,Number ,Boolean ,null ,undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber=4354646654646546

//Reference (Non primitive)

//Array,Objects, Functions

const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

//stack(primitive), Heap(Non-primitive)

let myYoutubename="abcdff@gmail.com"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email="sama@google.com"

console.log(userOne.email);
console.log(userTwo.email);
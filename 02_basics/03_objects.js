//singleton===> made by constructor

//object literals

const mySym=Symbol("key1")

const Jsuser={
    name:"hitesh",           //key-value
    "full name":"xyx abc",
    [mySym]:"mykey1",
    age:18,
    location:"Pune",
    email:"xyz@gmail.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"])
console.log(Jsuser["full name"]);
console.log(typeof Jsuser[mySym]);

console.log(Jsuser[mySym]);

Jsuser.email="hitu@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email="hituuuuu@gmail.com"
//console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting());

Jsuser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greetingTwo());
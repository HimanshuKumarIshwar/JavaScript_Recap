// singleton
// object literals

const mySym = Symbol("key1") 



const jsUser ={
    name: "Himanshu",
    "full name": "Himanshu Kumar",
    [mySym]: "mykey1",
    age: 23,
    location: "Patna",
    email: "himasnhu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(  jsUser[mySym])



jsUser.email = "himanshu@chatgpt.com"
//console.log(jsUser.email);

//Object.freeze(jsUser)
jsUser.email ="himanshui@microsoft.com"

//console.log(jsUser.email);


jsUser.greeting = function(){
    console.log("hello Js User");
}

jsUser.greeting2 = function(){
    console.log(`Hello Js User ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());






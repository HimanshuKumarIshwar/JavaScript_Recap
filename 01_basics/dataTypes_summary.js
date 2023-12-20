//primitive
// 7 types String, Number, Boolean, Undefined,null, BigInt, Symbol

 const score =100
  const scoreValue =100.4
  const isLoggedIn =false
  const outSideTem =null;
  let userEmail;

  const id= Symbol("123")

const anotherId =Symbol("123")

// console.log(id===anotherId)

//const bigNumber =234556788976789





//Reference (Non-primitive)

// Array, Object,Function


const heros =["shaktiman", "naagraj","doga"]

 let myObj ={
    name: "himanshu",
    age: 23

}

  
 const myFunction =function (){
    console.log("Hello word")

}

myFunction()

// console.log(typeof myFunction)
// console.log(typeof heros)


// Stack, Heap

  let myYoutubename ="HimanshuKumardotCom"

  let anothername =myYoutubename
  anothername ="chaiaurcode"

  console.log(anothername)
  console.log(myYoutubename)


  let user ={
    email: "user@gmail.com",
    upi: "user@ybl"

  }

let userTwo =user
userTwo.email ="himasnhu@google.com"

console.log(user.email)
console.log(userTwo.email)



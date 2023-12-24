// const userEmail ="h@himanshu.ai"

// if(userEmail){
//     console.log("Got user email");
// }else {
//     console.log("Dont't have user email");
// }



const userEmail = []
if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
     console.log("object is Empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary Operator

//condition ? true: false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater then 80") : console.log("Less then 80");





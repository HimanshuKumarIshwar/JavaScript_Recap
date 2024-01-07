const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

  //const chai = Object.create()

const chai = {
    name: 'ginger chai',
    price: 2050,
    isAvailable: true
}



console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai, 'name',{
//     writable: false,
//     enumerable: false
// })
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

 for(let [key, value] of Object.entries(chai)){

    if(typeof value !== 'function') {
    console.log(`${key}:  ${value}`);
    }
   
 }


// console.log(Math.PI);

// Math.PI = 3;
// console.log(Math.PI);
 
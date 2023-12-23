// Immediately Invoked Function Expressions (IIFE)

//  function chai(){
//     console.log(`DB CONNECTED`);
//  }
//  chai()


(function chai(){
    // named IIFE ha
    console.log(`DB CONNECTED`);
})();   // semicolen necesaary to make another IIFE

( (name) => {

    // unname IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('himanshu')



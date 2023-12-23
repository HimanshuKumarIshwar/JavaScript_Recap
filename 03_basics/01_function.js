


function sayMyName(){
    console.log("H")
    console.log("I");
    console.log("M");
    console.log("N");
}

//sayMyName()


// function addTwoNumber(number1, number2){
//     console.log( number1 + number2);
// }
function addTwoNumber(number1, number2){
        // const  result =number1 + number2
        //  return result

        return number1 + number2

     }

  const res = addTwoNumber(3,5)

  //console.log(res);


  function loginUserMessage(username){
    if(!username){
 console.log("Please enter a user name")
 return 
    }
    return `${username} just logged in`
  }

  function loginMessage(username ="sam"){
    return `${username} just logged`
  }

   // console.log(loginUserMessage("Himanshu"));

    //console.log(loginUserMessage());

    //console.log(loginMessage("Himanshu"));



    function  calculateCartPrice( val1, val2, ...num1){
return num1;
    }

    //console.log(calculateCartPrice(2,4,5,4,5,6));

    const user ={
      username: "hitesh",
      price: 199
    }

    function handleObject(anyobject){
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    }

    handleObject(user);
    handleObject({
      username: "Himanshu",
      price: 100
    });


    const myNewArray  = [200,400,600]

    function returnSecondvalue(getArray){
      return getArray[2];
    }

    //console.log(returnSecondvalue(myNewArray));

    console.log(returnSecondvalue([200,300,400,600]));

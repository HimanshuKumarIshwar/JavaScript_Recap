const user = {
    username: "Himanshu",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage()

//  user.username ="sam"
//  user.welcomeMessage();


//console.log(this);


// function chai(){

//      let userName =" Hitesh"
//     console.log(this.userName);
// }

// chai()





// const chai = function () {
//     let username ="Hiamsnhu"
//     console.log(this.username);

// }

// chai()


const chai = ()=> {
    let username ="Hiamsnhu"
    console.log(this);
}

//chai()


//  const addTwo = (num1, num2) => {
// return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2 )

const addTwo = (num1, num2) => ({username: "Himasnhu"} )


console.log(addTwo(2, 4));


const myArray = [2,4,5,6,7]

//myArray.forEach()


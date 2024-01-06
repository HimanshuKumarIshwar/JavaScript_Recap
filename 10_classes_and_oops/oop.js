const user = {
userName: "Himanshu",
logonCount: 6,
signedIn: true,

getUserDetails: function(){
    //console.log("Got user details from database");
    //console.log(`user name: ${this.userName}`);
    console.log(this);
}
}

// const user2 = {
//     userName: "Himanshu",
//     logonCount: 6,
//     signedIn: true,
    
//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         //console.log(`user name: ${this.userName}`);
//         console.log(this);
//     }
//     }


//console.log(user.getUserDetails());
//console.log(this);


// const promiseOne = new Promise()
// const date = new Date();

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome ${this.userName}`);
    }
    return this;

}


const userOne = new User("himanshu", 12, true);
const usertwo = new User("hitesh", 112, false)
console.log(userOne);


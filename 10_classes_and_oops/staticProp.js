class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User Name : ${this.username}`);
    }

   static  createId(){
        return `123`
    }


}
const hitesh = new User("hitesh")

//console.log(hitesh.createId());  static 

class Teacher extends User{
    constructor(email, username){
        super(username)
        this.email = email


    }
}

const iphone = new Teacher('iphone@apple.com', 'iphone')

console.log(iphone.logMe());
console.log(iphone.createId());




class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
      get email(){
        return this._email.toUpperCase()

      }
      set email(value){
        this._email = value
      }
     

    get password(){
          return `${this._password}himanshu`
    }


    set password(value){
    this._password = value
    }


}

const himanshu = new User("himanshu@gmail.com", 'abc')

console.log(himanshu.password);


console.log(himanshu.password);






let myName = "Himanshu     "
let channelName ="chai   "

//console.log(myName.trueLength);








let myHeros = ["'thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

      getSpiderPower: function(){
       // console.log(`Spidy power is ${this.spideman}`);
      }


}
Object.prototype.hitesh = function(){
    //console.log(`hitesh is present in all objects`);
}


Array.prototype.heyHimanshu = function(){
    //console.log("Himansnhu say Hello");
}
//heroPower.hitesh()
myHeros.hitesh()

myHeros.heyHimanshu()
//heroPower.heyHimanshu()



// inheritance
const User = {
    name: "chai",
    email: "chai@gmail.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASpport = {
     makeAssignment: 'JS assigment',
     fullTime: true,
     __proto__:TeachingSupport
}

Teacher.__proto__ = User


// modern syntex

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName ="ChaiAurCode     "
String.prototype.trueLength = function(){
      console.log(`${this}`);
      console.log(`True Length is ${this.trim().length}`);
}

anotherUserName.trueLength();

"hitesh".trueLength()
"IceTea".trueLength();


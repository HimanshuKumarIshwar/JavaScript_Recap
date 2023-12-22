//const tinderUser = new Object()

//console.log(tinderUser);

const tinderUser= {}
tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn =false
//console.log(tinderUser);

const regularUser ={
    email: "someAgmail.com",
    fullName: {
        userFullName: {
            firstName: "Himansshu",
            lastName: "Ishwar"
        }

    }
}

//console.log(regularUser.fullName.userFullName.firstName)

const obj1 ={
    1: "a",
    2: "b"
}

const obj2 ={
    3:"a",
    4: "b"
}

//const obj3 ={obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 ={...obj1,...obj2}

//console.log(obj3);


const users =[
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hima@gmail.com"
    },
    {
        id: 3,
        email: "himanshu@gmail.com"
    }

]

users[0].id

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))




const course ={
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} =course

//console.log(courseInstructor)

console.log(instructor);




// const navbar = ({company})=> {

// }

// navbar(company = "hitesh")


// {
//     "name": "hitesh",
//     "courseName": "js in Hindi",
//     "price": "free"
// }

[
    {}
]
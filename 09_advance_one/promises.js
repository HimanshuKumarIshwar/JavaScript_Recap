const promisesOne = new Promise((resolve,reject)=> {
    // Do an async task
    // DB Calls, crytography, network
    setTimeout(()=> {
    console.log("Asyc Task is Completed");
    resolve()
    }, 1000)
})

promisesOne.then(()=>{
   console.log("promises is consumed"); 
})



new Promise((resolve, reject)=> {
    setTimeout(()=> {
   console.log("Async task 2");
   resolve();
    }, 1000)
}).then(()=> {
    console.log("Promises 2 is consumed");
})


const promisesThree = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve({userName: "Himanshu", userEmail: "himanshuishwar@gmail.com"})
    }, 1000)
})

promisesThree.then((user)=> {
   console.log(user);
})


const promisesFour = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      let error =false;

      if(!error){
        resolve({userName:"Himanshu", passoword: 124})
      }else {
        reject("ERROR: Something went worng")
      }
    },1000)
})


promisesFour.then((user)=>{
    console.log(user)
    return user.userName
}).then((userName)=> {
    console.log(userName)
}).catch((error)=> {
   console.log(error);
}).finally(()=> {
    console.log("Peomisese is resolve or either  reject");
})



const promisesFive = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let error =false;
  
        if(!error){
          resolve({userName:"JavaScript", passoword: 124})
        }else {
          reject("ERROR: JS went worng")
        }
      },1000)
})


async function promisesFiveresolved(){
    try {
        const resolved =await promisesFive;

        console.log(resolved);
    } catch (error) {
          console.log(error);
    }
   

}

promisesFiveresolved()


// async function getAllUsers(){
//     try {
//         const resolve = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await resolve.json();
//     console.log(data);
//     } catch (error) {
//          console.log("E: something went worng");
//     }
    
// }
// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users').then((resolve)=> {
return resolve.json()
}).then((data)=>{
console.log(data);
}).catch((error)=>console.log(error))

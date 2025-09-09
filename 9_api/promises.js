// const promise1 = new Promise(function(resolve,reject){
//     // do asyn task
//     //db calls
//     setTimeout(function(){
//         console.log("async task completed");
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("promise consumed");

// })

// new Promise(function(resolve,reject){
//    setTimeout(function(){
//     console.log("promise 2");
//     resolve()
//    },1000)
// }).then(function(){
//     console.log("promise 2 resolved");

// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"karthik",age:18})
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);

// })

// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"karthik",age:18})
//         }else{
//             reject("ERROR : Something went wrong")
//         }
//     },1000)
// })

// promise4.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username);

// }).catch(function(error){
//     console.log(error);

// }).finally(() => {
//     console.log("the promise if either resolveed or rejected");

// })

// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "karthik", age: 18 });
//     } else {
//       reject("ERROR : Something went wrong");
//     }
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise();



// async function getData(){
//     try {
//         const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const response = await data.json()
//         console.log(response);
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }

// getData()



// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
    
// })
// .catch(function(error){
//     console.log(error);
    
// })
// function wait(ms){
//     return new Promise((resolve) => {
//      setTimeout(()=>{
//         console.log(`Promise resolve in ${ms} seconds`);
        
//      },ms)   
//     })
// }
// wait(2000)
// .then((message) =>{
//     console.log(message);
    
// })


// function takeNumber(number){
//    return new Promise((res,rej)=>{
//             if(number%2==0){
//                 res("Promise resolved")
//             }else{
//                 rej("Promise rejected")
//             }
//     })
// }


// takeNumber(11)
// .then((message) => {
//     console.log(message);
    
// })
// .catch((message) => {
//     console.log(message);
    
// })

// 3

// const url = fetch(`https://jsonplaceholder.typicode.com/users/1`)
// url
// .then((res) => res.json())
// .then((data) => {
//     console.log(data.name);
    
// })
// return fetch(`https://jsonplaceholder.typicode.com/users/1`)
// .then((res) => res.json())
// .then((data)=>{
//     console.log(data.username);
    
// })


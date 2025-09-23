// promises

// const promise = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("Task complete")
//     },2000)
// })

// promise
// .then(message => {
//     console.log(message);

// })
// .catch(error => {
//     console.log(error);

// })

// const url = fetch(`https://api.github.com/users/karthik-kmk`)
// url
// .then((res) => res.json())
// .then((res) => {
//     console.log(res.followers);

// })
// .catch((error) => {
//     console.log(error);

// })

// const url = fetch("https://randomuser.me/api/");

// url
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//     console.log(data.results[0].name);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// async function getFollowers() {
//   try {
//     const response = await fetch(`https://api.github.com/users/karthik-kmk`);
//     const data = await response.json();
//     console.log(data.followers);
//   } catch (error) {
//     console.log("User not found");
    
//   }
// }


// getFollowers()

// async function random(){
//     try {
//         const data = await fetch("https://randomuser.me/api/")
//         const response = await data.json()
//         console.log(response);
        
//     } catch (error) {   
//         console.log(error);
        
//     }
// }

// random()
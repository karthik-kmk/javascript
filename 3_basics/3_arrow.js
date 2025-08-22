//this keyword

// const user = {
//   username: "karthik",
//   price: 999,
//   welcomemessage: function () {
//     console.log(`${this.username},welcome to website`);
//   },


// };


// console.log(user.welcomemessage())
// user.username = "aman"
// console.log(user.welcomemessage())




// arrow functions
// const add2 = (a,b) => {
//     return a+b
// }

// const add2 = (a,b) =>  a+b

// const add2 = (a,b) => (a+b) // implicit - no return keyword
const add2 = (a,b) => ({username : "karthik"})


console.log(add2(3,2))
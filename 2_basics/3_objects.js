// obj literals


const mySym = Symbol("key1")
const user = {
    name:"karhtik",
    [mySym]:"kmk123",
    age:18,
    email:"karthik.mk.k",
    isloggedIn:false

}


// console.log(user[mySym]);
// console.log(user);

// console.log(typeof user[mySym]);


// user.email = "blaa@gmail.com"
// Object.freeze(user)


user.greeting = function(){
    console.log(`hello ${this.name}`);
    
}

console.log(user.greeting());

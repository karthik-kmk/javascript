const person = {
    name:"karthik",
    age:21,
    city:"blore"
}

// for(key in person){
//     console.log(`${key}: ${person[key]}`);
    
// }

// person.email = "kmk@kmk"

// console.log(person);

// delete person.city
// console.log(person);

if(person.hasOwnProperty("age")){
    console.log("yes");
    
}else console.log(no);


Object.keys(person).forEach((key) => {
    console.log(key,person[key]);
    
})


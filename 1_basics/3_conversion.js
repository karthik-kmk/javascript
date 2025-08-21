let score  = 33
console.log(typeof score); //number

let name = "karthik"
let numbername = Number(name) // cannot convert cause its not a number NaN
console.log(numbername)

let x = "123xsd"
console.log(Number(x));//Nan


let score1 = undefined
console.log(Number(score1)); //Nan

let score2 = null
console.log((Number(score2))); // 0 since null means nothing which is 0

let score3 = true
console.log((Number(score3)));  //1 since true means 1,if its false then 0


let loggedIn = 1
console.log(Boolean(loggedIn)) // true ; 0 -> false


let a = ""
console.log(Boolean(a)) // false cause nothing is insde the string

let b = "asdsa"
console.log(Boolean(b)) //gives true cause string contains some chars


let number = 123
console.log(String(number)); // converts to string



// ++++++++++++++++++++++++++++++++++++ Operations **************************************

console.log(2+2) //add
console.log(2-2) //sub
console.log(2*2) //mul
console.log(2**2) //pow
console.log(2/2) //div
console.log(2%2) //remainder


let str1 = "kmk"
let str2  = "krishna"

console.log(str+str2) // kmkkrishna



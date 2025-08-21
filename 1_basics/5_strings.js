let name = "karthik";
let age = 21;


const user = new String("karthik")
//String interpolation
console.log(`My name is ${name} and my age is ${age}`);

//moslty string methods substring splice etc

//2 main which we will use regularly

// - trim

let name1 = "  kmk  krishna  ";
console.log(name1);
console.log(name1.trim());

// - replace
let url = "https://karthik-krishna";
console.log(url);
console.log(url.replace("-", "@"));
console.log(url.includes("karthik"));//true

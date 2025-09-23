// const fruits = ["apple","banana","orange","grapes"]
// console.log(fruits[2]);
// console.log(fruits[4]);

// const numbers = [1,2,3,4,5,6]
// console.log(numbers.length);
// numbers[10] = 11
// console.log(numbers);

// const fruits = ["apple","banana","orange","grapes"]

// fruits.shift()
// console.log(fruits);

// const colors = ["red", "green", "blue"];
// colors.forEach((color) => {
//     console.log(color);

// })

// const nums = [5, 12, 8, 130, 44];
//  let g = nums.find((num) => num > 10)
//  console.log(g);

// const numbers = [1, 2, 3, 4, 5];
// let newN = []

// let newNumbers = numbers.map((number) => {
//   let n = (number ** 2);
//   newN.push(n)
// });

// console.log(numbers);
// console.log(newN);


// const array = [10,15,20,25,30]
// let filtered = array.filter((num) => num % 10 == 0)
// console.log(filtered);


// const pets = ["dog", "cat", "parrot"];
// console.log(pets.includes("cat"));
// console.log(pets.indexOf("parrot"));


const arr = [100, 200, 300, 400];
const[a,b,...rest] = arr
console.log(a);
console.log(b);
console.log(rest);

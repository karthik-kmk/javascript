// mostly data are divided into 2 catagories and this division is based up on how the data is stored and how we can access it 

// Primitive data type -  7 types - call by value
/*
- String
- Number
- Boolean
- null
- undefined
- Symbol(to make something unique)
- BigInt
*/

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId); // false   
//  work of symbol is to make it unique even if the value is same


//Reference type or Non-Primitve Data type - call by refernce

/*
- Array
- Objects
- Functions
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory
/*
1)Stack - primitive

gives a copy  so even if something changes in copy original is same
2)Heap - Non primitive ( reference )

gives a reference , obj1 and obj2  same , obj2 value changed , reflects in obj1 also 
*/
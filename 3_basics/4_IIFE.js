// Immediately invoked function expression (iife)


(function chai(){
    // named IIFE
    console.log("db connected");
    
})();

(() => {
    console.log("db connected 2");
    
})();


((name) => {
    console.log(`db connected 2 ${name}`);
    
})("karthik");
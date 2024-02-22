// Anonymous Function
const sumArray = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}([1, 2, 3, 4, 5]);

// IIFE
const totalSum = (function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 8, 7, 6, 5]);
console.log(totalSum);
console.log(sumArray);

// Arrow function
const sumOfArray = arr => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfArray([1, 2, 3, 4, 5]));

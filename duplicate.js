// Anonymous Function
const removeDuplicates = function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}([1, 2, 2, 3, 4, 4, 5]);

// IIFE
const uniqueArray = (function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
})([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);
console.log(removeDuplicates);
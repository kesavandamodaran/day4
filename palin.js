// Anonymous Function
const getPalindromes = function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
}(["level", "hello", "radar", "world", "deified"]);

// IIFE
const palindromes = (function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
})(["level", "hello", "radar", "world", "deified"]);
console.log(palindromes);
console.log(getPalindromes);

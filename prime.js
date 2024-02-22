// Anonymous Function
const getPrimeNumbers = function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// IIFE
const primeNumbers = (function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primeNumbers);
console.log(getPrimeNumbers);

// Arrow function

const getPrimeNumber = arr => {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

console.log(getPrimeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

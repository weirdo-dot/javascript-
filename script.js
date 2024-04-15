//A.  STRING MANIPULATION FUNCTIONS
// 1. REVERSE A STRING 
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 

// 2. COUNT CHARACTERS
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello")); 

//3. CAPITALIZE WORDS
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
console.log(capitalizeWords("hello world")); 

//B. ARRAY FUNCTIONS
//1. FIND MAXIMUM AND MINIMUM
function findMax(arr) {
    return Math.max(...arr);
}
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMax([1, 2, 3])); 
console.log(findMin([1, 2, 3])); 

//2. SUM OF ARRAY
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(sumArray([1, 2, 3])); 

//3. FILTER ARRAY
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); 

//C. MATHEMATICAL FUNCTIONS
//1. FACTORIAL
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(5)); 

//2. PRIME NUMBER CHECK
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11)); 
console.log(isPrime(12));

//3. FIBONACCI SEQUENCE
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
console.log(fibonacci(7));
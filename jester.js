// Задание 1

// function getNthFibonacciNumber(n) {
//   return(Math.sqrt(5 * n * n + 4) % 1 === 0 || Math.sqrt(5 * n * n - 4) % 1 === 0)
// }

// module.exports = getNthFibonacciNumber


// Задание 2

// function capitalizeFirstLetter(str) {
//     if (!str) return str
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

// module.exports = capitalizeFirstLetter


// Задание 3

// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }

// module.exports = shuffleArray


// Задание 4

// function calculateBMI(weight, height) {
//     if (typeof weight !== "number" || typeof height !== "number" || weight <= 0 || height <= 0) {
//         throw new Error("Invalid input. Weight and height must be positive numbers.")
//     }
//     const BMI = weight / Math.pow(height, 2)
//     return parseFloat(BMI.toFixed(2))
// }

// module.exports = calculateBMI


// Задание 6

// function getPrimeNumbers(start, end) {
//     const primes = []
//     for (let number = start; number <= end; number++) {
//         if (isPrime(number)) {
//             primes.push(number)
//         }
//     }
//     return primes
// }

// function isPrime(number) {
//     if (number <= 1) {
//         return false
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// module.exports = getPrimeNumbers


// Задание 7

// function sortArray(arr) {
//     return arr.slice().sort((a, b) => a - b)
// }

// module.exports = sortArray


// Задание 8

// function getAverage(arr) {
//     if (arr.length === 0) {
//         throw new Error("Array is empty")
//     }
//     const sum = arr.reduce((acc, num) => acc + num, 0)
//     return sum / arr.length
// }

// module.exports = getAverage


// Задание 10

// function calculateFactorial(n) {
//     if (n < 0) {
//         throw new Error("Factorial is not defined for negative numbers")
//     }
//     if (n === 0 || n === 1) {
//         return 1
//     }
//     let result = 1
//     for (let i = 2; i <= n; i++) {
//         result *= i
//     }
//     return result
// }

// module.exports = calculateFactorial


// Задание 11

// function calculateDiscount(price, discountPercentage) {
//     if (typeof price !== "number" || typeof discountPercentage !== "number" || price <= 0 || discountPercentage < 0 || discountPercentage > 100) {
//         throw new Error("Invalid input. Price must be a positive number and discount percentage must be a number between 0 and 100.")
//     }
//     const discountAmount = (price * discountPercentage) / 100
//     return price - discountAmount
// }

// module.exports = calculateDiscount


// Задание 12

// function findCommonElements(arr1, arr2) {
//     const commonElements = []
//     const set1 = new Set(arr1)
//     const set2 = new Set(arr2)
//     set1.forEach(element => {
//         if (set2.has(element)) {
//             commonElements.push(element)
//         }
//     })
//     return commonElements
// }

// module.exports = findCommonElements


// Задание 13

// function calculateDistance(x1, y1, x2, y2) {
//     const dx = x2 - x1
//     const dy = y2 - y1
//     return Math.sqrt(dx ** 2 + dy ** 2)
// }

// module.exports = calculateDistance


// Задание 14

// function convertToBinary(number) {
//     if (number < 0 || !Number.isInteger(number)) {
//         throw new Error("Input must be a non-negative integer")
//     }
//     return number.toString(2)
// }

// module.exports = convertToBinary


// Задание 15

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

module.exports = validateEmail
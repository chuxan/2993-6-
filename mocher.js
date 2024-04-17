// Задание 1

// function addNumbers (x, y) {
//     return x + y
// }

// module.exports = { addNumbers }


// Задание 2

// function getUser(userId) {
//     const users = {
//         "1": { id: "1", name: "Matt" },
//         "2": { id: "2", name: "Brian" },
//         "3": { id: "3", name: "Zacky" }
//     }
//     return users [userId]
// }
  
// module.exports = getUser


// Задание 3

// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index)
// }

// module.exports = removeDuplicates


// Задание 4

// function capitalizeWords(str) {
//     return str.toUpperCase()
// }

// module.exports = capitalizeWords


// Задание 5

// function findMax(arr) {
//     if (arr.length === 0) {
//         throw new Error("Array is empty")
//     }
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// module.exports = findMax


// Задание 6

// function reverseString(str) {
//     return str.split("").reverse().join("")
// }

// module.exports = reverseString


// Задание 7

// function filterNumbers(arr) {
//     return arr.filter(item => typeof item === "number")
// }

// module.exports = filterNumbers


// Задание 8

// function calculateArea(width, height) {
//     if (typeof width !== "number" || typeof height !== "number" || width <= 0 || height <= 0) {
//         throw new Error("Invalid input. Width and height must be positive numbers.")
//     }
//     return width * height
// }

// module.exports = calculateArea


// Задание 9

// function convertToRoman(num) {
//     const romanNumerals = [
//         { value: 10, numeral: "X" },
//         { value: 9, numeral: "IX" },
//         { value: 8, numeral: "VIII" },
//         { value: 7, numeral: "VII" },
//         { value: 6, numeral: "VI" },
//         { value: 5, numeral: "V" },
//         { value: 4, numeral: "IV" },
//         { value: 3, numeral: "III" },
//         { value: 2, numeral: "II" },
//         { value: 1, numeral: "I" }
//     ]
//     let result = ""
//     for (let i = 0; i < romanNumerals.length; i++) {
//         while (num >= romanNumerals[i].value) {
//             result += romanNumerals[i].numeral
//             num -= romanNumerals[i].value
//         }
//     }
//     return result
// }

// module.exports = convertToRoman


// Задание 10

// function generateRandomNumber(min, max) {
//     if (min >= max) {
//         throw new Error("Min value must be less than max value")
//     }
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// module.exports = generateRandomNumber


// Задание 11

// function sortByLength(arr) {
//     return arr.slice().sort((a, b) => a.length - b.length)
// }

// module.exports = sortByLength


// Задание 12

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

// module.exports = isPrime


// Задание 13

// function sumArray(arr) {
//     return arr.reduce((sum, current) => sum + current, 0)
// }

// module.exports = sumArray


// Задание 14

// function isPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[\W_]/g, '')
//     const reversedStr = cleanStr.split('').reverse().join('')
//     return cleanStr === reversedStr
// }

// module.exports = isPalindrome


// Задание 15

// function removeFalsyValues(arr) {
//     return arr.filter(Boolean)
// }

// module.exports = removeFalsyValues
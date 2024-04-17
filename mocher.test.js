// Задание 1

const assert = require('assert')
const oper = require('./mocher')

it("Правильно складывает два числа", () => {
    assert.equal(oper.addNumbers(7, 13), 20)
})


// Задание 2

// const assert = require("assert")
// const getUser = require("./mocher")

// describe("getUser", function() {
//     it("Правильно возвращает пользователя по его ID", function() {
//         const user = getUser("1")
//         assert.deepStrictEqual(user, { id: "1", name: "Matt" });
//     })
// })


// Задание 3

// const assert = require('assert')
// const removeDuplicates = require("./mocher")

// describe("removeDuplicates", function() {
//     it("should remove duplicates from array", function() {
//         const inputArray = [1, 3, 3, 7, 13, 15, 15, 27]
//         const expectedOutput = [1, 3, 7, 13, 15, 27]
//         assert.deepStrictEqual(removeDuplicates(inputArray), expectedOutput)
//     })
// })


// Задание 4

// const assert = require("assert")
// const capitalizeWords = require("./mocher")

// describe("capitalizeWords", function() {
//     it("should capitalize all words correctly", function() {
//         const inputString = "hello world"
//         const expectedOutput = "HELLO WORLD"
//         assert.strictEqual(capitalizeWords(inputString), expectedOutput)
//     })
// })


// Задание 5

// const assert = require("assert")
// const findMax = require("./mocher")

// describe("findMax", function() {
//     it("should find maximum number correctly", function() {
//         const inputArray = [1, 3, 7, 13, 27]
//         const expectedMax = 27
//         assert.strictEqual(findMax(inputArray), expectedMax)
//     })
// })


// Задание 6

// const assert = require("assert")
// const reverseString = require("./mocher")

// describe("reverseString", function() {
//     it("should reverse string correctly", function() {
//         const inputString = "hello world"
//         const expectedOutput = "dlrow olleh"
//         assert.strictEqual(reverseString(inputString), expectedOutput)
//     })
// })


// Задание 7

// const assert = require("assert")
// const filterNumbers = require("./mocher")

// describe("filterNumbers", function() {
//     it("should filter numbers correctly", function() {
//         const inputArray = [3, "m", 7, "b", 13, "z"]
//         const expectedOutput = [3, 7, 13]
//         assert.deepStrictEqual(filterNumbers(inputArray), expectedOutput)
//     })
// })


// Задание 8

// const assert = require("assert")
// const calculateArea = require("./mocher")

// describe("calculateArea", function() {
//     it("should calculate area correctly", function() {
//         const width = 7
//         const height = 13
//         const expectedArea = 91
//         assert.strictEqual(calculateArea(width, height), expectedArea)
//     })
// })


// Задание 9

// const assert = require("assert")
// const convertToRoman = require("./mocher")

// describe("convertToRoman", function() {
//     it("should convert number to Roman numerals correctly", function() {
//         assert.strictEqual(convertToRoman(1), "I")
//         assert.strictEqual(convertToRoman(2), "II")
//         assert.strictEqual(convertToRoman(3), "III")
//         assert.strictEqual(convertToRoman(4), "IV")
//         assert.strictEqual(convertToRoman(5), "V")
//         assert.strictEqual(convertToRoman(6), "VI")
//         assert.strictEqual(convertToRoman(7), "VII")
//         assert.strictEqual(convertToRoman(8), "VIII")
//         assert.strictEqual(convertToRoman(9), "IX")
//         assert.strictEqual(convertToRoman(10), "X")
//     })
// })


// Задание 10

// const assert = require("assert")
// const generateRandomNumber = require("./mocher")

// describe("generateRandomNumber", function() {
//     it("should generate random number within the specified range", function() {
//         const min = 7
//         const max = 13
//         const randomNumber = generateRandomNumber(min, max)
//         assert.ok(randomNumber >= min && randomNumber <= max)
//     })
// })


// Задание 11

// const assert = require("assert")
// const sortByLength = require("./mocher")

// describe("sortByLength", function() {
//     it("should sort strings by their length", function() {
//         const inputArray = ["pen", "pin", "pancake", "cookie", "pig"]
//         const expectedArray = ["pig", "pen", "pancake", "pin", "cookie"]
//         assert.deepStrictEqual(sortByLength(inputArray), expectedArray)
//     })
// })


// Задание 12

// const assert = require("assert")
// const isPrime = require("./mocher")

// describe("isPrime", function() {
//     it("should return true for prime numbers", function() {
//         assert.strictEqual(isPrime(2), true)
//         assert.strictEqual(isPrime(5), true)
//         assert.strictEqual(isPrime(7), true)
//         assert.strictEqual(isPrime(13), true)
//     })
// })


// Задание 13

// const assert = require("assert")
// const sumArray = require("./mocher")

// describe("sumArray", function() {
//     it("should sum elements of the array", function() {
//         const inputArray = [3, 5, 7, 11, 13]
//         const expectedSum = 39
//         assert.strictEqual(sumArray(inputArray), expectedSum)
//     })
// })


// Задание 14

// const assert = require("assert")
// const isPalindrome = require("./mocher")

// describe("isPalindrome", function() {
//     it("should return true for palindrome strings", function() {
//         assert.strictEqual(isPalindrome("level"), true)
//         assert.strictEqual(isPalindrome("radar"), true)
//         assert.strictEqual(isPalindrome("racecar"), true)
//         assert.strictEqual(isPalindrome("A man a plan a canal Panama"), true)
//     })
//     it("should return false for non-palindrome strings", function() {
//         assert.strictEqual(isPalindrome("hello"), false)
//         assert.strictEqual(isPalindrome("world"), false)
//     })
// })


// Задание 15

// const assert = require("assert")
// const removeFalsyValues = require("./mocher")

// describe("removeFalsyValues", function() {
//     it("should remove falsy values from the array", function() {
//         const inputArray = [0, false, "", null, undefined, NaN, 1, true, "hello"]
//         const expectedArray = [1, true, "hello"]
//         assert.deepStrictEqual(removeFalsyValues(inputArray), expectedArray)
//     })
// })
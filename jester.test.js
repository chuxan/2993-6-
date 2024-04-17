// Задание 1

// const getNthFibonacciNumber = require("./jester")

// test("Правильно находит n-ое число Фибоначчи", () => {
//     expect(getNthFibonacciNumber(13)).toBe(true)
// })


// Задание 2

// const capitalizeFirstLetter = require("./jester")

// test("Правильно преобразует первую букву строки в верхний регистр", () => {
//     expect(capitalizeFirstLetter("hello")).toBe("Hello")
// })


// Задание 3

// const shuffleArray = require("./jester");

// describe("shuffleArray", () => {
//     it("should shuffle array correctly", () => {
//         const inputArray = [1, 3, 7, 13, 15]
//         const shuffledArray = shuffleArray(inputArray)
//         expect(shuffledArray).toHaveLength(inputArray.length)
//         expect(shuffledArray.sort()).toEqual(inputArray.sort())
//     })
// })


// Задание 4

// const calculateBMI = require("./jester");

// describe("calculateBMI", () => {
//     it("should calculate BMI correctly", () => {
//         const weight = 70
//         const height = 1.75
//         const expectedBMI = 22.86
//         expect(calculateBMI(weight, height)).toBe(expectedBMI)
//     })
// })


// Задание 6

// const getPrimeNumbers = require("./jester");

// describe("getPrimeNumbers", () => {
//     it("should find prime numbers correctly in the range", () => {
//         const start = 1
//         const end = 20
//         const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19]
//         expect(getPrimeNumbers(start, end)).toEqual(expectedPrimes)
//     })
// })


// Задание 7

// const sortArray = require("./jester")

// describe("sortArray", () => {
//     it("should sort array in ascending order", () => {
//         const inputArray = [3, 7, 13, 5, 7, 15, 27, 27, 33, 17, 33]
//         const expectedOutput = [3, 5, 7, 7, 13, 15, 17, 27, 27, 33, 33]
//         expect(sortArray(inputArray)).toEqual(expectedOutput)
//     })
// })


// Задание 8

// const getAverage = require("./jester")

// describe("getAverage", () => {
//     it("should calculate average correctly", () => {
//         const inputArray = [3, 7, 13, 17, 25]
//         const expectedAverage = 13
//         expect(getAverage(inputArray)).toBe(expectedAverage)
//     })
// })


// Задание 10

// const calculateFactorial = require("./jester")

// describe("calculateFactorial", () => {
//     it("should calculate factorial correctly for positive integers", () => {
//         expect(calculateFactorial(0)).toBe(1)
//         expect(calculateFactorial(3)).toBe(6)
//         expect(calculateFactorial(5)).toBe(120)
//         expect(calculateFactorial(10)).toBe(3628800)
//     })
// })


// Задание 11

// const calculateDiscount = require("./jester")

// describe("calculateDiscount", () => {
//     it("should calculate discount correctly", () => {
//         expect(calculateDiscount(100, 10)).toBe(90)
//         expect(calculateDiscount(50, 25)).toBe(37.5)
//         expect(calculateDiscount(200, 15)).toBe(170)
//     })
// })


// Задание 12

// const findCommonElements = require("./jester")

// describe("findCommonElements", () => {
//     it("should find common elements in two arrays", () => {
//         const arr1 = [3, 5, 7, 11, 13]
//         const arr2 = [2, 6, 7, 8, 13]
//         const expectedCommonElements = [7, 13]
//         expect(findCommonElements(arr1, arr2)).toEqual(expectedCommonElements)
//     })
// })


// Задание 13

// const calculateDistance = require("./jester")

// describe("calculateDistance", () => {
//     it("should calculate distance between two points correctly", () => {
//         expect(calculateDistance(0, 0, 3, 4)).toBe(5)
//     })
// })


// Задание 14

// const convertToBinary = require("./jester")

// describe("convertToBinary", () => {
//     it("should convert positive integers to binary", () => {
//         expect(convertToBinary(0)).toBe("0")
//         expect(convertToBinary(1)).toBe("1")
//         expect(convertToBinary(2)).toBe("10")
//         expect(convertToBinary(4)).toBe("100")
//         expect(convertToBinary(10)).toBe("1010")
//         expect(convertToBinary(20)).toBe("10100")
//     })
// })


// Задание 15

const validateEmail = require("./jester")

describe("validateEmail", () => {
    it("should return true for valid email addresses", () => {
        expect(validateEmail("example@example.com")).toBe(true)
        expect(validateEmail("test.test@example.com")).toBe(true)
        expect(validateEmail("user123@example.com")).toBe(true)
    })
    it("should return false for invalid email addresses", () => {
        expect(validateEmail("example@example")).toBe(false)
        expect(validateEmail("example@")).toBe(false)
    })
})
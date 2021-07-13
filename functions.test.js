const { test, expect } = require("@jest/globals");
const { returnTwo, greeting, add, multiply, subtract, divide } = require('./functions')



test('return 2 will return 2', () => {
    expect(returnTwo()).toBe(2)
})

describe('People were greeted!', () => {
    test('will return "Hello "name"', () => {
        expect(greeting('James')).toBe("Hello, James.")
    }),
    
    test('will return "Hello "name"', () => {
        expect(greeting('Jill')).toBe("Hello, Jill.")
    })
})


describe('Numbers were added!', () => {
    test('should add 1 and 2 together to equal 3', () => {
        expect(add(1, 2)).toBe(3)
    }),
    
    test('should add 5 and 9 together to equal 14', () => {
        expect(add(5, 9)).toBe(14)
    })
})

test('should multiply 9 and 3 together to equal 27', () => {
    expect(multiply(9, 3)).toBe(27)
})

test('should divide 9 and 3 together to equal 3', () => {
    expect(divide(9, 3)).toBe(3)
})

describe('Numbers were subtracted!!', () => {
    test('should subtract 9 and 3 together to equal 6', () => {
        expect(subtract(9, 3)).toBe(6)
    }),

    test('should subtract 5 and 3 together to equal 2', () => {
        expect(subtract(5, 3)).toBe(2)
    })
})

test('it is a number!!', () => {
    expect(typeof add(1, 2)).toBe("number")
})

test('i guess that works! wow!', () => {
    expect(add(1, 2, 3)).toBe(3)
})

test('i guess that works! wow!', () => {
    expect(add(1, 2, 3)).toBe(3)
})
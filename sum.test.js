// const TestRunner = require("jest-runner");
let sum = require('./sum.js')

describe('sum module tests', () => {
    // simple adding
    test('Adding 1 and 2 gives 3', () => {
        expect(sum(1, 2)).toBe(3);

    });

    test('Adding -1 and 2 gives 1', () => {
        expect(sum(-1, 2)).toBe(1);

    });

    test('1.5 and 2 give 3.5', () => {
        expect(sum(1.5, 2)).toBe(3.5);
    });

    test(`'1' and 2 gives 3`, () => {
        expect(sum('1', 2)).toBe(3);
    });

    test('1', () => {
        expect(sum(1)).toBe(1);
    });

    test(`'a' and 1 gives Nan`, () => {
        expect(sum('a', 1)).toBe(NaN);
    }) 
})

let fizzbuzz = require('./fizzbuzz.js');

describe('fizzbuzz test results', () => {
    test('try 15', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });

    test('try 12', () => {
        expect(fizzbuzz(12)).toBe('fizz');
    });

    test('try 10', () => {
        expect(fizzbuzz(10)).toBe('buzz');
    });

    test('try 7', () => {
        expect(fizzbuzz(7)).toBe(7);
    });






})


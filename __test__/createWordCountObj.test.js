const countObj = require('../pre_build/createWordCountObj');

const filterArray = ['none'];

describe('testing stopWords.js file', () => {
  test('Only alpha chars will be accepted', () => {
    const helloWithSymbols = [32, 49, 56, 35, 104, 101, 108, 108, 111, 46]; // [(space), 1, 8, #, h, e, l, l, o, .]
    const test = Object.keys(countObj(helloWithSymbols, filterArray).Words);
    expect(test.length).toBe(1);
    expect(test[0]).toBe('hello');
  });
  test('Uppercase alpha chars will be changed to lowercase', () => {
    const helloUpperCase = [72, 69, 76, 76, 79]; // [H, E, L, L, O];
    const test = Object.keys(countObj(helloUpperCase, filterArray).Words);
    expect(test.length).toBe(1);
    expect(test[0]).toBe('hello');
    expect(test[0]).not.toBe('HELLO');
  });
});

const countObj = require('../pre_build/createWordCountObj');

const filterArray = ['none', 'no', 'zero'];

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
  test('hello and HELLO separated by a space will count "hello" twice', () => {
    const twoHellos = [104, 101, 108, 108, 111, 32, 72, 69, 76, 76, 79]; // [h,e,l,l,o,(space),H,E,L,L,O]
    const testObj = countObj(twoHellos, filterArray);
    const testLength = Object.keys(testObj.Words).length;
    expect(testLength).toBe(1);
    expect(testObj.Words.hello.count).toBe(2);
  });
  test('words in filterArray will not be counted', () => {
    const includeFilteredWords = [
      110,
      111,
      32,
      104,
      101,
      108,
      108,
      111,
      32,
      110,
      111,
      110,
      101,
    ]; // [n,o,(space),h,e,l,l,o,(space),n,o,n,e]
    const test = Object.keys(countObj(includeFilteredWords, filterArray).Words);
    expect(test.length).toBe(1);
    expect(test[0]).toBe('hello');
  });
  test('compound words leading to "ll" as a word won\'t be counted', () => {
    const compoundWords = [
      73,
      39,
      108,
      108,
      32,
      116,
      104,
      105,
      115,
      39,
      108,
      108,
    ]; // [i,',l,l,(space),t,h,i,s,',l,l]
    const test = Object.keys(countObj(compoundWords, filterArray).Words);
    expect(test.length).toBe(2);
    expect(test.includes('i')).toBe(true);
    expect(test.includes('this')).toBe(true);
    expect(test.includes('ll')).toBe(false);
  });
});

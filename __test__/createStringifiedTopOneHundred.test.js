const topOneHundred = require('../pre_build/createStringifiedTopOneHundred');
const mock = require('./mocks');

const { wordCountObj } = mock;
describe('testing mock wordCountObj', () => {
  test('Object contains more than 100 words', () => {
    expect(Object.keys(wordCountObj.Words).length > 100).toBe(true);
  });
  test('Object contains 101 words', () => {
    expect(Object.keys(wordCountObj.Words).length).toBe(101);
  });
  test('Object words contain word "topWord"', () => {
    expect(Object.keys(wordCountObj.Words).includes('topWord')).toBe(true);
  });
  test('Object words contain word "bottomWord"', () => {
    expect(Object.keys(wordCountObj.Words).includes('bottomWord')).toBe(true);
  });
});

describe('testing createStringifiedTopOneHundred.js file', () => {
  const wordsArray = JSON.parse(topOneHundred(wordCountObj)).Words;
  test('will return type string', () => {
    expect(typeof topOneHundred(wordCountObj)).toBe('string');
  });
  test('TopOneHundredWords.Words array is sorted by count highest to lowest', () => {
    expect(wordsArray[0].word).toBe('topWord');
    expect(wordsArray[50].count).toBeGreaterThanOrEqual(wordsArray[51].count);
    expect(wordsArray[2].count).toBeGreaterThan(wordsArray[98].count);
  });
  test('Will contain 100 words in array', () => {
    expect(wordsArray.length).toBe(100);
    expect(wordsArray.includes('bottomWord')).toBe(false);
  });
});

const stopWords = require('../pre_build/stopWords');

describe('testing stopWords.js file', () => {
  test('stopWords.js should return an Array', () => stopWords()
    .then(arr => {
      expect(arr).toBeInstanceOf(Array);
    })
  )
  test('first index [0] should be "a"', () => stopWords()
    .then(arr => {
      expect(arr[0]).toBe('a');
    })
  )
  test('no index should contain "#"', () => stopWords()
    .then(arr => {
      arr.map(ele => expect(ele).toMatch(/^((?!#).)*$/g));
    })
  )
  test('all characters should be lowercase', () => stopWords()
    .then(arr => {
      arr.map(ele => expect(ele).toEqual(ele.toLowerCase()));
    })
  )
})
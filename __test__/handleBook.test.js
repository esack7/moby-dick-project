const fs = require('fs');
const handleBook = require('../pre_build/handleBook');

const readPath = `${__dirname}/txt_file/ipsom.txt`;
const writePath = `${__dirname}/txt_file`;
const filterArray = ['no', 'none', 'nothing'];

describe('Testing handleBook.js file', () => {
  describe("Testing that topWords.json won't exist if handleBook() not called (no setup)", () => {
    test("file topWords.json won't exist if not called", () => {
      fs.stat(`${writePath}/topWords.json`, err => {
        expect(err).toBeTruthy();
      });
    });
  });
  describe('Testing that topWords.json will exist if handleBook called in setup', () => {
    beforeAll(() => handleBook(readPath, writePath, filterArray)); // beforeAll calls handlebook() to create topWords.json file
    // afterAll removes topWords.json to clean up file after test is run.
    afterAll(() => {
      fs.unlink(`${writePath}/topWords.json`, err => {
        if (err) throw err;
      });
    });
    test('calling handleBook() will write a file', () =>
      fs.stat(`${writePath}/topWords.json`, err => {
        expect(err).toBeNull(); // if there is no error thrown, then we know that file at provided path exists
      }));
  });
});

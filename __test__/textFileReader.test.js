const fileReader = require('../pre_build/textFileReader')

const noFilePath = `${__dirname}/empty/fileDoesNotExist.txt`;

describe('testing textFileReader', () => {
  describe('textFileReader should read a file', () => {
    test('Path with no file should return an error', () =>
      fileReader(noFilePath)
        .catch(err => {
          expect(err).toThrow(Error);
        })
    );
  });
});

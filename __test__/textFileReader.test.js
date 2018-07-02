const fileReader = require('../pre_build/textFileReader');

const noFilePath = `${__dirname}/txt_file/fileDoesNotExist.txt`;
const hasTxtFilePath = `${__dirname}/txt_file/ipsom.txt`;

describe('testing textFileReader', () => {
  describe('textFileReader should read a file', () => {
    test('Path with no file should return error ENOENT(No such file or directory)', () =>
      fileReader(noFilePath).catch(err => {
        expect(err.code).toBe('ENOENT');
      }));
    test('Path with file should return a buffer', () =>
      fileReader(hasTxtFilePath).then(buff => {
        expect(buff).toBeInstanceOf(Buffer);
      }));
  });
});

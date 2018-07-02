const textFileReader = require('./textFileReader');

const path = `${__dirname}/../vendor/stop-words.txt`;

module.exports = () =>
  textFileReader(path)
    .then(buff => buff.toString('utf-8'))
    .then(text =>
      text
        .split('\n\n')
        .filter(string => !string.includes('#'))
        .map(idx => idx.toLowerCase())
    );

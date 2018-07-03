const fs = require('fs');
const textFileReader = require('./textFileReader');
const createWordCountObj = require('./createWordCountObj');
const topOneHundred = require('./createStringifiedTopOneHundred');

module.exports = (readPath, writePath, filterArray) =>
  textFileReader(readPath)
    .then(buff => createWordCountObj(buff, filterArray))
    .then(wordCountObj => topOneHundred(wordCountObj))
    .then(finalStringifiedObject => {
      const savePath = `${writePath}/topWords.json`;
      fs.writeFile(savePath, finalStringifiedObject, err => {
        if (err) throw err;
        console.log(`JSON file created for build`);
      });
    });

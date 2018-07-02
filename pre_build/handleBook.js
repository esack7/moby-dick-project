const fs = require('fs');
const textFileReader = require('./textFileReader');
const createWordCountObj = require('./createWordCountObj')
const topOneHundred = require('./createStringifiedTopOneHundred')

module.exports = (path, filterArray) => textFileReader(path)
  .then(buff => createWordCountObj(buff, filterArray))
  .then(wordCountObj => topOneHundred(wordCountObj))
  .then(finalStringifiedObject => {
    const savePath = `${__dirname}/../public/js/topWords.json`;
    fs.writeFile(savePath, finalStringifiedObject, (err) => {
      if (err) throw err;
      console.log(`JSON file created for build`);
    })
  });

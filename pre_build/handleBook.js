const fs = require('fs');
const textFileReader = require('./textFileReader');

function useful(buffer) {
  if (buffer > 64 && buffer < 123 && !(buffer > 90 && buffer < 97)) {
    return true;
  }
  return false;
}

module.exports = (filterArray, book) => textFileReader(book)
  .then(buff => {
    const WordCountObj = {
      WordCount: 0,
      Words: {}
    };
    let hold = [];
    buff.map(ele => {
      let char = ele;
      if (useful(char)) {
        if (char < 97) {
          char += 32;
        }
        hold.push(char);
      }
      if (hold.length > 0 && !useful(char)) {
        const word = Buffer.from(hold).toString();
        // the check below "word !== 'll'" is somewhat of a hack, but since it is not a word I removed it from the list of words
        if (!filterArray.includes(word) && word !== 'll') {
          if (!(word in WordCountObj.Words)) {
            WordCountObj.WordCount += 1;
            WordCountObj.Words[word] = {
              count: 1,
            }
          } else {
            WordCountObj.Words[word].count += 1;
          }
        }
        hold = [];
      }
      return ele;
    });
    return WordCountObj;
  })
  .then(wordCountObj => {
    const TopOneHundredWords = {
      Words: []
    };
    Object.keys(wordCountObj.Words).sort((x, y) => wordCountObj.Words[y].count - wordCountObj.Words[x].count).slice(0, 100)
      .map(ele => {
        TopOneHundredWords.Words.push({
          word: ele,
          count: wordCountObj.Words[ele].count,
        })
        return ele;
      })
    return JSON.stringify(TopOneHundredWords);
  })
  .then(finalStringifiedObject => {
    const savePath = `${__dirname}/../public/js/data/topWords.json`;
    fs.writeFile(savePath, finalStringifiedObject, (err) => {
      if (err) throw err;
      console.log(`JSON file created for build`);
    })
  });

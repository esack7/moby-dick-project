const textFileReader = require('./textFileReader');

const path = `${__dirname}/../vendor/mobydick.txt`;

function useful(buffer) {
  if (buffer > 64 && buffer < 123 && !(buffer > 90 && buffer < 97)) {
    return true;
  }
  return false;
}

module.exports = filterArray => textFileReader(path)
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
    const TopOneHundredWords = {};
    Object.keys(wordCountObj.Words).sort((x, y) => wordCountObj.Words[y].count - wordCountObj.Words[x].count).slice(0, 100)
      .map(ele => {
        TopOneHundredWords[ele] = {
          count: wordCountObj.Words[ele].count
        }
        return ele;
      })
    return TopOneHundredWords;
  })
  .then(finalObject => console.log(finalObject));

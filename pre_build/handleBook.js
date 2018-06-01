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
    buff.map(idx => {
      let char = idx;
      if (useful(char)) {
        if (char < 97) {
          char += 32;
        }
        hold.push(char);
      }
      if (hold.length > 0 && !useful(char)) {
        const word = Buffer.from(hold).toString();
        if (!filterArray.includes(word)) {
          if (!(`${word}` in WordCountObj.Words)) {
            WordCountObj.WordCount += 1;
            WordCountObj.Words[`${word}`] = {
              count: 1,
            }
          } else {
            WordCountObj.Words[`${word}`].count += 1;
          }
        }
        hold = [];
      }
      return idx;
    });
    return WordCountObj;
  }).then(fox => console.log(fox));

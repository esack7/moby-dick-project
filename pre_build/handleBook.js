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
        console.log(word);
        hold = [];
      }
      return idx;
    });
    return filterArray.length;
  })

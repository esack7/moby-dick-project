const useful = require('./usefulChar');

module.exports = (buffer, filterArray) => {
  const WordCountObj = {
    WordCount: 0,
    Words: {},
  };
  const { Words } = WordCountObj;
  let hold = [];
  buffer.map((ele, idx) => {
    let char = ele;
    if (useful(char)) {
      if (char < 97) {
        char += 32;
      }
      hold.push(char);
    }
    if (
      (hold.length > 0 && !useful(char)) ||
      (hold.length > 0 && buffer[idx + 1] === undefined)
    ) {
      const word = Buffer.from(hold).toString();
      // the check below "word !== 'll'" is somewhat of a hack, but since it is not a word I removed it from the list of words
      if (!filterArray.includes(word) && word !== 'll') {
        if (!(word in Words)) {
          WordCountObj.WordCount += 1;
          Words[word] = {
            count: 1,
          };
        } else {
          Words[word].count += 1;
        }
      }
      hold = [];
    }
    return ele;
  });
  return WordCountObj;
};

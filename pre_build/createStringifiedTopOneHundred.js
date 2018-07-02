module.exports = wordCountObj => {
  const TopOneHundredWords = {
    Words: [],
  };
  Object.keys(wordCountObj.Words)
    .sort((x, y) => wordCountObj.Words[y].count - wordCountObj.Words[x].count)
    .slice(0, 100)
    .map(ele => {
      TopOneHundredWords.Words.push({
        word: ele,
        count: wordCountObj.Words[ele].count,
      });
      return ele;
    });
  return JSON.stringify(TopOneHundredWords);
};

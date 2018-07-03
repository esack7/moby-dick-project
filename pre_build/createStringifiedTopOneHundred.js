module.exports = wordCountObj => {
  const TopOneHundredWords = {
    Words: [],
  };
  const { Words } = wordCountObj;
  Object.keys(Words)
    .sort((x, y) => Words[y].count - Words[x].count)
    .slice(0, 100)
    .map(ele => {
      TopOneHundredWords.Words.push({
        word: ele,
        count: Words[ele].count,
      });
      return ele;
    });
  return JSON.stringify(TopOneHundredWords);
};

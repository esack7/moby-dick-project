const StopWords = require('./pre_build/stopWords');
const HandleBook = require('./pre_build/handleBook');

const stopWords = new Promise((resolve, reject) => {
  StopWords()
    .then(words => resolve(words))
    .catch(err => reject(console.error(err)))
});

stopWords.then(stopWordsArray => HandleBook(stopWordsArray));
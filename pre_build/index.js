const StopWords = require('./stopWords');
const HandleBook = require('./handleBook');

const book = `${__dirname}/../vendor/mobydick.txt`;

const stopWords = new Promise((resolve, reject) => {
  StopWords()
    .then(words => resolve(words))
    .catch(err => reject(console.error(err)))
});

stopWords.then(stopWordsArray => HandleBook(stopWordsArray, book));

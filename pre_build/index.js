const StopWords = require('./stopWords');
const HandleBook = require('./handleBook');

const bookPath = `${__dirname}/../vendor/mobydick.txt`;
const writePath = `${__dirname}/../public/js`;

const stopWords = new Promise((resolve, reject) => {
  StopWords()
    .then(words => resolve(words))
    .catch(err => reject(console.error(err)));
});

stopWords.then(stopWordsArray =>
  HandleBook(bookPath, writePath, stopWordsArray)
);

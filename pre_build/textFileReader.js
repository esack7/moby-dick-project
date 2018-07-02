const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });

module.exports = path =>
  new Promise((resolve, reject) =>
    fs
      .readFileProm(path)
      .then(buff => resolve(buff))
      .catch(err => reject(err))
  );

const faker = require('faker');

const mock = module.exports;

mock.wordCountObj = {
  WordCount: 0,
  Words: {},
};

const { wordCountObj } = mock;
const { Words } = wordCountObj;
const topWord = 'topWord';
const bottomWord = 'bottomWord';

Words[topWord] = {
  count: 1000,
};

Words[bottomWord] = {
  count: 1,
};

while (Object.keys(wordCountObj.Words).length < 101) {
  const ipsomWord = faker.lorem.word();
  if (!Words[ipsomWord]) {
    wordCountObj.WordCount += 1;
    Words[ipsomWord] = {
      count: faker.random.number(2, 999),
    };
  }
}

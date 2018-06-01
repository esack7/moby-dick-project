import React from 'react';
import { Title } from '../style/styles';
import TopWords from '../data/topWords.json'

const App = () => {
  console.log('Top 100 words and counts: ', TopWords);
  return (
  <div>
    <Title>Hello Moby Dick!</Title>
  </div>
)};

export default App;

import React from 'react';
import uuid from 'uuid/v4'
import { Title, Item } from '../style/styles';
import TopWords from '../data/topWords.json'

const App = () => (
  <div>
    <Title>Hello Moby Dick!</Title>
    <div className="container">
      {TopWords.Words.map(ele => 
      <div key={uuid()}>
        <Item>{ele.word}</Item>
        <Item>{ele.count}</Item>
      </div>)}
    </div>
  </div>
);

export default App;

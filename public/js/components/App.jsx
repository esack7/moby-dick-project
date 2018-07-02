import React from 'react';
import uuid from 'uuid/v4'
import { Title, Item, Container, WordRow, HeadRow, Image } from '../style/styles';
import TopWords from '../topWords.json'

const App = () => (
  <div>
    <Title>Top 100 Words in Moby Dick</Title>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Moby_Dick_final_chase.jpg" alt="By I. W. Taber [Public domain], via Wikimedia Commons" />
    <Container>
      <HeadRow>
        <Item>Position</Item>
        <Item>Word</Item>
        <Item>Count of Usage</Item>
      </HeadRow>
      {TopWords.Words.map((ele, idx) =>
        <WordRow key={uuid()}>
          <Item>{idx + 1}</Item>
          <Item>{ele.word}</Item>
          <Item>{ele.count}</Item>
        </WordRow>)}
    </Container>
  </div>
);

export default App;

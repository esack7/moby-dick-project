import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const BaseStyles = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
  ${reset};
`;

const AppContain = styled.div`
  max-width: 960px;
  background: #2f4f4f;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  /* margin: auto; */
  display: grid;
  justify-content: center;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  color: #f0ead6;
  font-size: 48px;
  font-family: 'Permanent marker', cursive;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const WordRow = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  text-align: center;
`;

const HeadRow = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  font-style: bold;
  text-align: center;
  border-bottom: 3px solid #f0ead6;
`;

const Item = styled.div`
  color: #f0ead6;
  font-family: 'Permanent marker';
  font-size: 20px;
`;

const Image = styled.img`
  height: 100px;
  display: block;
  margin: auto;
  padding-bottom: 25px;
`;

export {
  BaseStyles,
  AppContain,
  Title,
  Item,
  Container,
  WordRow,
  HeadRow,
  Image,
};

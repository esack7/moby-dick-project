import styled, { injectGlobal } from 'styled-components';
import reset from './reset';

const BaseStyles = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
  ${reset};
`;

const AppContain = styled.div`
  max-width: 960px;
  background: black;
`;

const Title = styled.h1`
  margin: 10px;
  color: white;
  font-size: 48px;
  font-family: 'Permanent marker', cursive;
`;

const Item = styled.div`
  color: white;
`

export { BaseStyles, AppContain, Title, Item };

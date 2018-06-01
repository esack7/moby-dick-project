import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { BaseStyles, AppContain } from './style/styles';
import App from './components/App'

const renderApp = () => {
  BaseStyles();
  render((
    <BrowserRouter>
      <AppContain>
        <App />
      </AppContain>
    </BrowserRouter>
  ), document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}

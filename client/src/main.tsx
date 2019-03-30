import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'src/App';
import { Router } from '@reach/router';
import GlobalStyle from 'src/styles/globalStyles';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <Router>
      <App path="/" />
    </Router>
  </div>,
  document.getElementById('root'),
);

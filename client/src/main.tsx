import * as React    from 'react';
import * as ReactDOM from 'react-dom';
import App           from 'src/App';
import { Router }    from '@reach/router';

ReactDOM.render(
  <Router>
    <App path="/" />
  </Router>,
  document.getElementById('root'),
);

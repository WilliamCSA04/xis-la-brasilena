import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './pages/theme/Theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
);

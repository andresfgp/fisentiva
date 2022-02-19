import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import {UseProvider} from './hooks/useContext'

ReactDOM.render(
  <UseProvider>
    <App />
  </UseProvider>,
  document.getElementById('root')
);


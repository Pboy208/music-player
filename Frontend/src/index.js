import '@ahaui/css/dist/index.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { store } from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);


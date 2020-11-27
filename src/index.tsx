import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/scss/index.scss';
import 'antd/dist/antd.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

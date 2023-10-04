import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
// Оборачиваем приложение в Provider
// И передаем в него хранилище
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

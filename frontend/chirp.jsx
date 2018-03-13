import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  window.getState = store.getState;
  ReactDOM.render(<h1>Chirp!</h1>, root);
});

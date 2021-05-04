import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { store } from './store/store';

import Page from './components/Page';
import history from './serivces/history';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router history={history}>
          <Page />
        </Router>
      </Provider>
    </div>
  );
};

export default App;

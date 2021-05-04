import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';

import Page from './components/Page';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Page />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;

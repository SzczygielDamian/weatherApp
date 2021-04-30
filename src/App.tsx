import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchPage from './components/views/SearchPage/SearchPage';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

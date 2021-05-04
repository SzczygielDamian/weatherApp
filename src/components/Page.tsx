import React from 'react';
import { Route, Switch } from 'react-router';

import NotFoundPage from './views/NotFoundPage/NotFoundPage';
import SearchPage from './views/SearchPage/SearchPage';
import WeatherPage from './views/WeatherPage/WeatherPage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={SearchPage} />
        <Route path={'/:city/'} component={WeatherPage} />
        <Route path={'/404'} component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default Page;

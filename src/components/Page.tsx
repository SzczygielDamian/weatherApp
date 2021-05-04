import { Route, Switch } from 'react-router-dom';

import NotFoundPage from '../views/NotFoundPage/NotFoundPage';
import SearchPage from '../views/SearchPage/SearchPage';
import WeatherPage from '../views/WeatherPage/WeatherPage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={SearchPage} />
        <Route path={'/404'} component={NotFoundPage} />
        <Route path={'/:city/'} component={WeatherPage} />
      </Switch>
    </>
  );
};

export default Page;

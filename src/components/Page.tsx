import { Route, Switch } from "react-router-dom";

import NotFoundPage from "../views/NotFoundPage/NotFoundPage";
import SearchPage from "../views/SearchPage/SearchPage";
import WeatherPage from "../views/WeatherPage/WeatherPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <SearchPage />
        </Route>
        <Route path={"/404"}>
          <SearchPage />
          <NotFoundPage />
        </Route>
        <Route path={"/:city/"}>
          <SearchPage />
          <WeatherPage />
        </Route>
      </Switch>
    </>
  );
};

export default Page;

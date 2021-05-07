import { combineReducers } from 'redux';
import { weatherReducer } from './City/cityReducer';
import { viewWeatherBoxReducer } from './ViewWeatherBox/viewWeatherBoxReducer';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  viewWeatherBox: viewWeatherBoxReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

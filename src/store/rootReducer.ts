import { combineReducers } from 'redux';
import { weatherReducer } from './City/cityReducer';

export const rootReducer = combineReducers({
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

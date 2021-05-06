import { Action } from '../IAction';
import {
  GET_CITY_FAILED,
  GET_CITY_START,
  GET_CITY_SUCCESS,
  GET_CITY_WEATHER_DAYS_FAILED,
  GET_CITY_WEATHER_DAYS_START,
  GET_CITY_WEATHER_DAYS_SUCCESS,
} from './constans';

const initialState = {
  cityWeather: null,
  cityWeatherDays: null,
  isLoading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_CITY_START:
      return { ...state, isLoading: true };
    case GET_CITY_SUCCESS:
      return { ...state, isLoading: false, cityWeather: action.payload };
    case GET_CITY_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    case GET_CITY_WEATHER_DAYS_START:
      return { ...state, isLoading: true };
    case GET_CITY_WEATHER_DAYS_SUCCESS:
      return { ...state, isLoading: false, cityWeatherDays: action.payload };
    case GET_CITY_WEATHER_DAYS_FAILED:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

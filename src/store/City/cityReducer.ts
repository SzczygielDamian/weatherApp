import { Action } from '../IAction';
import {
  GET_CITIES_WEATHER_FAILED,
  GET_CITIES_WEATHER_START,
  GET_CITIES_WEATHER_SUCCESS,
  GET_CITY_FAILED,
  GET_CITY_START,
  GET_CITY_SUCCESS,
  GET_CITY_WEATHER_DAYS_FAILED,
  GET_CITY_WEATHER_DAYS_START,
  GET_CITY_WEATHER_DAYS_SUCCESS,
} from './constans';

const initialState = {
  cityWeather: null,
  citiesWeather: [],
  cityWeatherDays: null,
  isLoading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_CITY_START:
      state.citiesWeather = [];
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
    case GET_CITIES_WEATHER_START:
      return { ...state, isLoading: true };
    case GET_CITIES_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        citiesWeather: [...state.citiesWeather, action.payload],
      };
    case GET_CITIES_WEATHER_FAILED:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

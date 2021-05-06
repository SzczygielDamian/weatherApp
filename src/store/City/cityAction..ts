import history from '../../serivces/history';

import axios from 'axios';
import { APIKEY, apiWeatherUrl, lang } from '../../apiConfiguration';
import {
  GET_CITY_FAILED,
  GET_CITY_START,
  GET_CITY_SUCCESS,
  GET_CITY_WEATHER_DAYS_FAILED,
  GET_CITY_WEATHER_DAYS_START,
  GET_CITY_WEATHER_DAYS_SUCCESS,
} from './constans';

export const getCityStart = () => ({
  type: GET_CITY_START,
});

export const getCitySuccess = (city: any) => ({
  type: GET_CITY_SUCCESS,
  payload: city,
});

export const getCityFailed = (error: string) => ({
  type: GET_CITY_FAILED,
  payload: error,
});

export const getCityWeatherDayStart = () => ({
  type: GET_CITY_WEATHER_DAYS_START,
});

export const getCityWeatherDaySuccess = (city: any) => ({
  type: GET_CITY_WEATHER_DAYS_SUCCESS,
  payload: city,
});

export const getCityWeatherDayFailed = (error: string) => ({
  type: GET_CITY_WEATHER_DAYS_FAILED,
  payload: error,
});

export const getCity = (city: string) => {
  return (dispatch: any) => {
    dispatch(getCityStart());
    axios
      .get(
        `${apiWeatherUrl}weather?q=${city}&cnt=1&appid=${APIKEY}&lang=${lang} `
      )
      .then((res) => dispatch(getCitySuccess(res.data)))
      .then(() => changePage('Ok', city))
      .catch((err) => {
        dispatch(getCityFailed(err));
        changePage('Faild');
      });
  };
};

export const getCityWeatherDays = (lat: number, lon: number, city: string) => {
  return (dispatch: any) => {
    dispatch(getCityWeatherDayStart());
    axios
      .get(
        `${apiWeatherUrl}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKEY}`
      )
      .then((res) => dispatch(getCityWeatherDaySuccess(res.data)))
      .then(() => changePage('Ok', city))
      .catch((err) => {
        dispatch(getCityWeatherDayFailed(err));
        changePage('Faild');
      });
  };
};

const changePage = (status: string, city?: string) => {
  return status === 'Ok' ? history.push(`/:${city}/`) : history.push('/404');
};

import axios from 'axios';
import { APIKEY, apiWeather, lang } from '../../apiKey';

export const GET_CITY_START = 'GET_CITY_START';
export const GET_CITY_SUCCESS = 'GET_CITY_SUCCESS';
export const GET_CITY_FAILED = 'GET_CITY_FAILED';

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

export const getCity = (city: string) => {
  return (dispatch: any) => {
    dispatch(getCityStart());
    axios
      .get(`${apiWeather}${city}&appid=${APIKEY}&lang=${lang} `)
      .then((res) => dispatch(getCitySuccess(res)))
      .catch((err) => {
        dispatch(getCityFailed(err));
      });
  };
};
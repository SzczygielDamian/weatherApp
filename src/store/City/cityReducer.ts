import { Action } from '../IAction';
import {
  GET_CITY_FAILED,
  GET_CITY_START,
  GET_CITY_SUCCESS,
} from './cityAction.';

const initialState = {
  cityWeather: null,
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
    default:
      return { ...state };
  }
};

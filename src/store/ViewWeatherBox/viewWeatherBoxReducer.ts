import { Action } from '../IAction';
import { CHANGE_VIEW } from './viewWeatherBoxAction';

const initialState = {
  fewDays: false,
};

export const viewWeatherBoxReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return { ...state, fewDays: action.payload };
    default:
      return { ...state };
  }
};

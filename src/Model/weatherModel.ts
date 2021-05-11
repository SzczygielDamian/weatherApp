import { cityWeatherModel } from './cityWeatherModel';
import { dailyWeatherModel } from './dailyWetherModel';

export interface weatherModel {
  cityWeather: cityWeatherModel;
  citiesWeather: Array<cityWeatherModel>;
  cityWeatherDays: {
    daily: Array<dailyWeatherModel>;
  };
  error: string;
  isLoading: boolean;
}

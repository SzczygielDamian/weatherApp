import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCityWeatherDays } from '../../../store/City/cityAction.';
import WeatherBox from '../WeatherBox/WeatherBox';
import WeatherDaysBox from '../WeatherDaysBox/WeatherDaysBox';
import classes from './CityWeather.module.scss';

export interface CityWeatherProps {
  weather: any;
}

let weatherDaysComponents: any;

const CityWeather: React.FC<CityWeatherProps> = ({ weather }) => {
  const [fewDays, setFewDays] = useState(false);

  const dispatch = useDispatch();

  const getWeatherDays = (lat: number, lon: number, city: string) => {
    setFewDays((prevState) => !prevState);
    dispatch(getCityWeatherDays(lat, lon, city));
  };

  if (weather.cityWeatherDays != null) {
    const weatherDays = weather.cityWeatherDays.daily;
    weatherDaysComponents = weatherDays.map((day: any, index: number) => (
      <WeatherDaysBox key={index} weatherDays={day} />
    ));
  }

  return (
    <>
      {!fewDays ? (
        <div className={classes.containerWeatherBox}>
          <WeatherBox
            weather={weather.cityWeather}
            getWeatherDays={getWeatherDays}
          />
        </div>
      ) : (
        <div className={classes.main}>
          <div className={classes.containerWeatherDaysBox}>
            {weatherDaysComponents}
          </div>
        </div>
      )}
    </>
  );
};

export default CityWeather;

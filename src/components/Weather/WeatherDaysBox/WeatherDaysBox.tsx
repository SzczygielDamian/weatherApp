import classes from './WeaherDaysBox.module.scss';
import React from 'react';
import { celsiusTemperature } from '../../../serivces/celsiusTemperature';
import { dateCalculation } from '../../../serivces/dateCalculation';

export interface WeatherDaysBoxProps {
  weatherDays: any;
}

const WeatherDaysBox: React.FC<WeatherDaysBoxProps> = ({ weatherDays }) => {
  console.log(weatherDays);
  return (
    <div className={classes.informationBox}>
      <p style={{ textAlign: 'center' }}>{dateCalculation(weatherDays.dt)}</p>
      <p>
        Teperatura: {celsiusTemperature(weatherDays.temp.day)} <sup>o</sup>C
      </p>
      <p>Wilgotność: {weatherDays.humidity} %</p>
      <p>Prędkość wiatru: {weatherDays.wind_speed} m/s</p>
    </div>
  );
};

export default WeatherDaysBox;

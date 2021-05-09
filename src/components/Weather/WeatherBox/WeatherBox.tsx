import React from "react";
import { celsiusTemperature } from "../../../serivces/celsiusTemperature";

import history from "../../../serivces/history";

import classes from "./WeatherBox.module.scss";

export interface WeatherBoxProps {
  weather: any;
  getWeatherDays: Function;
}

const WeatherBox: React.FC<WeatherBoxProps> = ({ weather, getWeatherDays }) => {
  if (weather == null) {
    history.push("/404");
  }

  return (
    <>
      <div className={classes.informationBox}>
        <p>{weather.name}:</p>
        <p>
          Temperatura: {celsiusTemperature(weather.main.temp)} <sup>o</sup>C
        </p>
        <p>Wilgotność: {weather.main.humidity} %</p>
        <p>Prędkość wiatru: {weather.wind.speed} m/s</p>
      </div>
      <div className={classes.box}>
        <a
          onClick={() =>
            getWeatherDays(
              weather.coord.lat.toFixed(2),
              weather.coord.lon.toFixed(2),
              weather.name
            )
          }
        >
          Pokaż pogode na kolejne dni
        </a>
      </div>
    </>
  );
};

export default WeatherBox;

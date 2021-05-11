import { Button } from '@material-ui/core';
import React, { ComponentType } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phrase, units } from '../../../constans';
import { cityWeatherModel } from '../../../Model/cityWeatherModel';
import { dailyWeatherModel } from '../../../Model/dailyWetherModel';
import { weatherModel } from '../../../Model/weatherModel';
import { calculatedData } from '../../../serivces/calculatedData';
import { celsiusTemperature } from '../../../serivces/celsiusTemperature';
import { colsName } from '../../../serivces/TableColName/tableColName';
import { getCityWeatherDays } from '../../../store/City/cityAction.';
import { RootState } from '../../../store/rootReducer';
import { changeView } from '../../../store/ViewWeatherBox/viewWeatherBoxAction';
import TableComponent from '../../TableComponent/TableComponents';
import WeatherBox from '../WeatherBox/WeatherBox';
import WeatherDaysBox from '../WeatherDaysBox/WeatherDaysBox';
import classes from './CityWeather.module.scss';

export interface CityWeatherProps {
  weatherStore: weatherModel;
}

let weatherDaysComponents: Array<Object>;

const getRowsData = (
  cities: Array<cityWeatherModel>,
  selectedCity: cityWeatherModel
) => {
  return cities
    .filter((city: cityWeatherModel) => city.name !== selectedCity.name)
    .map((city: cityWeatherModel) => ({
      key: city.name,
      city: city.name,
      temp: calculatedData(
        celsiusTemperature(city.main.temp),
        celsiusTemperature(selectedCity.main.temp),
        phrase.TEMPERATURE,
        units.TEMPERATURE
      ),
      humidity: calculatedData(
        celsiusTemperature(city.main.humidity),
        celsiusTemperature(selectedCity.main.humidity),
        phrase.PERCENTAGE,
        units.PERCENTAGE
      ),
      wind: calculatedData(
        celsiusTemperature(city.wind.speed),
        celsiusTemperature(selectedCity.wind.speed),
        phrase.WIND,
        units.WIND
      ),
    }));
};

const CityWeather: React.FC<CityWeatherProps> = ({ weatherStore }) => {
  const viewWeatherBox = useSelector(
    (store: RootState) => store.viewWeatherBox.fewDays
  );
  const dispatch = useDispatch();

  const getWeatherDays = (lat: number, lon: number, city: string) => {
    dispatch(changeView(!viewWeatherBox));
    dispatch(getCityWeatherDays(lat, lon, city));
  };

  if (weatherStore.cityWeatherDays != null) {
    const weatherDays = weatherStore.cityWeatherDays.daily;
    weatherDaysComponents = weatherDays.map(
      (day: dailyWeatherModel, index: number) => (
        <WeatherDaysBox key={index} weatherDays={day} />
      )
    );
  }

  return (
    <>
      {!viewWeatherBox ? (
        <div
          className={[classes.containerWeatherBox, classes.centeringBox].join(
            ' '
          )}
        >
          <WeatherBox
            weather={weatherStore.cityWeather}
            getWeatherDays={getWeatherDays}
          />
        </div>
      ) : (
        <div className={classes.main}>
          <div className={classes.centeringBox}>
            <Button
              variant='contained'
              color='primary'
              disableElevation
              onClick={() => dispatch(changeView(!viewWeatherBox))}
            >
              Pokaż pogodę na dzień dzisiejszy
            </Button>
          </div>
          <div className={classes.containerWeatherDaysBox}>
            {weatherDaysComponents}
          </div>
        </div>
      )}
      <TableComponent
        colsName={colsName}
        title='weatherCities'
        rows={getRowsData(weatherStore.citiesWeather, weatherStore.cityWeather)}
      />
    </>
  );
};

export default CityWeather;

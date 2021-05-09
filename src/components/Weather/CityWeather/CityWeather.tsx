import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colsName } from "../../../serivces/TableColName/tableColName";
import { getCityWeatherDays } from "../../../store/City/cityAction.";
import { RootState } from "../../../store/rootReducer";
import { changeView } from "../../../store/ViewWeatherBox/viewWeatherBoxAction";
import TableComponent from "../../TableComponent/TableComponents";
import WeatherBox from "../WeatherBox/WeatherBox";
import WeatherDaysBox from "../WeatherDaysBox/WeatherDaysBox";
import classes from "./CityWeather.module.scss";

export interface CityWeatherProps {
  weather: any;
}

let weatherDaysComponents: any;

const CityWeather: React.FC<CityWeatherProps> = ({ weather }) => {
  const viewWeatherBox = useSelector(
    (store: RootState) => store.viewWeatherBox.fewDays
  );

  const dispatch = useDispatch();

  const getWeatherDays = (lat: number, lon: number, city: string) => {
    dispatch(changeView(!viewWeatherBox));
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
      {!viewWeatherBox ? (
        <div
          className={[classes.containerWeatherBox, classes.centeringBox].join(
            " "
          )}
        >
          <WeatherBox
            weather={weather.cityWeather}
            getWeatherDays={getWeatherDays}
          />
        </div>
      ) : (
        <div className={classes.main}>
          <div className={classes.centeringBox}>
            <Button
              variant="contained"
              color="primary"
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
      <TableComponent colsName={colsName} title="weatherCities" />
    </>
  );
};

export default CityWeather;

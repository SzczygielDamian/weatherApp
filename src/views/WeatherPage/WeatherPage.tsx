import React from "react";
import { useSelector } from "react-redux";
import CityWeather from "../../components/CityWeather/CityWeather";
import { RootState } from "../../store/rootReducer";

export interface WeatherPageProps {}

const WeatherPage: React.FC<WeatherPageProps> = () => {
  const weather = useSelector((store: RootState) => store.weather.cityWeather);

  return <CityWeather weather={weather} />;
};

export default WeatherPage;

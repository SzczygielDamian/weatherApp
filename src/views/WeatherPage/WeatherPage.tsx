import React from 'react';
import { useSelector } from 'react-redux';
import CityWeather from '../../components/Weather/CityWeather/CityWeather';

import { RootState } from '../../store/rootReducer';

export interface WeatherPageProps {}

const WeatherPage: React.FC<WeatherPageProps> = () => {
  const weatherStore = useSelector((store: RootState) => store.weather);

  return <CityWeather weatherStore={weatherStore} />;
};

export default WeatherPage;

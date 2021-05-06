import { useDispatch } from 'react-redux';
import history from '../../serivces/history';
import { getCityWeatherDays } from '../../store/City/cityAction.';
import classes from './CityWeather.module.scss';

let KelvinTemp: number;
let humidity: number;
let wind: number;
let city: string;
let lat: number;
let lon: number;

export interface CityWeatherProps {
  weather: any;
}

const celsiusTemperature = (temp: number) => {
  const celsiusTemp = temp - 273.15;
  return celsiusTemp.toFixed(0);
};

const CityWeather: React.FC<CityWeatherProps> = ({ weather }) => {
  const dispatch = useDispatch();

  if (weather != null) {
    KelvinTemp = weather.main.temp;
    humidity = weather.main.humidity;
    wind = weather.wind.speed;
    city = weather.name;
    lat = weather.coord.lat.toFixed(2);
    lon = weather.coord.lon.toFixed(2);
    console.log(weather);
  } else {
    history.push('/404');
  }

  const getWeatherDays = (lat: number, lon: number, city: string) => {
    dispatch(getCityWeatherDays(lat, lon, city));
  };

  return (
    <div className={classes.container}>
      <p>{city}:</p>
      <p>
        Temperatura: {celsiusTemperature(KelvinTemp)} <sup>o</sup>C
      </p>
      <p>Wilgotność: {humidity} %</p>
      <p>Prędkość wiatru: {wind} m/s</p>
      <div className={classes.box}>
        <a onClick={() => getWeatherDays(lat, lon, city)}>
          Pokaż pogode na kolejne dni
        </a>
      </div>
    </div>
  );
};

export default CityWeather;

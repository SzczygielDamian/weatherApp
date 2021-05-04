import classes from "./CityWeather.module.scss";

export interface CityWeatherProps {
  weather: any;
}

const celsiusTemperature = (temp: number) => {
  const celsiusTemp = temp - 273.15;
  return celsiusTemp.toFixed(0);
};

const CityWeather: React.FC<CityWeatherProps> = ({ weather }) => {
  const KelvinTemp = weather.main.temp;
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;
  const city = weather.name;
  console.log(weather);
  return (
    <div className={classes.container}>
      <p>{city}:</p>
      <p>
        Temperatura: {celsiusTemperature(KelvinTemp)} <sup>o</sup>C
      </p>
      <p>Wilgotność: {humidity} %</p>
      <p>Prędkość wiatru: {wind} m/s</p>
    </div>
  );
};

export default CityWeather;

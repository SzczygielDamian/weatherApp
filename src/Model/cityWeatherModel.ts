export interface cityWeatherModel {
  base: string;
  coord: {
    lon: number;
    lat: number;
  };
  cod: number;
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

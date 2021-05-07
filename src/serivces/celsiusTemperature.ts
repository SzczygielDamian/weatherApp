export const celsiusTemperature = (temp: number) => {
  const celsiusTemp = temp - 273.15;
  return celsiusTemp.toFixed(0);
};

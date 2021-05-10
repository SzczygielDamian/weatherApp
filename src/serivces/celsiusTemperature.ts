export const celsiusTemperature = (temp: number) => {
  const celsiusTemp = temp - 273.15;
  return parseFloat(celsiusTemp.toFixed(0));
};

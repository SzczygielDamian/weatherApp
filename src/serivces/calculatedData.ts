export const calculatedData = (
  city: number,
  selectedCity: number,
  phrase: any,
  unit: string
) => {
  if (selectedCity > city) {
    return `${phrase.LESS} ${Math.abs(selectedCity - city)} ${unit}`;
  } else if (selectedCity < city) {
    return `${phrase.MORE} ${Math.abs(city - selectedCity)} ${unit}`;
  } else {
    return 'taka sama';
  }
};

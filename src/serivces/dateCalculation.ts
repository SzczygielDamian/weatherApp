export const dateCalculation = (date: number) => {
  return new Date(date * 1000).toLocaleDateString('pl');
};

export const CHANGE_VIEW = 'CHANGE_VIEW';

export const changeView = (fewDays: boolean) => ({
  type: CHANGE_VIEW,
  payload: fewDays,
});

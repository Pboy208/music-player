/* eslint-disable import/prefer-default-export */
export const timeFormatter = (value) => {
  if (!value) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

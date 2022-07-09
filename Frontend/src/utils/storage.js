/* eslint-disable import/prefer-default-export */
export const updateSongState = (state) => {
  localStorage.setItem('songState', JSON.stringify(state));
};

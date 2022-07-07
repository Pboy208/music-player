/* eslint-disable import/prefer-default-export */
import { post, get, put } from 'utils/request';

export const search = async (query, scrollOffset = 0) =>
  post('/song/search', { body: { query, scrollOffset } });

// const defaultResult = [
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
//   { avatar: '', name: 'name', type: 'Artist' },
// ];

// export const search = async (query, scrollOffset) => {
//   console.log('search with:::', query, scrollOffset);
//   return new Promise((resolve) => {
//     resolve({data:defaultResult});
//   });
// };

export const postSong = (newSong) => post('/song', { body: newSong });

export const getSongById = (songId) => get(`/song/${songId}`);

export const getFavoriteSong = () => get('/song/favoriteSong');

export const toggleLikeSong = (songId) => put(`/song/${songId}/toggle-like`);

export const getSongChart = () => get('/song/chart');

export const getSongExplore = () => get('/song/explore/song');

export const getArtistExplore = () => get('/song/explore/artist');

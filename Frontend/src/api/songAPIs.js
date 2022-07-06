/* eslint-disable import/prefer-default-export */
import { post, get } from 'utils/request';

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

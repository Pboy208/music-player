/* eslint-disable import/prefer-default-export */
import { post, get, put } from 'utils/request';

export const search = async (query, scrollOffset = 0) =>
  post('/song/search', { body: { query, scrollOffset } });

export const postSong = (newSong) => post('/song', { body: newSong });

export const getSongById = (songId) => get(`/song/${songId}`);

export const getFavoriteSong = () => get('/song/favoriteSong');

export const toggleLikeSong = (songId) => put(`/song/${songId}/toggle-like`);

export const getSongLyric = (songId) => get(`/song/${songId}/lyric`);

export const listenToSong = (songId) => post(`/song/${songId}/listen`);

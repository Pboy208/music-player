/* eslint-disable import/prefer-default-export */
import { post, get } from 'utils/request';

// export const search = async (query) =>
//   Spotify.search(query, ['artist', 'track', 'album', 'playlist']);

export const postSong = (newSong) => post('/song', { body: newSong });

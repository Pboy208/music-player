import { schema } from 'normalizr';

export const song = new schema.Entity('song');
export const arrayOfSong = [song];

export const album = new schema.Entity('album');
export const arrayOfAlbum = [album];

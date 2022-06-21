/* eslint-disable import/prefer-default-export */
import { post, get } from 'utils/request';

export const addPost = (newPost) => post('/post', { body: newPost });

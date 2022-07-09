/* eslint-disable import/prefer-default-export */
import { post, get } from 'utils/request';

export const getProfile = (targetUserId) =>
  get(`/user/explore/profile/${targetUserId}`);

export const updateProfile = (profile) => post('/user/profile', { body: profile });
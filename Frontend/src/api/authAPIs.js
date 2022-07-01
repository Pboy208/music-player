import { post } from 'utils/request';

export const login = (loginInfo) =>
  post('/auth/sign-in', {
    body: {
      ...loginInfo,
    },
  });

export const register = (registerInfo) =>
  post('/auth/sign-up', {
    body: registerInfo,
  });

export const googleLogin = (googleLoginInfo) =>
  post('/auth/google/sign-in', {
    body: {
      ...googleLoginInfo,
    },
  });

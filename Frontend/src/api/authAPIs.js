import { createRequest, post } from 'utils/request';

// export const login = (loginInfo) => post('/login', { body: loginInfo });

// export const register = (registerInfo) => post('/register', { body: registerInfo });

export const login = (loginInfo) =>
  createRequest(post('/login', { body: loginInfo }));

export const register = (registerInfo) =>
  createRequest(post('/register', { body: registerInfo }));

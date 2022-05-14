import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import decode from 'jwt-decode';
import * as authApi from 'api/authAPIs';

export const login = createAsyncThunk('auth/login', (loginInfo) =>
  authApi.login(loginInfo),
);

export const register = createAsyncThunk('auth/register', (registerInfo) =>
  authApi.register(registerInfo),
);

const getUserFromToken = (token) => {
  const decodedToken = decode(token);
  delete decodedToken.iat;
  delete decodedToken.exp;

  return decodedToken;
};

const initialState = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
};

const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const decodedToken = decode(token);
    return !!decodedToken.userID;
  } catch (e) {
    return false;
  }
};

const token = localStorage.getItem('token');

if (isTokenValid(token)) {
  initialState.user = getUserFromToken(token);
  initialState.isLoggedIn = true;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('token');
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    resetAuthState: (state) => {
      state.isLoggedIn = false;
      state.name = null;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      localStorage.setItem('token', action.payload.data);
      state.isLoggedIn = true;
      state.user = getUserFromToken(action.payload.data);
    },
    [register.fulfilled]: (state, action) => {
      // localStorage.setItem('token', action.payload.data);
      // state.isLoggedIn = true;
      // state.userName = decode(action.payload.data).userName;
    },
  },
});

export default authSlice.reducer;

export const { logIn, logout, resetAuthState } = authSlice.actions;

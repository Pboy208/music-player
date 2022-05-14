import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import decode from 'jwt-decode';
import * as authApi from 'api/authAPIs';

export const login = createAsyncThunk('auth/login', (loginInfo) =>
  authApi.login(loginInfo),
);

export const register = createAsyncThunk('auth/login', (registerInfo) =>
  authApi.register(registerInfo),
);

const initialState = {
  isLoggedIn: false,
  name: '',
  isLoading: false,
};

const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const decodedToken = decode(token);
    return !!decodedToken.userId;
  } catch (e) {
    return false;
  }
};

const token = localStorage.getItem('token');

if (isTokenValid(token)) {
  initialState.isLoggedIn = true;
  initialState.name = decode(token).name;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.name = '';
      localStorage.removeItem('token');
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    resetAuthState: (state) => {
      state.isLoggedIn = false;
      state.name = '';
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;

export const { logIn, logout, resetAuthState } = authSlice.actions;

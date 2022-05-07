import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import decode from 'jwt-decode';

const initialState = {
  isLoggedIn: false,
  userName: '',
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
  initialState.userName = decode(token).userName;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.userName = '';
      localStorage.removeItem('token');
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    resetAuthState: (state) => {
      state.isLoggedIn = false;
      state.userName = '';
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;

export const { logIn, logout, resetAuthState } = authSlice.actions;

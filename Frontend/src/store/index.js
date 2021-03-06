/* eslint-disable import/prefer-default-export */
/* eslint-disable no-fallthrough */
import { configureStore } from '@reduxjs/toolkit';
import songReducer from './songSlice';
import authReducer from './authSlice';
import httpErrorHandlerMiddleware from './httpErrorHandlerMiddleware';
import httpStatusHandlerMiddleware from './httpStatusHandlerMiddleware';

export const store = configureStore({
  reducer: { song: songReducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      httpStatusHandlerMiddleware,
      httpErrorHandlerMiddleware,
    ),
});

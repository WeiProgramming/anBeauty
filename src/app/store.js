import { configureStore } from '@reduxjs/toolkit';
import toastReducer from '../features/toast/toastSlice';
import authReducer from '../features/auth/authSlice';


export const store = configureStore({
  reducer: {
    toast: toastReducer,
    auth: authReducer
  },
});

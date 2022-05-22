import { configureStore } from '@reduxjs/toolkit';
import settingReducer from '../redux/slices';
export const store = configureStore({
  reducer: { settings: settingReducer },
});

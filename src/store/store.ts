// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import vehiculosSlice from './vehiculosSlice';

export const store = configureStore({
  reducer: {
    vehiculos: vehiculosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { spcFlightApi } from './spaceflight/spaceflight.api';

export const store = configureStore({
  reducer: {
    [spcFlightApi.reducerPath]: spcFlightApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spcFlightApi.middleware),
});

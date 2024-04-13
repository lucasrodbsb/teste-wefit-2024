import { moviesApi } from "./api/moviesApi";
import { configureStore } from "@reduxjs/toolkit";
import { cart } from "./slices/cart";

export const store = configureStore({
  reducer: {
    [cart.name]: cart.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([moviesApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

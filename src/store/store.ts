import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import accountsReducer from "./slices/accountsSlice";

  export const store = configureStore({
    reducer: {
      movies: moviesReducer,
      accounts: accountsReducer,
    },
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
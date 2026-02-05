import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import accountsReducer from "./slices/accountsSlice";
import notificationReducer from "./slices/notificationSlice";

  export const store = configureStore({
    reducer: {
      movies: moviesReducer,
      accounts: accountsReducer,
      notifications: notificationReducer,
    },
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
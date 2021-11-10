import { configureStore } from "@reduxjs/toolkit"; //import configure store from redux toolkit
import moviesReducer from "./Movies/MovieReducer";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

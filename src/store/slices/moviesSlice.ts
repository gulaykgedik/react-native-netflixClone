import { createSlice } from "@reduxjs/toolkit";
import { getMovieData, getMoviesByGenre, getNowPlayingMovies, getPopulerMovies, getTopRatedMovies, getUpcomingMovies } from "../actions/moviesActions";
import { MoviesState } from "../../models/data/moviesState";

const initialState:MoviesState = {
    populerMovies: [],
    nowPlayingMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    moviesByGenre: [],
    movieData: {},
    pending: false,
    error: "",
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopulerMovies.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getPopulerMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.populerMovies = action.payload;
      })
      .addCase(getPopulerMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(getNowPlayingMovies.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.nowPlayingMovies = action.payload;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(getTopRatedMovies.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.topRatedMovies = action.payload;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(getUpcomingMovies.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.upcomingMovies = action.payload;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(getMovieData.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getMovieData.fulfilled, (state, action) => {
        state.pending = false;
        state.movieData = action.payload;
      })
      .addCase(getMovieData.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(getMoviesByGenre.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getMoviesByGenre.fulfilled, (state, action) => {
        state.pending = false;
        state.moviesByGenre = action.payload.results || action.payload; // düzeltildi
      })
      .addCase(getMoviesByGenre.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });

  },
});


export default moviesSlice.reducer;
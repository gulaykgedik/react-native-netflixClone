import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../service/verb';
import { NOW_PLAYING_URL, POPULAR_URL, TOP_RATED_URL, UPCOMING_URL, MOVIE_URL, DISCOVER_URL } from '../../service/url';


const getNowPlayingMovies = createAsyncThunk(
    'movies/getNowPlayingMovies',
    async (params, thunkAPI) => {
        try {
            const response = await getRequest(NOW_PLAYING_URL, params);
            const data = response.data;
            return data.results;
        } catch (error) {

            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch now playing movies');
        }
    }
);
const getPopulerMovies = createAsyncThunk(
    'movies/getPopulerMovies',
    async (params, thunkAPI) => {
        try {
            const response = await getRequest(POPULAR_URL, params);
            const data = response.data;
            return data.results;
        } catch (error) {

            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch popular movies');
        }
    }
);

const getTopRatedMovies = createAsyncThunk(
    'movies/getTopRatedMovies',
    async (params, thunkAPI) => {
        try {
            const response = await getRequest(TOP_RATED_URL, params);
            const data = response.data;
            return data.results;
        } catch (error) {

            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch top rated movies');
        }
    }
);

const getUpcomingMovies = createAsyncThunk(
    'movies/getUpcomingMovies',
    async (params, thunkAPI) => {
        try {
            const response = await getRequest(UPCOMING_URL, params);
            const data = response.data;
            return data.results;
        } catch (error) {

            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch upcoming movies');
        }

    }
);

const getMovieData = createAsyncThunk(
    'movies/getMovieData',
    async (movieId, thunkAPI) => {
        try {
            const response = await getRequest(`${MOVIE_URL}${movieId}`, {});
            const data = response.data;
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch movie data');
        }
    }
);
 

 const getMoviesByGenre = createAsyncThunk(
  "movies/getMoviesByGenre",
  async (genreId, thunkAPI) => {
    try {
      console.log('Fetching movies for genre ID:', genreId);
      const response = await getRequest(`${DISCOVER_URL}?with_genres=${genreId}`);
      console.log('getMoviesByGenre response:', response.data);
      return response.data;
    } catch (error) {
      console.error('getMoviesByGenre error:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {
    getPopulerMovies,
    getNowPlayingMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getMovieData,
    getMoviesByGenre
};
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../service/verb';
import { NOW_PLAYING_URL, POPULAR_URL, TOP_RATED_URL, UPCOMING_URL, MOVIE_URL, DISCOVER_URL } from '../../service/url';
import { MoviesParams } from '../../models/data/actionsParams';


const getNowPlayingMovies = createAsyncThunk(
    'movies/getNowPlayingMovies',
    async ({params}: {params: MoviesParams}, thunkAPI) => {
        try {
            const response = await getRequest(NOW_PLAYING_URL, params);
            const data = response.data;
            return data.results;
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to fetch now playing movies';
            return thunkAPI.rejectWithValue(message);
        }
    }
);
const getPopulerMovies = createAsyncThunk(
    'movies/getPopulerMovies',
    async ({params}: {params: MoviesParams}, thunkAPI) => {
        try {
            const response = await getRequest(POPULAR_URL, params);
            const data = response.data;
            return data.results;
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to fetch popular movies';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const getTopRatedMovies = createAsyncThunk(
    'movies/getTopRatedMovies',
    async ({params}: {params: MoviesParams}, thunkAPI) => {
        try {
            const response = await getRequest(TOP_RATED_URL, params);
            const data = response.data;
            return data.results;
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to fetch top rated movies';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const getUpcomingMovies = createAsyncThunk(
    'movies/getUpcomingMovies',
    async ({params}: {params: MoviesParams}, thunkAPI) => {
        try {
            const response = await getRequest(UPCOMING_URL, params);
            const data = response.data;
            return data.results;
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to fetch upcoming movies';
            return thunkAPI.rejectWithValue(message);
        }

    }
);

const getMovieData = createAsyncThunk(
    'movies/getMovieData',
    async (movieId: number, thunkAPI) => {
        try {
            console.log(`Fetching movie details for ID: ${movieId}`);
            const response = await getRequest(`${MOVIE_URL}${movieId}`, {});
            console.log(`Movie data response:`, response.data);
            return response.data;
        } catch (error) {
                // More detailed logging for debugging 404/failed requests
                // Axios error may contain response and config
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const err: any = error;
                console.log('Movie data fetch error:', err.message || err);
                if (err.response) {
                    console.log('Response status:', err.response.status);
                    console.log('Response data:', err.response.data);
                    console.log('Request URL:', err.config?.url || err.request?.responseURL || 'unknown');
                }
                const message = err instanceof Error ? err.message : 'Failed to fetch movie data';
                return thunkAPI.rejectWithValue(message);
        }
    }
);
 

 const getMoviesByGenre = createAsyncThunk(
  "movies/getMoviesByGenre",
  async (genreId: number, thunkAPI) => {
    try {
      console.log('Fetching movies for genre ID:', genreId);
      const response = await getRequest(`${DISCOVER_URL}?with_genres=${genreId}`);
      console.log('getMoviesByGenre response:', response.data);
      return response.data;
    } catch (error) {
      console.error('getMoviesByGenre error:', error);
      const message = error instanceof Error ? error.message : 'Failed to fetch movies by genre';
      return thunkAPI.rejectWithValue(message);
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
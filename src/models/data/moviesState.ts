interface Movie {
    id: number;
    adult: boolean;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    orginal_language: string;
    original_title: string;
    popularity: number;
    video: boolean;
    vote_count: number;
    belongs_to_collection?: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget?: number;
    genres?: { id: number; name: string }[];
    homepage?: string;
    imdb_id?: string;
    revenue?: number;
    runtime?: string;
    status?: string;
    tagline?: string;
    original_country?: string[];
    production_companies?: Company[];
    production_countries?: Country[];
    spoken_languages?: Language[];

};
interface Language {
    iso_639_1: string;
    name: string; 
    english_name: string;
}  

interface Company { 
        id: number; 
        logo_path: string | null; 
        name: string; 
        origin_country: string 
};

interface Country {
    iso_3166_1: string;
    name: string;
}


interface MoviesState {
    populerMovies: Movie[],
    nowPlayingMovies: Movie[],
    topRatedMovies: Movie[],
    upcomingMovies: Movie[],
     moviesByGenre: Movie[],
    movieData: Movie | {},
    pending: boolean,
    error: string | unknown,
}

export type { MoviesState, Movie, Company, Country, Language };
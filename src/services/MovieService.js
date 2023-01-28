import axios from "axios";

const API_KEY = "e5f34d07a7faa12dae140e0a4798d6ba";
const url = `https://api.themoviedb.org/3`;

export const getMultiSearch = (query) => {
    return axios.get(
        `${url}/search/multi?api_key=${API_KEY}&query=${query}&include_adult=true`
    );
};

export const getSearchMovies = (query, page = 1) => {
    return axios.get(`
    ${url}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
};

export const getSearchTvShows = (query, page = 1) => {
    return axios.get(`
    ${url}/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
};

export const getSearchPeople = (query, page = 1) => {
    return axios.get(`
    ${url}/search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
};

export const getSearchCollections = (query, page = 1) => {
    return axios.get(`
    ${url}/search/collection?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
};

export const getSearchCompanies = (query, page = 1) => {
    return axios.get(`
    ${url}/search/company?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
};

export const getSearchKeywords = (query, page = 1) => {
    return axios.get(`
    ${url}/search/keyword?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
};

export const getListCountries = () => {
    return axios.get(`${url}/configuration/countries?api_key=${API_KEY}`);
};

// languages list
export const getLanguagesList = () => {
    return axios.get(`${url}/configuration/languages?api_key=${API_KEY}`);
};

// counteries list
export const getListCountriesWatchProvider = () => {
    return axios.get(
        `${url}/watch/providers/regions?api_key=${API_KEY}&language=en-US`
    );
};

export const getWatchProviderMovies = (watch_region = "DE") => {
    return axios.get(
        `${url}/watch/providers/movie?api_key=${API_KEY}&language=en-US&watch_region=${watch_region}`
    );
};

// movies start
export const getMovies = (moviesType = "popular", page = 1) => {
    return axios.get(
        `${url}/movie/${moviesType}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
};

// tvShows start
export const getTvShows = (tvShowsType = "popular", page = 1) => {
    return axios.get(
        `${url}/tv/${tvShowsType}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
};

// people start
export const getPeople = (peopleType = "popular", page = 1) => {
    // /person/popular?api_key=e5f34d07a7faa12dae140e0a4798d6ba&language=en-US&page=2
    return axios.get(`
    ${url}/person/${peopleType}?api_key=${API_KEY}&language=en-US&page=${page}
  `);
};

export const getMovie = (movieId) => {
    return axios.get(
        `${url}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images,keywords,credits,reviews,external_ids,recommendations`
    );
};

export const getTv = (tvId) => {
    return axios.get(
        `${url}/tv/${tvId}?api_key=${API_KEY}&append_to_response=videos`
    );
};

export const getDiscoverMovie = () => {
    return axios.get(`${url}/discover/movie?api_key=${API_KEY}&page=3`);
};

export const getDiscoverMovieWithGenres = (genreId, page = 1) => {
    return axios.get(
        `${url}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genreId}`
    );
};

export const getDiscoverTvWithGenres = (genreId) => {
    return axios.get(
        `${url}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreId}`
    );
};

export const getGenresMovieList = () => {
    return axios.get(`${url}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
};

export const getPersonDetails = (personId) => {
    return axios.get(
        `${url}/person/${personId}?api_key=${API_KEY}&append_to_response=external_ids,images,translations,movie_credits,tv_credits,tagged_images,combined_credits`
    );
};

export const getDailyOrWeeklyTrendingItems = (time) => {
    return axios.get(`${url}/trending/all/${time}?api_key=${API_KEY}`);
};

export const getShowListOnTv = () => {
    return axios.get(
        `${url}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
    );
};

export const getMoviesForRent = () => {
    return axios.get(
        `${url}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_watch_monetization_types=rent`
    );
};

export const getListOfMoviesInTheatres = () => {
    return axios.get(
        `${url}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=us`
    );
};

export const getFreeToWatch = (typeWatch) => {
    return axios.get(
        `${url}/discover/${typeWatch}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&watch_region=US&with_watch_monetization_types=free`
    );
};

// get keyword details
export const getKeywordDetails = (keywordId) => {
    return axios.get(`${url}/keyword/${keywordId}?api_key=${API_KEY}`);
}

// movies related keyword
export const getMoviesRelatedToTheKeyword = (keywordId, page = 1) => {
    return axios.get(`${url}/keyword/${keywordId}/movies?api_key=${API_KEY}&language=en-US&page=${page}`);
}
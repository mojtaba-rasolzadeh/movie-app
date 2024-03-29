import axios from "axios";

const API_KEY = "e5f34d07a7faa12dae140e0a4798d6ba";
const url = `https://api.themoviedb.org/3`;

// search
export const getSearchMovies = (query, page = 1) => {
    return axios.get(`
    ${url}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
};

export const getSearchTvShows = (query, page = 1) => {
    return axios.get(`
    ${url}/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
};

export const getSearchPeople = (query, page = 1) => {
    return axios.get(`
    ${url}/search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
};

export const getSearchCollections = (query, page = 1) => {
    return axios.get(`
    ${url}/search/collection?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
};

export const getSearchCompanies = (query, page = 1) => {
    return axios.get(`
    ${url}/search/company?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
};

export const getSearchKeywords = (query, page = 1) => {
    return axios.get(`
    ${url}/search/keyword?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
};

export const getListCountries = () => {
    return axios.get(`${url}/configuration/countries?api_key=${API_KEY}`);
};

// languages list
export const getLanguagesList = () => {
    return axios.get(`${url}/configuration/languages?api_key=${API_KEY}`);
};

// movies start
export const getMovies = (moviesType = "popular", page = 1) => {
    return axios.get(
        `${url}/movie/${moviesType}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
};

// get recommendations
export const getRecommendations = (mediaType = "movie", mediaId, page = 1) => {
    return axios.get(
        `${url}/${mediaType}/${mediaId}/recommendations?api_key=${API_KEY}&language=en-US&page=${page}`
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
    return axios.get(`
    ${url}/person/${peopleType}?api_key=${API_KEY}&language=en-US&page=${page}
  `);
};

// movie
export const getMovie = (movieId, reviewsPage = 1) => {
    return axios.get(
        `${url}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images,keywords,credits,external_ids,recommendations,reviews&page=${reviewsPage}`
    );
};

// trending
export const getTrending = (mediaType = "movie", time = "week", page = 1) => {
    return axios.get(
        `${url}/trending/${mediaType}/${time}?api_key=${API_KEY}&page=${page}`
    );
};

// tvShows
export const getTv = (tvId, reviewsPage = 1) => {
    return axios.get(
        `${url}/tv/${tvId}?api_key=${API_KEY}&append_to_response=videos,images,keywords,credits,aggregate_credits,external_ids,recommendations,seasons,reviews&page=${reviewsPage}`
    );
};

// get network details
export const getNetworkDtails = (networkId) => {
    return axios.get(`${url}/network/${networkId}?api_key=${API_KEY}`);
};

// get tvShows related to the network
export const getTvShowsRelatedToTheNetwork = (networkId, page = 1) => {
    return axios.get(
        `${url}/discover/tv?api_key=${API_KEY}&language=en-US&page=${page}&with_networks=${networkId}`
    );
};

// dicover movie with genres
export const getDiscoverMovieWithGenres = (genreId, page = 1) => {
    return axios.get(
        `${url}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genreId}`
    );
};

// dicover tvShow with genres
export const getDiscoverTvShowWithGenres = (genreId, page = 1) => {
    return axios.get(
        `${url}/discover/tv?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genreId}`
    );
};

// genres movie list
export const getGenresMovieList = () => {
    return axios.get(`${url}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
};

// genres tvShow list
export const getGenresTvShowList = () => {
    return axios.get(`${url}/genre/tv/list?api_key=${API_KEY}&language=en-US`);
};

export const getPersonDetails = (personId) => {
    return axios.get(
        `${url}/person/${personId}?api_key=${API_KEY}&append_to_response=external_ids,images,translations,movie_credits,tv_credits,tagged_images,combined_credits`
    );
};

export const getDailyOrWeeklyTrendingItems = (time) => {
    return axios.get(`${url}/trending/all/${time}?api_key=${API_KEY}`);
};

export const getMoviesForRent = () => {
    return axios.get(
        `${url}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_watch_monetization_types=rent`
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
};

// movies related keyword
export const getMoviesRelatedToTheKeyword = (keywordId, page = 1) => {
    return axios.get(
        `${url}/keyword/${keywordId}/movies?api_key=${API_KEY}&language=en-US&page=${page}`
    );
};

// Movies related Company
export const getMoviesCompany = (companyId, page = 1) => {
    return axios.get(
        `${url}/discover/movie?api_key=${API_KEY}&language=en-USpage=${page}&with_companies=${companyId}`
    );
};
// Movies related Collection
export const getMoviesCollection = (collectionId) => {
    return axios.get(
        `${url}/collection/${collectionId}?api_key=${API_KEY}&language=en-US`
    );
};

// tvShow related keyword
export const getTvShowsRelatedToTheKeyword = (keywordId, page = 1) => {
    return axios.get(
        `${url}/discover/tv?api_key=${API_KEY}&language=en-US&page=${page}&with_keywords=${keywordId}`
    );
};

// Retrieve the details of a movie or TV show review
export const getDetailsOfMovieOrTvShowReview = (reviewId) => {
    return axios.get(`${url}/review/${reviewId}?api_key=${API_KEY}`);
};

// Get the TV season details by id
export const getTvSeasonDetails = (tvId, seasonNnumber) => {
    return axios.get(
        `${url}/tv/${tvId}/season/${seasonNnumber}?api_key=${API_KEY}&language=en-US`
    );
};
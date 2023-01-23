import { createContext } from "react";

export const MovieContext = createContext({
  query: "",
  setQuery: () => { },
  handleSearch: () => { },
  isloading: false,
  activeLink: "",
  movies: [],
  backdrops: [],
  popularMovies: [],
  setPopularMovies: () => { },
  setMovies: () => { },
  setActiveLink: () => { },
  setIsLoading: () => { },
});

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { MovieContext } from "./context/MovieContext";
import { MainLayout, Navbar } from "./components";
import { getMovies } from "./services/MovieService";
import Home from "./pages/Home";
import Search from "./pages/Search";
import {
  PopularMovies,
  NowPlayingMovies,
  TopRatedMovies,
  UpcomingMovies,
} from "./pages/movie";
import PopularTvShows from "./pages/tvShow/PopularTvShows";
import AiringTodayTvShows from "./pages/tvShow/AiringTodayTvShows";
import OnTvShows from "./pages/tvShow/OnTvShows";
import TopRatedTvShows from "./pages/tvShow/TopRatedTvShows";
import PopularPeople from "./pages/people/PopularPeople";
import Movie from "./pages/movie/Movie";
import MoviesGenre from "./pages/movie/MoviesGenre";
import Person from "./pages/Person";
import CastAndCrew from "./pages/movie/CastAndCrew";

const App = () => {
  const [query, setQuery] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [activeLink, setActiveLink] = useState("Popular");
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [backdrops, setBackdrops] = useState([]);

  // const API_KEY = "e5f34d07a7faa12dae140e0a4798d6ba";

  // useEffect(() => {
  //   const fetchPopularMovies = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { status, data: popularData } = await getMovies();

  //       if (status === 200) {
  //         setIsLoading(false);
  //         setPopularMovies(popularData);
  //         setBackdrops(popularData.results);
  //       }
  //     } catch (err) {
  //       setIsLoading(false);
  //       console.log(err.message);
  //     }
  //   };
  //   fetchPopularMovies();
  // }, []);

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        // API_KEY,
        isloading,
        activeLink,
        popularMovies,
        movies,
        backdrops,
        setMovies,
        setPopularMovies,
        setActiveLink,
        setIsLoading,
      }}
    >
      <MainLayout>
        <Navbar /> {/* <Toolbar /> */}{" "}
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/search" element={<Search />} />{" "}
          <Route path="/movie" element={<PopularMovies />} />{" "}
          <Route path="/movie/now_playing" element={<NowPlayingMovies />} />{" "}
          <Route path="/movie/top_rated" element={<TopRatedMovies />} />{" "}
          <Route path="/movie/upcoming" element={<UpcomingMovies />} />{" "}
          <Route path="/tv" element={<PopularTvShows />} />{" "}
          <Route path="/tv/airing-today" element={<AiringTodayTvShows />} />{" "}
          <Route path="/tv/on-the-air" element={<OnTvShows />} />{" "}
          <Route path="/tv/top-rated" element={<TopRatedTvShows />} />{" "}
          <Route path="/person" element={<PopularPeople />} />{" "}
          <Route path="/movie/:movieId" element={<Movie />} />{" "}
          <Route path="/genre/:genreId/movie" element={<MoviesGenre />} />{" "}
          <Route path="/person/:personId" element={<Person />} />{" "}
          <Route path="/movie/:movieId/cast" element={<CastAndCrew />} />{" "}
        </Routes>{" "}
        {/* <Footer /> */}{" "}
      </MainLayout>{" "}
    </MovieContext.Provider>
  );
};
export default App;

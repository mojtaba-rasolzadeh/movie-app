import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { MovieContext } from "./context/MovieContext";
import { MainLayout, Navbar } from "./components";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { PopularMovies, NowPlayingMovies, TopRatedMovies, UpcomingMovies } from "./pages/movie";
import PopularTvShows from "./pages/tvShow/PopularTvShows";
import AiringTodayTvShows from "./pages/tvShow/AiringTodayTvShows";
import OnTvShows from "./pages/tvShow/OnTvShows";
import TopRatedTvShows from "./pages/tvShow/TopRatedTvShows";
import PopularPeople from "./pages/people/PopularPeople";
import Movie from "./pages/movie/Movie";
import MoviesGenre from "./pages/movie/MoviesGenre";
import Person from "./pages/Person";
import MovieCastAndCrew from "./pages/movie/MovieCastAndCrew";
import MoviesKeyword from "./pages/movie/MoviesKeyword";
import Review from "./pages/Review";
import MovieReviews from "./pages/movie/MovieReviews";
import TrailersAndVideos from "./pages/movie/TrailersAndVideos";
import MovieBackdrops from "./pages/movie/MovieBackdrops";
import MoviePosters from "./pages/movie/MoviePosters";
import TvShow from "./pages/tvShow/TvShow";
import TvShowsGenre from "./pages/tvShow/TvShowsGenre";
import TvShowReviews from "./pages/tvShow/TvShowReviews";
import TvShowPosters from "./pages/tvShow/TvShowPosters";
import TvShowBackdrops from "./pages/tvShow/TvShowBackdrops";
import TvShowVideos from "./pages/tvShow/TvShowVideos";
import TvShowCastAndCrew from "./pages/tvShow/TvShowCastAndCrew";
import AllSeasons from "./pages/tvShow/AllSeasons";
import TvShowKeyword from "./pages/tvShow/TvShowKeyword";
import TvShowSeason from "./pages/tvShow/TvShowSeason";
import Movies from "./pages/movie/Movies";
import TvShows from "./pages/tvShow/TvShows";
import TrendingMovies from "./pages/movie/TrendingMovies";
import TrendingTvShows from "./pages/tvShow/TrendingTvShows";

const App = () => {
  const [query, setQuery] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [activeLink, setActiveLink] = useState("Popular");
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        isloading,
        activeLink,
        popularMovies,
        movies,
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
          {/* Movies */}
          <Route path="/search" element={<Search />} />{" "}
          <Route path="/movie" element={<Movies />} />{" "}
          <Route path="/movie/trending" element={<TrendingMovies />} />{" "}
          <Route path="/movie/popular" element={<PopularMovies />} />{" "}
          <Route path="/movie/now_playing" element={<NowPlayingMovies />} />{" "}
          <Route path="/movie/top_rated" element={<TopRatedMovies />} />{" "}
          <Route path="/movie/upcoming" element={<UpcomingMovies />} />{" "}
          <Route path="/person" element={<PopularPeople />} />{" "}
          <Route path="/movie/:movieId" element={<Movie />} />{" "}
          <Route path="/genre/:genreId/movie" element={<MoviesGenre />} />{" "}
          <Route path="/person/:personId" element={<Person />} />{" "}
          <Route path="/movie/:movieId/cast" element={<MovieCastAndCrew />} />{" "}
          <Route
            path="/keyword/:keywordId/movie"
            element={<MoviesKeyword />}
          />
          <Route path="/review/:reviewId" element={<Review />} />{" "}
          <Route path="/movie/:movieId/reviews" element={<MovieReviews />} />{" "}
          <Route path="/movie/:movieId/videos" element={<TrailersAndVideos />} />{" "}
          <Route path="/movie/:movieId/images/backdrops" element={<MovieBackdrops />} />{" "}
          <Route path="/movie/:movieId/images/posters" element={<MoviePosters />} />{" "}
          {/* TV Shows */}
          <Route path="/tv" element={<TvShows />} />{" "}
          <Route path="/tv/trending" element={<TrendingTvShows />} />{" "}
          <Route path="/tv/top-rated" element={<TopRatedTvShows />} />{" "}
          <Route path="/tv/popular" element={<PopularTvShows />} />{" "}
          <Route path="/tv/airing-today" element={<AiringTodayTvShows />} />{" "}
          <Route path="/tv/on-the-air" element={<OnTvShows />} />{" "}
          <Route path="/tv/:tvId" element={<TvShow />} />{" "}
          <Route path="/genre/:genreId/tv" element={<TvShowsGenre />} />{" "}
          <Route path="/tv/:tvId/reviews" element={<TvShowReviews />} />{" "}
          <Route path="/tv/:tvId/videos" element={<TvShowVideos />} />{" "}
          <Route path="/tv/:tvId/images/backdrops" element={<TvShowBackdrops />} />{" "}
          <Route path="/tv/:tvId/images/posters" element={<TvShowPosters />} />{" "}
          <Route path="/tv/:tvId/cast" element={<TvShowCastAndCrew />} />{" "}
          <Route path="/tv/:tvId/seasons" element={<AllSeasons />} />{" "}
          <Route path="/keyword/:keywordId/tv" element={<TvShowKeyword />} />
          <Route path="/tv/:tvId/season/:seasonId" element={<TvShowSeason />} />
        </Routes>{" "}
        {/* <Footer /> */}{" "}
      </MainLayout>{" "}
    </MovieContext.Provider>
  );
};
export default App;

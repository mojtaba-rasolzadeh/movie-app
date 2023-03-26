import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Person from "./pages/Person";
import Search from "./pages/Search";
import Review from "./pages/Review";
import Movie from "./pages/movie/Movie";
import Movies from "./pages/movie/Movies";
import TvShow from "./pages/tvShow/TvShow";
import TvShows from "./pages/tvShow/TvShows";
import OnTvShows from "./pages/tvShow/OnTvShows";
import Collection from "./pages/movie/Collection";
import { MainLayout, Navbar } from "./components";
import AllSeasons from "./pages/tvShow/AllSeasons";
import MoviesGenre from "./pages/movie/MoviesGenre";
import MovieReviews from "./pages/movie/MovieReviews";
import MoviePosters from "./pages/movie/MoviePosters";
import TvShowVideos from "./pages/tvShow/TvShowVideos";
import TvShowsGenre from "./pages/tvShow/TvShowsGenre";
import TvShowSeason from "./pages/tvShow/TvShowSeason";
import MoviesCompany from "./pages/movie/MoviesCompany";
import MoviesKeyword from "./pages/movie/MoviesKeyword";
import PopularPeople from "./pages/people/PopularPeople";
import TvShowReviews from "./pages/tvShow/TvShowReviews";
import TvShowPosters from "./pages/tvShow/TvShowPosters";
import TvShowKeyword from "./pages/tvShow/TvShowKeyword";
import TrendingMovies from "./pages/movie/TrendingMovies";
import MovieBackdrops from "./pages/movie/MovieBackdrops";
import PopularTvShows from "./pages/tvShow/PopularTvShows";
import TrendingTvShows from "./pages/tvShow/TrendingTvShows";
import TopRatedTvShows from "./pages/tvShow/TopRatedTvShows";
import TvShowBackdrops from "./pages/tvShow/TvShowBackdrops";
import MovieCastAndCrew from "./pages/movie/MovieCastAndCrew";
import TrailersAndVideos from "./pages/movie/TrailersAndVideos";
import TvShowCastAndCrew from "./pages/tvShow/TvShowCastAndCrew";
import AiringTodayTvShows from "./pages/tvShow/AiringTodayTvShows";
import TvShowsRelatedToTheNetwork from "./pages/tvShow/network/TvShowsRelatedToTheNetwork";
import {
  PopularMovies,
  NowPlayingMovies,
  TopRatedMovies,
  UpcomingMovies,
} from "./pages/movie";

const App = () => {
  return (
    <MainLayout>
      <Navbar /> {/* <Toolbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Movies */}
        <Route path="/movie" element={<Movies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/person" element={<PopularPeople />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="/review/:reviewId" element={<Review />} />
        <Route path="/person/:personId" element={<Person />} />
        <Route path="/movie/popular" element={<PopularMovies />} />
        <Route path="/movie/upcoming" element={<UpcomingMovies />} />
        <Route path="/movie/trending" element={<TrendingMovies />} />
        <Route path="/movie/top_rated" element={<TopRatedMovies />} />
        <Route path="/genre/:genreId/movie" element={<MoviesGenre />} />
        <Route path="/movie/now_playing" element={<NowPlayingMovies />} />
        <Route path="/collection/:collectionId" element={<Collection />} />
        <Route path="/movie/:movieId/reviews" element={<MovieReviews />} />
        <Route path="/movie/:movieId/cast" element={<MovieCastAndCrew />} />
        <Route path="/company/:companyId/movie" element={<MoviesCompany />} />
        <Route path="/keyword/:keywordId/movie" element={<MoviesKeyword />} />
        <Route path="/movie/:movieId/videos" element={<TrailersAndVideos />} />
        <Route
          path="/movie/:movieId/images/posters"
          element={<MoviePosters />}
        />
        <Route
          path="/movie/:movieId/images/backdrops"
          element={<MovieBackdrops />}
        />
        {/* TV Shows */}
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/:tvId" element={<TvShow />} />
        <Route path="/tv/on-the-air" element={<OnTvShows />} />
        <Route path="/tv/popular" element={<PopularTvShows />} />
        <Route path="/tv/:tvId/seasons" element={<AllSeasons />} />
        <Route path="/tv/trending" element={<TrendingTvShows />} />
        <Route path="/tv/:tvId/videos" element={<TvShowVideos />} />
        <Route path="/tv/top-rated" element={<TopRatedTvShows />} />
        <Route path="/genre/:genreId/tv" element={<TvShowsGenre />} />
        <Route path="/tv/:tvId/reviews" element={<TvShowReviews />} />
        <Route path="/tv/:tvId/cast" element={<TvShowCastAndCrew />} />
        <Route path="/tv/airing-today" element={<AiringTodayTvShows />} />
        <Route path="/keyword/:keywordId/tv" element={<TvShowKeyword />} />
        <Route path="/tv/:tvId/images/posters" element={<TvShowPosters />} />
        <Route path="/tv/:tvId/season/:seasonId" element={<TvShowSeason />} />
        <Route
          path="/tv/:tvId/images/backdrops"
          element={<TvShowBackdrops />}
        />
        <Route
          path="/network/:networkId"
          element={<TvShowsRelatedToTheNetwork />}
        />
      </Routes>
      {/* <Footer /> */}
    </MainLayout>
  );
};
export default App;

import { useState } from "react";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";

import { Filter, Sort, WatchProvider } from "./";
import { DiscoverContext } from "../../context/DiscoverContext";

const Discover = () => {
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [countries, setCountries] = useState([]);
  const [countryValue, setCountryValue] = useState(null);
  const [release_date_gte, setRelease_date_gte] = useState(null);
  const [release_date_lte, setRelease_date_lte] = useState(null);
  const [genresMovieList, setgenresMovieList] = useState([]);
  const [genreSelected, setGenreSelected] = useState(new Set());
  const [certificationMovieList] = useState(["AL", "6", "9", "12", "16"]);
  const [certificationSelected, setCertificationSelected] = useState(new Set());
  const [languagesMovieList, setLanguagesMovieList] = useState([]);
  const [languageValue, setLanguageValue] = useState(null);
  const [userScoreValue, setUserScoreValue] = useState(0);
  const [userVotesValue, setUserVotesValue] = useState(0);
  const [runtimeValue, setRuntimeValue] = useState(0);
  const [watchCountry, setWatchCountry] = useState([]);
  const [watchCountryValue, setWatchCountryValue] = useState(null);
  const [watchProviderMovies, setWatchProviderMovies] = useState([]);
  const [watchProviderMoviesSelected, setWatchProviderMoviesSelected] =
    useState(new Set());

  // const handleSearch = () => {
  //   console.log(
  //     `countryValue: ${countryValue.iso_3166_1} - releaseFrom: ${new Date(
  //       release_date_gte
  //     ).toLocaleDateString("en-US", {
  //       year: "numeric",
  //       month: "numeric",
  //       day: "numeric",
  //     })} - releaseTo: ${new Date(release_date_lte).toLocaleDateString(
  //       "en-US",
  //       {
  //         year: "numeric",
  //         month: "numeric",
  //         day: "numeric",
  //       }
  //     )} - genres: ${genreSelected}`
  //   );
  // };

  return (
    <DiscoverContext.Provider
      value={{
        sortBy,
        setSortBy,
        countries,
        setCountries,
        countryValue,
        setCountryValue,
        release_date_gte,
        release_date_lte,
        setRelease_date_gte,
        setRelease_date_lte,
        genresMovieList,
        setgenresMovieList,
        genreSelected,
        setGenreSelected,
        certificationMovieList,
        certificationSelected,
        setCertificationSelected,
        languagesMovieList,
        setLanguagesMovieList,
        languageValue,
        setLanguageValue,
        userScoreValue,
        setUserScoreValue,
        userVotesValue,
        setUserVotesValue,
        runtimeValue,
        setRuntimeValue,
        watchCountry,
        setWatchCountry,
        watchCountryValue,
        setWatchCountryValue,
        watchProviderMovies,
        setWatchProviderMovies,
        setWatchProviderMoviesSelected,
        watchProviderMoviesSelected,
      }}
    >
      <Sort />
      <Filter />
      <WatchProvider />
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: blue[500],
          color: "#fff",
          letterSpacing: 1,
          fontWeight: 700,
        }}
        // onClick={handleSearch}
      >
        Search
      </Button>
    </DiscoverContext.Provider>
  );
};
export default Discover;

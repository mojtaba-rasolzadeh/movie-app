import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import {
  getSearchCollections,
  getSearchCompanies,
  getSearchKeywords,
  getSearchMovies,
  getSearchPeople,
  getSearchTvShows,
} from "../services/MovieService";
import { Loader } from "../components/constant";
import { Movies, TvShows, People, Collections, Companies, Keywords, SearchPanel } from "../components/pages/search";
import TabPanel from "../components/constant/TabPanel";
import { SearchInputStandard } from "../components/constant/SearchInputs";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState({});
  const [tvShows, setTvShows] = useState({});
  const [people, setPeople] = useState({});
  const [collections, setCollections] = useState({});
  const [companies, setCompanies] = useState({});
  const [keywords, setKeywords] = useState({});

  const [value, setValue] = useState(0);
  const query = searchParams.get("query");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const displayLengthItem = (item) => {
    let result;
    switch (item) {
      case 'movies':
        result = movies.total_results?.toLocaleString();
        break;
      case 'tvShows':
        result = tvShows.total_results?.toLocaleString();
        break;
      case 'people':
        result = people.total_results?.toLocaleString();
        break;
      case 'collections':
        result = collections.total_results?.toLocaleString();
        break;
      case 'companies':
        result = companies.total_results?.toLocaleString();
        break;
      case 'keywords':
        result = keywords.total_results?.toLocaleString();
        break;
      default:
        return
    }
    return result;
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: moviesData } = await getSearchMovies(query);
        const { data: tvShowsData } = await getSearchTvShows(query);
        const { data: peopleData } = await getSearchPeople(query);
        const { data: collectionData } = await getSearchCollections(query);
        const { data: companiesData } = await getSearchCompanies(query);
        const { status, data: keywordsData } = await getSearchKeywords(query);

        if (status === 200) {
          setLoading(false);
          setMovies(moviesData);
          setTvShows(tvShowsData);
          setPeople(peopleData);
          setCollections(collectionData);
          setCompanies(companiesData);
          setKeywords(keywordsData);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{`${query}`} | Movie App</title>
          </Helmet>
          <Box sx={{ mb: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SearchInputStandard searchParams={searchParams} />
            </Box>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={4} lg={3} xl={1.6}>
                <SearchPanel
                  value={value}
                  handleChange={handleChange}
                  displayLengthItem={displayLengthItem} />
              </Grid>
              <Grid xs={12} sm={6} md={8} lg={9} xl={10.4}>
                <TabPanel value={value} index={0}>
                  <Movies moviesData={movies} query={query} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <TvShows tvShowsData={tvShows} query={query} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <People peopleData={people} query={query} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Collections collectionsData={collections} query={query} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <Companies companiesData={companies} query={query} />
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <Keywords keywordsData={keywords} query={query} />
                </TabPanel>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};
export default Search;

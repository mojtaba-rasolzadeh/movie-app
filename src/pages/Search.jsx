import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey, orange, teal, yellow } from "@mui/material/colors";

import {
  getSearchCollections,
  getSearchCompanies,
  getSearchKeywords,
  getSearchMovies,
  getSearchPeople,
  getSearchTvShows,
} from "../services/MovieService";
import { Loader } from "../components/constant";
import Movies from "../components/pages/search/movies/Movies";
import TvShows from "../components/pages/search/tvShows/TvShows";
import People from "../components/pages/search/people/People";
import Collections from "../components/pages/search/collections/Collections";
import Companies from "../components/pages/search/companies/Companies";
import Keywords from "../components/pages/search/keywords/Keywords";
import { SearchInputStandard } from "../components/constant/SearchInputs";
import TabPanel from "../components/constant/TabPanel";

function tabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

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

  const tabsTitle = ["movies", "tvShows", "people", "collections", "companies", "keywords"];

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
        <Box sx={{ mb: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SearchInputStandard searchParams={searchParams} />
          </Box>
          <Grid container spacing={{ xs: 3, sm: 2 }} sx={{ width: "100%" }}>
            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card sx={{ maxWidth: 258, height: 385 }}>
                <CardHeader
                  title="Search Results"
                  sx={{ backgroundColor: teal[500] }}
                />
                <CardContent>
                  <Tabs
                    orientation="vertical"
                    // variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="vertical tabs example"
                    sx={{
                      borderRight: 1,
                      borderColor: "divider",
                      height: 288,
                      ".Mui-selected": {
                        backgroundColor: grey[800],
                        color: "#ffeb3b!important",
                      },
                      ".MuiTabs-indicator": {
                        backgroundColor: yellow[500],
                      },
                    }}
                  >
                    {
                      tabsTitle.map((text, index) => (
                        <Tab
                          key={index}
                          label={
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>{text}</Typography>
                              <Chip
                                label={
                                  <Typography
                                    variant="caption"
                                    color="text.primary"
                                    sx={{
                                      ".Mui-selected": { color: yellow[500] },
                                    }}
                                  >
                                    {displayLengthItem(text)}
                                    {/* {movies.total_results !== undefined && (movies.total_results).toLocaleString()} */}
                                  </Typography>
                                }
                                size="small"
                                sx={{
                                  backgroundColor: orange[500],
                                }}
                              />
                            </Box>
                          }
                          {...tabProps(index)}
                          sx={{
                            borderRadius: 1,
                            mr: 1,
                          }}
                        />
                      ))
                    }
                  </Tabs>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={8} lg={9} xl={10}>
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
      )}
    </>
  );
};
export default Search;

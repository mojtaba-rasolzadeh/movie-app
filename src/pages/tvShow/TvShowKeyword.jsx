import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Chip } from "@mui/material";

import TvShowPagination from "../../components/pages/tvShows/TvShowPagination";
import { getKeywordDetails, getTvShowsRelatedToTheKeyword } from "../../services/MovieService";
import TvShowItem from "../../components/pages/tvShows/TvShowItem";
import MovieAndTvShowSkeleton from "../../components/pages/constant/skeletons/MovieAndTvShowSkeleton";

const TvShowKeyword = () => {
  const { keywordId } = useParams();
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);
  const [keyword, setKeyword] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data: TvShowsData } = await getTvShowsRelatedToTheKeyword(
        parseInt(keywordId),
        page
      );
      const { data: keywordData } = await getKeywordDetails(
        parseInt(keywordId)
      );
      if (status === 200) {
        setLoading(false);
        setTvShows(TvShowsData);
        setKeyword(keywordData);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" sx={{
          fontSize: { xs: '1rem', sm: '1.5rem' },
          letterSpacing: 1,
        }}>
          {keyword?.name}
        </Typography>
        {tvShows.total_results && (
          <Chip
            label={
              <Typography variant="body1">
                {tvShows.total_results?.toLocaleString()}{" "}
                shows
              </Typography>
            }
            variant="outlined"
          />
        )}
      </Box>
      {
        loading ? (<MovieAndTvShowSkeleton />) : (
          <>
            <Helmet>
              <title>{`"${keyword.name}"`} Tv Shows | Movie App</title>
            </Helmet>
            <TvShowItem tvShowData={tvShows} />
          </>
        )
      }
      <TvShowPagination fetchData={fetchData} tvShowData={tvShows} />
    </Box >
  );
};

export default TvShowKeyword;

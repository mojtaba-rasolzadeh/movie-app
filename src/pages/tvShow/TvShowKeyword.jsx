import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Divider, Chip } from "@mui/material";

import TvShowPagination from "../../components/pages/tvShows/TvShowPagination";
import { Loader } from "../../components";

import { getKeywordDetails, getTvShowsRelatedToTheKeyword } from "../../services/MovieService";
import TvShowItem from "../../components/pages/tvShows/TvShowItem";

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
        <Link
          href={`/keyword/${keyword?.id}-${keyword?.name}/tv`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: 1,
              background: 'linear-gradient(to right,#ED4700,#E76F00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {keyword?.name}
          </Typography>
        </Link>
        {tvShows.total_results && (
          <Chip
            label={
              <Typography variant="body1">
                {tvShows.total_results?.toLocaleString()}{" "}
                shows
              </Typography>
            }
            sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
          />
        )}
      </Box>
      <Divider />
      {
        loading ? (<Loader />) : (
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

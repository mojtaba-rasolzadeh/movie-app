import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";
import { blueGrey, deepOrange, grey, lime, teal } from "@mui/material/colors";

import TvShowPagination from "../../components/pages/tvShows/TvShowPagination";
import { Loader } from "../../components";

import {
  getKeywordDetails,
  getTvShowsRelatedToTheKeyword,
} from "../../services/MovieService";

const TvShowKeyword = () => {
  const { keywordId } = useParams();
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);
  const [keyword, setKeyword] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data:TvShowsData } = await getTvShowsRelatedToTheKeyword(
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
          href={`/keyword/${keyword && keyword.id}-${keyword && keyword.name}/tv`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: 2,
              color: teal[400],
              "&:hover": {
                color: teal[500],
              },
            }}
          >
            {keyword && keyword.name}
          </Typography>
        </Link>
        {tvShows.total_results && (
          <Chip
            label={
              <Typography variant="body1">
                {tvShows.total_results && tvShows.total_results.toLocaleString()}{" "}
                shows
              </Typography>
            }
            sx={{ backgroundColor: deepOrange[500] }}
          />
        )}
      </Box>
      <Divider />
      {loading ? (
        <Loader />
      ) : (
        tvShows.results &&
        tvShows.results.map((tv) => (
          <Card key={tv && tv.id} sx={{ display: "flex", my: 3, height: 141 }}>
            <CardActionArea sx={{ width: 94 }}>
              <Link
                to={`/tv/${tv && tv.id}`}
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  variant="square"
                  sx={{ width: 94, height: 141 }}
                  src={`https:image.tmdb.org/t/p/w94_and_h141_bestv2${tv && tv.poster_path}`}
                  alt={tv && tv.title}
                />
              </Link>
            </CardActionArea>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Link
                  to={`/tv/${tv.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      display: "inline",
                      letterSpacing: 1,
                      fontSize: "1.20rem",
                      fontWeight: 700,
                      color: lime[500],
                      "&:hover": { color: lime[700] },
                    }}
                  >
                    {tv && tv.name}
                  </Typography>
                </Link>
                <Typography
                  component="p"
                  variant="caption"
                  sx={{ color: blueGrey[500], letterSpacing: 1 }}
                >
                  {new Date(tv && tv.first_air_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    mt: 1,
                    color: grey[500],
                    fontWeight: 300,
                    display: " -webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {tv && tv.overview}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))
      )}
      <TvShowPagination fetchData={fetchData} tvShowData={tvShows} />
    </Box>
  );
};

export default TvShowKeyword;

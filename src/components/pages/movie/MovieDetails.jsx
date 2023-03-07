import { useState } from "react";
import { Card, CardContent, Box } from "@mui/material";

import { MoviePoster, MovieTitle, OverviewAndTagline, TrailerShow, RuntimeMovie, GenresMovie, MovieScore, ReleaseDateMovie, DarkCover, PlayTrialerButton } from './';

const MovieDetails = ({
  id,
  backdrop_path,
  poster_path,
  title,
  original_title,
  release_date,
  genres,
  runtime,
  vote_average,
  tagline,
  overview,
  videos,
}) => {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [trailer, setTrailer] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
  };

  const displayTrailer = () => {
    setOpen(!open);
    setPlay(!play);
    const trailer = videos.results.find(
      (video) => video.name === "Official Trailer"
    );
    setTrailer(trailer ? trailer : videos.results[0]);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          maxHeight: 570,
          mt: 5,
          padding: { xs: "0", md: "30px 40px" },
          position: "relative",
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
          backgroundPosition: { xs: 'center', md: "right -200px top" },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: 0,
        }}
      >
        <DarkCover />
        <MoviePoster title={title} poster_path={poster_path} />
        <CardContent sx={{ pl: { md: 5 }, zIndex: 10 }}>
          <Box>
            <MovieTitle id={id} original_title={original_title} title={title} release_date={release_date} />
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0.75, mt: 1 }}>
              <ReleaseDateMovie release_date={release_date} />
              <GenresMovie genres={genres} />
              <RuntimeMovie runtime={runtime} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", gap: 4, my: 3 }}>
            <MovieScore vote_average={vote_average} />
            <PlayTrialerButton videos={videos} displayTrailer={displayTrailer} />
          </Box>
          <OverviewAndTagline tagline={tagline} overview={overview} />
        </CardContent>
      </Card>
      <TrailerShow open={open} handleClose={handleClose} trailer={trailer} play={play} />
    </>
  );
};
export default MovieDetails;
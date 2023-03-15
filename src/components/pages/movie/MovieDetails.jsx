import { useState } from "react";

import { MovieTitle, RuntimeMovie, GenresMovie, RatingMovie, ReleaseDateMovie } from './';

const MovieDetails = ({
  title,
  release_date,
  genres,
  runtime,
  vote_average,
  imdb_id,
}) => {
  

  return (
    <>
      <ReleaseDateMovie release_date={release_date} />
      <MovieTitle title={title} />
      <GenresMovie genres={genres} />
      <RuntimeMovie runtime={runtime} />
      <RatingMovie imdb_id={imdb_id} vote_average={vote_average} />
    </>
  );
};
export default MovieDetails;
{/* <Card
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
<TrailerShow open={open} handleClose={handleClose} trailer={trailer} play={play} /> */}
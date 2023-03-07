import { useState } from "react";
import { Card, CardContent, Box } from "@mui/material";

import { DarkCover, TvShowPoster, TvShowTitle, ReleaseDateTvShow, GenresTvShow, RuntimeTvShow, TvShowScore, PlayTrialerButton, OverviewAndTagline, TrailerShow } from './';

const TvShowDetails = ({
    id,
    backdrop_path,
    poster_path,
    name,
    original_name,
    first_air_date,
    genres,
    episode_run_time,
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
                    // height: 510,
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
                <TvShowPoster id={id} original_name={original_name} name={name} poster_path={poster_path} />
                <CardContent sx={{ pl: { md: 5 }, zIndex: 10 }}>
                    <Box>
                        <TvShowTitle id={id} original_name={original_name} name={name} first_air_date={first_air_date} />
                        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0.75, mt: 1 }}>
                            <ReleaseDateTvShow first_air_date={first_air_date} />
                            <GenresTvShow genres={genres} />
                            <RuntimeTvShow episode_run_time={episode_run_time} />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: "center", gap: 4, my: 3 }}>
                        <TvShowScore vote_average={vote_average} />
                        <PlayTrialerButton videos={videos} displayTrailer={displayTrailer} />
                    </Box>
                    <OverviewAndTagline tagline={tagline} overview={overview} />
                </CardContent>
            </Card>
            <TrailerShow open={open} handleClose={handleClose} trailer={trailer} play={play} />
        </>
    );
};
export default TvShowDetails;

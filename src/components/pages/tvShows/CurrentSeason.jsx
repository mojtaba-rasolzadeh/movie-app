import { Link } from "react-router-dom";
import _ from "lodash";
import {
    Box,
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@mui/material";

import { teal } from "@mui/material/colors";

const CurrentSeason = ({ id, name, seasons }) => {
    console.log(seasons)
    return (
        <Box sx={{ my: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, color: teal[500] }}>
                Current Season
            </Typography>
            {seasons && _.isEmpty(seasons) ? (
                <Box>
                    <Typography color="text.secondary">
                        We don't have any cast added to this tv. You can help by adding
                        some!
                    </Typography>
                    <Box
                        sx={{
                            my: 3,
                        }}
                    >
                        <Link to="#" style={{ textDecoration: "none" }}>
                            <Typography
                                sx={{
                                    letterSpacing: 1,
                                    fontWeight: "600",
                                    color: "#fff",
                                    "&:hover": { color: "text.secondary" },
                                }}
                            >
                                Add Missing Cast & Crew
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            ) : (
                <>
                    {
                        seasons && seasons.map((season) => (
                            <Card key={season.id} sx={{ display: 'flex' }}>
                                <CardActionArea sx={{ width: 130, borderRadius: 1 }}>
                                    <Link
                                        to={`/tv/${id}-${name &&
                                            name
                                                .split(/[\s:,]/)
                                                .join("-")
                                                .split("--")
                                                .join("-")
                                                .toLowerCase()
                                            }/season/${season.season_number}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Avatar
                                            variant="rounded"
                                            sx={{ width: 130, height: 195 }}
                                            src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2${season.poster_path}`}
                                        />
                                    </Link>
                                </CardActionArea>
                                <CardContent
                                    sx={{
                                        p: 1.5,
                                        "&:last-child": {
                                            paddingBottom: 1.5,
                                        },
                                    }}
                                >
                                    <Link
                                        to={`/tv/${id}-${name &&
                                            name
                                                .split(/[\s:,]/)
                                                .join("-")
                                                .split("--")
                                                .join("-")
                                                .toLowerCase()
                                            }/season/${season.season_number}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                letterSpacing: 1,
                                                color: "#fff",
                                                "&:hover": { color: "text.secondary" },
                                            }}
                                            gutterBottom
                                        >
                                            {season.name}
                                        </Typography>
                                    </Link>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            letterSpacing: 1,
                                        }}
                                    >
                                        {`${season.air_date.substring(0, 4)} | ${season.episode_count} Episodes`}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary"
                                        sx={{
                                            letterSpacing: 1,
                                            mt: 3
                                        }}
                                    >
                                        {`${season.name} of The Last of Us premiered on ${new Date(season.air_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.`}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                    <Box
                        sx={{
                            my: 3,
                        }}
                    >
                        <Link
                            to={`/tv/${id}-${name &&
                                name
                                    .split(/[\s:,]/)
                                    .join("-")
                                    .split("--")
                                    .join("-")
                                    .toLowerCase()
                                }/seasons`}
                            style={{ textDecoration: "none" }}
                        >
                            <Typography
                                sx={{
                                    display: "inline-block",
                                    fontWeight: "600",
                                    color: "#fff",
                                    "&:hover": { color: "text.secondary" },
                                }}
                            >
                                View All Seasons
                            </Typography>
                        </Link>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default CurrentSeason;

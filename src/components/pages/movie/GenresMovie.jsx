import _ from "lodash";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { LocalMoviesRounded } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const GenresMovie = ({ genres }) => {
    return (
        <>
            {!_.isEmpty(genres) && (
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: 0.5,
                    }}
                >
                    <LocalMoviesRounded sx={{ color: pink[500] }} />
                    {genres.map((genre, index) => (
                        <Link
                            key={genre.id}
                            to={`/genre/${genre.id}-${genre.name?.toLowerCase().split(" ").join("-")
                                }/movie`}
                            underline="none"
                            style={{ textDecoration: "none" }}
                        >
                            <Typography
                                sx={{
                                    color: "#fff",
                                    "&:hover": { color: "text.secondary" },
                                }}
                            >
                                {(index ? "," : "") + genre.name}
                            </Typography>
                        </Link>
                    ))}
                </Box>
            )}
        </>
    );
}

export default GenresMovie;
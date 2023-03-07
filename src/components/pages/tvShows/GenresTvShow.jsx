import { Link } from "react-router-dom";
import _ from "lodash";
import { Box, Typography } from "@mui/material";
import { LocalMoviesRounded } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const GenresTvShow = ({ genres }) => {
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
                            to={`/genre/${genre.id}-${genre?.name.split(/[\s:,&]/)
                                    .join("-")
                                    .split("--")
                                    .join("")
                                    .toLowerCase()
                                }/tv`}
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
            )
            }
        </>
    );
}

export default GenresTvShow;
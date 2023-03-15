import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { LocalMoviesRounded } from "@mui/icons-material";

const GenresMovie = ({ genres }) => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                <LocalMoviesRounded sx={{ color: '#ff004d' }} />
                {genres?.map((genre, index) => (
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
                            {(index ? ", " : "") + genre.name}
                        </Typography>
                    </Link>
                ))}
            </Box>
        </>
    );
}

export default GenresMovie;
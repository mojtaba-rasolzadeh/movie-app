import { Avatar, CardActionArea, Link } from "@mui/material";

const MoviePoster = ({ title, poster_path }) => {
    return (
        <CardActionArea
            sx={{
                display: { xs: "none", md: "inline-block" },
                width: 300,
                height: 450,
                borderRadius: '20px',
            }}
        >
            <Link href="#" underline="none">
                <Avatar
                    variant="rounded"
                    sx={{ width: 300, height: 450, borderRadius: '20px' }}
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                    alt={title}
                />
            </Link>
        </CardActionArea>
    );
}

export default MoviePoster;
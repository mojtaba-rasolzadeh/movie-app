import { Typography } from "@mui/material";

const MovieTitle = ({ title }) => {
    return (
        <Typography
            variant="h4"
            sx={{
                fontWeight: 700,
                letterSpacing: 1
            }}
            gutterBottom
        >
            {title}
        </Typography>
    );
}

export default MovieTitle;
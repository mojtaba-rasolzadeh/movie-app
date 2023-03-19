import { Typography } from "@mui/material";

const TvShowTitle = ({ name }) => {

    return (
        <Typography
            variant="h4"
            sx={{
                fontWeight: 700,
                letterSpacing: 1
            }}
            gutterBottom
        >
            {name}
        </Typography>
    )
}
export default TvShowTitle;
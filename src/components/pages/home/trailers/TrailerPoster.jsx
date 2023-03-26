import { Avatar } from "@mui/material";

const TrailerPoster = ({ backdrop_path }) => {
    return (
        <Avatar
            variant="rounded"
            sx={{
                maxWidth: { xs: 250, sm: 300 },
                width: { xs: 250, sm: 300 },
                height: 168,
            }}
            src={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces${backdrop_path}`}
        />
    );
}

export default TrailerPoster;
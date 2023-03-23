import { Avatar } from "@mui/material";

const CollectionPoster = ({ poster_path, name }) => {
    return (
        <Avatar
            variant="rounded"
            sx={{
                display: 'flex',
                width: { xs: 300, md: 1 },
                height: 450,
                borderRadius: '20px'
            }}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt={name}
        />
    );
}

export default CollectionPoster;
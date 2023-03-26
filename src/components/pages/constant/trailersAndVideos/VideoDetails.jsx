import { Typography, Link } from "@mui/material";

const VideoDetails = ({ video }) => {
    return (
        <>
            <Link
                href={`https://www.youtube.com/watch?v=${video.key}`}
                underline="none"
                target="_blank">
                <Typography
                    variant="body2"
                    sx={{ color: '#fff', '&:hover': { color: 'text.secondary' } }}
                    gutterBottom>
                    {video.name}
                </Typography>
            </Link>
            <Typography
                variant="caption"
                color="text.secondary">
                {`${video.type} • ${new Date(video.published_at).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: "numeric" })}`}
            </Typography>
        </>
    );
}

export default VideoDetails;
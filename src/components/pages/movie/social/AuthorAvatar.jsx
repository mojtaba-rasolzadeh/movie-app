import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const AuthorAvatar = ({ review }) => {
    return (
        <Avatar
            src={`https://image.tmdb.org/t/p/w64_and_h64_face/${review?.author_details.avatar_path}`}
            alt={review.author}
            sx={{
                display: { xs: "none", sm: "inline-flex" },
                width: 64,
                height: 64,
                bgcolor: deepOrange[500],
                color: "#fff",
            }}
        />
    );
}

export default AuthorAvatar;
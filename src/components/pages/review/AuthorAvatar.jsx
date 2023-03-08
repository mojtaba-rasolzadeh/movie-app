import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const AuthorAvatar = ({ review }) => {

    return (
        <Avatar
            variant="circular"
            sx={{
                width: 64,
                height: 64,
                bgcolor: deepOrange[500],
                color: "#fff"
            }}
            src={`https://www.themoviedb.org/t/p/w64_and_h64_face${review.author_details?.avatar_path}`} alt={review.author_details?.username} />
    );
}

export default AuthorAvatar;
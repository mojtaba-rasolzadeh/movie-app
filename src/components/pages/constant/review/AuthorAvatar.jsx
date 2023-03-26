import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const AuthorAvatar = ({ author_details, author, size }) => {
    return (
        <Avatar
            src={`https://image.tmdb.org/t/p/w64_and_h64_face${author_details?.avatar_path}`}
            alt={author}
            sx={{
                display: { xs: "none", sm: "inline-flex" },
                width: size,
                height: size,
                bgcolor: deepOrange[500],
                color: "#fff",
            }}
        />
    );
}

export default AuthorAvatar;
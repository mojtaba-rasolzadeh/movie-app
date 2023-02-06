import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { lime, teal } from "@mui/material/colors";

const BackToMain = ({ media_type, media_data, searchParams }) => {

  return (
    <Box sx={{ my: 4, display: "flex", gap: 2 ,bgcolor:teal[900],p:2,borderRadius:1 }}>
      <Link
        to={`/${media_type}/${searchParams}`}
        style={{ textDecoration: "none" }}
      >
        <Avatar
          variant="rounded"
          sx={{ width: 58, height: 87 }}
          src={`https://www.themoviedb.org/t/p/w58_and_h87_face${media_data.poster_path}`}
        />
      </Link>
      <Box>
        <Link
          to={`/${media_type}/${searchParams}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="h5"
            sx={{
              letterSpacing: 1,
              fontWeight: "700",
              color: lime[500],
              "&:hover": { color: lime[700] },
            }}
          >
            {media_type === 'movie' ? media_data.title : media_data.name}{" "}
            <Typography
              variant="h6"
              sx={{ display: "inline-block", color: lime[200] }}
            >
              {" "}{` (${media_type === 'tv' ? (media_data.first_air_date && media_data.first_air_date.substring(0, 4)) : (media_data.release_date && media_data.release_date.substring(0, 4))})`}{" "}

            </Typography>
          </Typography>
        </Link>
        <Link
          to={`/${media_type}/${searchParams}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "#fff",
              "&:hover": {
                color: "text.secondary",
              },
            }}
          >
            <KeyboardBackspace />
            Back to main
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default BackToMain;

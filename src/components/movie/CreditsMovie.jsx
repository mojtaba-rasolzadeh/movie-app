import { Link } from "react-router-dom";
import {
  Card,
  Avatar,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { blueGrey, teal } from "@mui/material/colors";

const CreditsMovie = ({ id, name, profile_path, character }) => {
  return (
    <Card key={id} sx={{ maxWidth: 138, width: 138 }}>
      <CardActionArea>
        <Link to={`/person/${id}-${name.toLowerCase().split(" ").join("-")}`}>
          <Avatar
            variant="square"
            src={`https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`}
            sx={{ width: 1, height: 175 }}
          />
        </Link>
      </CardActionArea>
      <CardContent sx={{ padding: "10px" }}>
        <Link
          to={`/person/${id}-${name.toLowerCase().split(" ").join("-")}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              color: blueGrey[300],
              "&:hover": { color: blueGrey[500] },
            }}
          >
            {name}
          </Typography>
        </Link>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: "400", mt: 1, color: blueGrey[100] }}
        >
          {character}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreditsMovie;

import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const ActorName = ({ id, name }) => {
  return (
    <Link to={`/person/${id}`} style={{ textDecoration: "none" }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          letterSpacing: 1,
          color: "#fff",
          "&:hover": { color: grey[600] },
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ActorName;

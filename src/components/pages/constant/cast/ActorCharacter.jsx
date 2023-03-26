import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const ActorCharacter = ({ character }) => {
  return (
    <Typography
      variant="caption"
      sx={{
        letterSpacing: 1,
        fontWeight: 700,
        color: grey[600],
      }}
    >
      {character}
    </Typography>
  );
};

export default ActorCharacter;

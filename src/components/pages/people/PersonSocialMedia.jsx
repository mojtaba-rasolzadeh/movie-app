import { Tooltip, IconButton, Box } from "@mui/material";
import { indigo, grey } from "@mui/material/colors";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const PersonSocialMedia = ({ facebook_id, twitter_id, instagram_id }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.5,
        p: 1,
      }}
    >
      {facebook_id && (
        <Tooltip title="Visit Facebook">
          <IconButton
            href={`https://facebook.com/${facebook_id}`}
            target="_blank"
            sx={{ color: grey[600], "&:hover": { color: indigo[800] } }}
          >
            <Facebook />
          </IconButton>
        </Tooltip>
      )}
      {twitter_id && (
        <Tooltip title="Visit Twitter">
          <IconButton
            href={`https://twitter.com/${twitter_id}`}
            target="_blank"
            sx={{ color: grey[600], "&:hover": { color: "info.main" } }}
          >
            <Twitter />
          </IconButton>
        </Tooltip>
      )}
      {instagram_id && (
        <Tooltip title="Visit Instagram">
          <IconButton
            href={`https://instagram.com/${instagram_id}/`}
            target="_blank"
            sx={{ color: grey[600], "&:hover": { color: "error.main" } }}
          >
            <Instagram />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
export default PersonSocialMedia;

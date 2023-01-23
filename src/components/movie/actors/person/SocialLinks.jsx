import { Box, Tooltip, IconButton } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const SocialLinks = ({ facebook_id, twitter_id, instagram_id }) => {
  return (
    <Box sx={{ display: "flex", my: 3 }}>
      {facebook_id !== null && (
        <Tooltip title="Visit Facebook">
          <IconButton
            href={`https://facebook.com/${facebook_id}`}
            sx={{ color: blue[700] }}
          >
            <Facebook />
          </IconButton>
        </Tooltip>
      )}
      {twitter_id !== null && (
        <Tooltip title="Visit Twitter">
          <IconButton
            href={`https://twitter.com/${twitter_id}`}
            sx={{ color: blue[700] }}
          >
            <Twitter />
          </IconButton>
        </Tooltip>
      )}
      {instagram_id !== null && (
        <Tooltip title="Visit Instagram">
          <IconButton
            href={`https://instagram.com/${instagram_id}/`}
            color="error"
          >
            <Instagram />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
export default SocialLinks;

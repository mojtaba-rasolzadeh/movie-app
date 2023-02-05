import { Divider, Box, IconButton, Link, Tooltip } from "@mui/material";
import {
  Facebook,
  InsertLinkRounded,
  Instagram,
  LinkRounded,
  SlowMotionVideo,
  Twitter,
} from "@mui/icons-material";

const SocialLinks = ({ facebook_id, twitter_id, instagram_id, homepage }) => {
  return (
    <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
      {facebook_id && (
        <Tooltip title="Visit Facebook" placement="top">
          <IconButton
            color="info"
            href={`https://facebook.com/${facebook_id}`}
            target="_blank"
          >
            <Facebook />
          </IconButton>
        </Tooltip>
      )}
      {twitter_id && (
        <Tooltip title="Visit Twitter" placement="top">
          <IconButton
            color="info"
            href={`https://twitter.com/${twitter_id}`}
            target="_blank"
          >
            <Twitter />
          </IconButton>
        </Tooltip>
      )}
      {instagram_id && (
        <Tooltip title="Visit Instagram" placement="top">
          <IconButton
            color="error"
            href={`https://instagram.com/${instagram_id}/`}
            target="_blank"
          >
            <Instagram />
          </IconButton>
        </Tooltip>
      )}
      {/* <Tooltip title="Visit JustWatch" placement="top">
        <IconButton color="success">
          <SlowMotionVideo />
        </IconButton>
      </Tooltip> */}
      {homepage && (
        <Tooltip title="Visit Homepage" placement="top">
          <IconButton color="warning" href={homepage} target="_blank">
            <LinkRounded />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default SocialLinks;

import { IconButton, Tooltip, Card } from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  LinkRounded,
  SlowMotionVideo,
  Twitter,
} from "@mui/icons-material";
import { indigo } from "@mui/material/colors";

const SocialLinks = ({ external_ids, homepage }) => {

  return (
    <Card sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', gap: 0.5, mt: { xs: 4, md: 1 }, p: 2, borderRadius: '20px' }}>
      <Tooltip title="Visit Facebook" placement="top">
        <IconButton
          href={`https://facebook.com/${external_ids?.facebook_id}`}
          target="_blank"
          sx={{ color: indigo[800] }}
        >
          <FacebookRounded />
        </IconButton>
      </Tooltip>
      <Tooltip title="Visit Twitter" placement="top">
        <IconButton
          color="info"
          href={`https://twitter.com/${external_ids?.twitter_id}`}
          target="_blank"
        >
          <Twitter />
        </IconButton>
      </Tooltip>
      <Tooltip title="Visit Instagram" placement="top">
        <IconButton
          color="error"
          href={`https://instagram.com/${external_ids?.instagram_id}/`}
          target="_blank"
        >
          <Instagram />
        </IconButton>
      </Tooltip>
      <Tooltip title="Visit IMDB" placement="top">
        <IconButton color="success" href={`https://m.imdb.com/title/${external_ids?.imdb_id}`} target="_blank">
          <SlowMotionVideo />
        </IconButton>
      </Tooltip>
      <Tooltip title="Visit Homepage" placement="top">
        <IconButton color="warning" href={homepage} target="_blank">
          <LinkRounded />
        </IconButton>
      </Tooltip>
    </Card>
  );
};

export default SocialLinks;

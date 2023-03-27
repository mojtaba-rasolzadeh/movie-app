import { grey, indigo } from "@mui/material/colors";
import { IconButton, Tooltip, Card } from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  LinkRounded,
  SlowMotionVideo,
  Twitter,
} from "@mui/icons-material";

const SocialLinks = ({
  facebook_id,
  twitter_id,
  instagram_id,
  imdb_id,
  homepage,
}) => {
  const linksInfo = [
    {
      title: "Visit Facebook",
      href: facebook_id && `https://facebook.com/${facebook_id}`,
      color: indigo[800],
      icon: <FacebookRounded />,
    },
    {
      title: "Visit Twitter",
      href: twitter_id && `https://twitter.com/${twitter_id}`,
      color: "info.main",
      icon: <Twitter />,
    },
    {
      title: "Visit Instagram",
      href: instagram_id && `https://instagram.com/${instagram_id}/`,
      color: "error.main",
      icon: <Instagram />,
    },
    {
      title: "Visit IMDB",
      href: imdb_id && `https://m.imdb.com/title/${imdb_id}`,
      color: "success.main",
      icon: <SlowMotionVideo />,
    },
    {
      title: "Visit Homepage",
      href: homepage && `${homepage}`,
      color: "warning.main",
      icon: <LinkRounded />,
    },
  ];

  let content;
  if (facebook_id || twitter_id || instagram_id || imdb_id || homepage) {
    content = (
      <Card
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          mt: { xs: 4, md: 2 },
          p: 2,
          borderRadius: "20px",
        }}
      >
        {linksInfo.map(
          (link, index) =>
            link.href && (
              <Tooltip key={index} title={link.title} placement="top">
                <IconButton
                  href={link.href}
                  target="_blank"
                  sx={{
                    color: grey[500],
                    "&:hover": { color: link.color },
                  }}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
            )
        )}
      </Card>
    );
  } else {
    content = null;
  }

  return content;
};

export default SocialLinks;

import { Tooltip, IconButton, Card } from "@mui/material";
import { indigo, grey } from "@mui/material/colors";
import { FacebookRounded, Twitter, Instagram } from "@mui/icons-material";

const PersonSocialMedia = ({ facebook_id, twitter_id, instagram_id }) => {
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
  ];

  let content;

  if (facebook_id || twitter_id || instagram_id) {
    content = (
      <Card
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          p: 1,
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
export default PersonSocialMedia;

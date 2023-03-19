import { IconButton, Tooltip, Card } from "@mui/material";
import { FacebookRounded, Instagram, LinkRounded, SlowMotionVideo, Twitter } from "@mui/icons-material";
import { grey, indigo } from "@mui/material/colors";

const SocialLinks = ({ facebook_id, twitter_id, instagram_id, imdb_id, homepage }) => {

    const links = [facebook_id, twitter_id, instagram_id, imdb_id, homepage].every(Boolean);

    const linksInfo = [
        {
            title: 'Visit Facebook',
            href: `https://facebook.com/${facebook_id}`,
            color: indigo[800],
            icon: <FacebookRounded />
        },
        {
            title: 'Visit Twitter',
            href: `https://twitter.com/${twitter_id}`,
            color: "info.main",
            icon: <Twitter />
        },
        {
            title: 'Visit Instagram',
            href: `https://instagram.com/${instagram_id}/`,
            color: 'error.main',
            icon: <Instagram />
        },
        {
            title: 'Visit IMDB',
            href: `https://m.imdb.com/title/${imdb_id}`,
            color: "success.main",
            icon: <SlowMotionVideo />
        },
        {
            title: 'Visit Homepage',
            href: `${homepage}`,
            color: "warning.main",
            icon: <LinkRounded />
        },
    ];

    return (
        <>
            {
                links && <Card sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 0.5,
                    mt: { xs: 4, md: 2 },
                    p: 2,
                    borderRadius: '20px'
                }}>
                    {
                        linksInfo.map((link, index) => (
                            <Tooltip key={index} title={link.title} placement="top">
                                <IconButton
                                    href={link.href}
                                    target="_blank"
                                    sx={{
                                        color: grey[500],
                                        '&:hover': { color: link.color }
                                    }}
                                >
                                    {link.icon}
                                </IconButton>
                            </Tooltip>
                        ))
                    }
                </Card>
            }
        </>
    );
};

export default SocialLinks;

import { Divider, Box, IconButton, Link, Tooltip } from "@mui/material";
import {
    Facebook,
    InsertLinkRounded,
    Instagram,
    LinkRounded,
    SlowMotionVideo,
    Twitter,
} from "@mui/icons-material";

const SocialLinks = ({external_ids, homepage }) => {
    // console.log(external_ids);
    // const { facebook_id, twitter_id, instagram_id } = external_ids;
    return (
        <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            {external_ids && external_ids.facebook_id && (
                <Tooltip title="Visit Facebook" placement="top">
                    <IconButton
                        color="info"
                        href={`https://facebook.com/${external_ids.facebook_id}`}
                        target="_blank"
                    >
                        <Facebook />
                    </IconButton>
                </Tooltip>
            )}
            {external_ids && external_ids.twitter_id && (
                <Tooltip title="Visit Twitter" placement="top">
                    <IconButton
                        color="info"
                        href={`https://twitter.com/${external_ids.twitter_id}`}
                        target="_blank"
                    >
                        <Twitter />
                    </IconButton>
                </Tooltip>
            )}
            {external_ids && external_ids.instagram_id && (
                <Tooltip title="Visit Instagram" placement="top">
                    <IconButton
                        color="error"
                        href={`https://instagram.com/${external_ids.instagram_id}/`}
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

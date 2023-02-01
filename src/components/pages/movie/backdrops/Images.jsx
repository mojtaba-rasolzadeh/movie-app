import { useState } from "react";
import { Box, Typography, Avatar, Link, Tooltip } from "@mui/material";
import { Close, PlayArrowRounded } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import Youtube from "react-youtube";


const Images = ({ allImages, type }) => {

    const filterdImages = allImages.filter(image => image.iso_639_1 === type);
    console.log(filterdImages)
    const [open, setOpen] = useState(false);
    const [play, setPlay] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setPlay(false);
    };

    const handleToggle = () => {
        setPlay(true);
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {
                filterdImages.length > 0 ? (
                    filterdImages.map(image => (
                        <Tooltip title="View Original" followCursor>
                            <Link href={`https://www.themoviedb.org/t/p/original${image.file_path}`} underline="none" target="_blank">
                                <Avatar
                                    variant="square"
                                    sx={{ width: 310, height: 175 }}
                                    src={`https://www.themoviedb.org/t/p/w500_and_h282_face${image.file_path}`}
                                />
                            </Link>
                        </Tooltip>
                    ))
                ) : (
                    <Typography variant="body1" sx={{ letterSpacing: 1 }}>
                        {`There are no English ${type} added to Violent Night.`}
                    </Typography>
                )
            }
        </Box>
    );
}

export default Images;
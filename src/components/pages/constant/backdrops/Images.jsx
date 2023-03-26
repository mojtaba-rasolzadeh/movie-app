import { Box, Avatar, Link, Tooltip } from "@mui/material";

import NoImageMessage from './NoImageMessage';

const Images = ({ allImages, imageType, mediaTitle }) => {
    const filterdImages = allImages.filter(image => image.iso_639_1 === imageType);
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {
                filterdImages.length > 0 ? (
                    filterdImages.map((image, index) => (
                        <Tooltip key={index} title="View Original" followCursor>
                            <Link href={`https://www.themoviedb.org/t/p/original${image.file_path}`} underline="none" target="_blank">
                                <Avatar
                                    variant="rounded"
                                    sx={{ width: 310, height: 175 }}
                                    src={`https://www.themoviedb.org/t/p/w500_and_h282_face${image.file_path}`}
                                />
                            </Link>
                        </Tooltip>
                    ))
                ) : (<NoImageMessage imageType={imageType} mediaTitle={mediaTitle} />)
            }
        </Box>
    );
}

export default Images;
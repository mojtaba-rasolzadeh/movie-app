import { Box, Typography, Avatar, Link, Tooltip } from "@mui/material";

const Images = ({ allImages, imageType, moiveTitle }) => {
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
                                    sx={{ width: 224, height: 339 }}
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image.file_path}`}
                                />
                            </Link>
                        </Tooltip>
                    ))
                ) : (
                    <Typography variant="body1" sx={{ letterSpacing: 1 }}>
                        {`There are no English ${imageType} added to ${moiveTitle.title}.`}
                    </Typography>
                )
            }
        </Box>
    );
}

export default Images;
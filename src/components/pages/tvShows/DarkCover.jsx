import { Box } from "@mui/material";

const DarkCover = () => {
    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: {
                    xs: "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 0.84) 150px, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
                    md: "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) 150px, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
                },
            }}
        />
    );
}

export default DarkCover;
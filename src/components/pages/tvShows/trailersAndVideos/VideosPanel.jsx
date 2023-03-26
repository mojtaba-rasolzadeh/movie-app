import { Tabs, Tab, Card, Box, Typography, Chip } from "@mui/material";
import { grey } from "@mui/material/colors";

import VideoItemLength from "../../constant/trailersAndVideos/VideoItemLength";

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const VideosPanel = ({ videos, videoType, value, setValue }) => {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card sx={{ maxWidth: 1, minHeight: 385, borderRadius: '20px', p: 4 }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant="h6">Videos</Typography>
                <Chip label={videos?.length} variant="outlined" />
            </Box>
            <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="vertical tabs example"
                sx={{
                    mt: 3,
                    borderRight: 1,
                    borderColor: "divider",
                    minHeight: 288,
                    ".Mui-selected": {
                        backgroundColor: grey[800],
                        color: "#ffeb3b!important",
                    },
                    ".MuiTabs-indicator": {
                        background: 'linear-gradient(to right,#ED4700,#E76F00)'
                    },
                }}
            >
                {
                    videoType.map((type, index) => (
                        <Tab
                            key={index}
                            label={<VideoItemLength videos={videos} type={type} />}
                            {...tabProps(index)}
                            sx={{ borderRadius: 1 }}
                        />
                    ))
                }
            </Tabs>
        </Card>
    );
}

export default VideosPanel;
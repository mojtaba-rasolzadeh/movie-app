import { Tabs, Tab, Card, CardHeader, CardContent } from "@mui/material";
import { grey } from "@mui/material/colors";

import VideoItemLength from './VideoItemLength';

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
        <Card sx={{ width: 1, borderRadius: '20px', minHeight: 385 }}>
            <CardHeader
                title="Videos"
                sx={{ backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)', textAlign: 'center', p: '2rem 0' }} />
            <CardContent>
                <Tabs
                    orientation="vertical"
                    // variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="vertical tabs example"
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        minHeight: 288,
                        ".Mui-selected": {
                            backgroundColor: grey[800],
                            color: "#ffeb3b!important",
                        },
                        ".MuiTabs-indicator": {
                            backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)'
                        },
                    }}
                >
                    {
                        videoType.map((type, index) => (
                            <Tab
                                key={index}
                                label={<VideoItemLength videos={videos} type={type} />}
                                {...tabProps(index)}
                                sx={{ borderRadius: 1, mr: 1 }}
                            />
                        ))
                    }
                </Tabs>
            </CardContent>
        </Card>
    );
}

export default VideosPanel;
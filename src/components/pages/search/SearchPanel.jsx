import {
    Box,
    Tabs,
    Tab,
    Typography,
    Card,
    CardHeader,
    CardContent,
    Chip,
} from "@mui/material";
import { grey } from "@mui/material/colors";

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const SearchPanel = ({ value, handleChange, displayLengthItem }) => {

    const tabsTitle = ["movies", "tvShows", "people", "collections", "companies", "keywords"];

    return (
        <Card sx={{
            //  maxWidth: 258,
            width: 1,
            minHeight: 385,
            borderRadius: '20px'
        }}>
            <CardHeader
                title="Search Results"
                sx={{ backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)', textAlign: 'center', p: '2rem 0' }}
            />
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
                        tabsTitle.map((text, index) => (
                            <Tab
                                key={index}
                                label={
                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>{text}</Typography>
                                        <Chip
                                            label={
                                                <Typography
                                                    variant="caption"
                                                    color="text.primary"
                                                    sx={{
                                                        ".Mui-selected": { color: "yellow[500]" },
                                                    }}
                                                >
                                                    {displayLengthItem(text)}
                                                </Typography>
                                            }
                                            size="small"
                                            sx={{
                                                backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)'
                                            }}
                                        />
                                    </Box>
                                }
                                {...tabProps(index)}
                                sx={{
                                    borderRadius: 1,
                                    mr: 1,
                                }}
                            />
                        ))
                    }
                </Tabs>
            </CardContent>
        </Card>
    );
}

export default SearchPanel;
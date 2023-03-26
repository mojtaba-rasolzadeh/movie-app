import {
    Box,
    Tabs,
    Tab,
    Typography,
    Card,
    Chip,
} from "@mui/material";
import { grey } from "@mui/material/colors";

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const SearchPanel = ({ value,
    handleChange,
    displayLengthItem }) => {

    const tabsTitle = ["movies", "tvShows", "people", "collections", "companies", "keywords"];

    return (
        <Card sx={{
            width: { xs: 1, sm: 400, md: 1 },
            maxWidth: { xl: 400 },
            minHeight: 385,
            borderRadius: '20px',
            p: 3
        }}>
            <Typography variant="h6" textAlign="center">Search Results</Typography>
            <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="vertical tabs example"
                sx={{
                    mt: 2,
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
                                    <Typography variant="subtitle2"
                                        sx={{
                                            textTransform: 'capitalize',
                                            letterSpacing: 1
                                        }}>{text}</Typography>
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
                                        sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
                                    />
                                </Box>
                            }
                            {...tabProps(index)}
                            sx={{ borderRadius: 1 }}
                        />
                    ))
                }
            </Tabs>
        </Card>
    );
}

export default SearchPanel;
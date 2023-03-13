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
import { grey, yellow } from "@mui/material/colors";

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const SearchPanel = ({ value, handleChange, displayLengthItem }) => {

    const tabsTitle = ["movies", "tvShows", "people", "collections", "companies", "keywords"];

    return (
        <Card sx={{ maxWidth: 258, height: 385 }}>
            <CardHeader
                title="Search Results"
                sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)', textAlign: 'center' }}
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
                        height: 288,
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
                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>{text}</Typography>
                                        <Chip
                                            label={
                                                <Typography
                                                    variant="caption"
                                                    color="text.primary"
                                                    sx={{
                                                        ".Mui-selected": { color: yellow[500] },
                                                    }}
                                                >
                                                    {displayLengthItem(text)}
                                                </Typography>
                                            }
                                            size="small"
                                            sx={{
                                                background: 'linear-gradient(to right,#ED4700,#E76F00)'
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
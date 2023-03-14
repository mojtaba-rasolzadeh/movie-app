import { Tabs, Tab, Card, CardHeader, CardContent } from "@mui/material";
import { grey } from "@mui/material/colors";
import PosterLanguagesLength from "./PosterLanguagesLength";

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const PostersPanel = ({
    value, handleChange,
    imageLanguageArray,
    displayLanguage,
    displayLengthItem
}) => {
    return (
        <Card sx={{ width: 1, borderRadius: '20px' }}>
            <CardHeader
                title="Posters"
                sx={{ backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)', textAlign: 'center', p: '2rem 0' }}
            />
            <CardContent>
                <Tabs
                    orientation="vertical"
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
                        imageLanguageArray.map((image, index) => (
                            <Tab
                                key={index}
                                label={
                                    <PosterLanguagesLength
                                        image={image}
                                        displayLanguage={displayLanguage}
                                        displayLengthItem={displayLengthItem} />}
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

export default PostersPanel;
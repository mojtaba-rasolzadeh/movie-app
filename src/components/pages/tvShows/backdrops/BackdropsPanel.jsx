import { Tabs, Tab, Card, CardHeader, CardContent } from "@mui/material";
import { grey } from "@mui/material/colors";

import BackdropLanguagesLength from "./BackdropLanguagesLength";

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const BackdropsPanel = ({
    value, handleChange,
    imageLanguageArray,
    displayLanguage,
    displayLengthItem
}) => {

    return (
        <Card sx={{ maxWidth: 258 }}>
            <CardHeader
                title="Backdrops"
                sx={{
                    background: 'linear-gradient(to right,#ED4700,#E76F00)',
                    textAlign: 'center'
                }} />
            <CardContent>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="vertical tabs example"
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
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
                        imageLanguageArray.map((image, index) => (
                            <Tab
                                key={index}
                                label={
                                    <BackdropLanguagesLength
                                        image={image}
                                        displayLanguage={displayLanguage}
                                        displayLengthItem={displayLengthItem} />}
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

export default BackdropsPanel;
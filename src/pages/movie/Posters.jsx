import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import Grid from "@mui/material/Unstable_Grid2";
import { grey, orange, teal, yellow } from "@mui/material/colors";

import { getMovie } from '../../services/MovieService';
import BackToMain from '../../components/pages/movie/BackToMain';
import { Loader } from '../../components';
import Images from '../../components/pages/movie/posters/Images';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}


const Posters = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});
    const [images, setImages] = useState([]);

    console.log(images)

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const displayLengthItem = (item) => {
        console.log(item)
        let results = images.filter(image => image.iso_639_1 === item);
        return results.length;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getMovie(parseInt(movieId))
                if (status === 200) {
                    setLoading(false);
                    setMovie(data);
                    setImages(data.images.posters);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {
                loading ? <Loader /> :
                    <Box sx={{ py: 5 }}>
                        <BackToMain movie={movie} />
                        <Grid container spacing={{ xs: 3, sm: 2 }} sx={{ width: "100%", my: 5 }}>
                            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Card sx={{
                                    maxWidth: 258
                                    // , height: 385 
                                }}>
                                    <CardHeader
                                        title="Posters"
                                        sx={{ backgroundColor: teal[500], textAlign: 'center' }}
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
                                                // height: 288,
                                                ".Mui-selected": {
                                                    backgroundColor: grey[800],
                                                    color: "#ffeb3b!important",
                                                },
                                                ".MuiTabs-indicator": {
                                                    backgroundColor: yellow[500],
                                                },
                                            }}
                                        >
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>English</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("en")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: orange[500],
                                                            }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(0)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Italian</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("it")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(1)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>No Language</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem(null)}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}

                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(2)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>
                                                            Portuguese
                                                        </Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("pt")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(3)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Russian
                                                        </Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": {
                                                                            backgroundColor: yellow[500],
                                                                        },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("ru")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(4)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Ukrainian</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("uk")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(5)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Arabic</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("ar")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(6)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Bulgarian</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("bg")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(7)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Cantonese</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("cn")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(8)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Croatian</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("hr")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(9)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Czech</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("cs")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(10)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>French</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("fr")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(11)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Greek</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("el")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(12)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Hebrew</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("he")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(13)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Hungarian</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("hu")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(14)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Japanese</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("ja")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(15)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Norwegian</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("no")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(16)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Polish</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("pl")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(17)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Spanish</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("es")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(18)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Swedish</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("sv")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(19)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Thai</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("th")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(20)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Turkish</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("tr")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(21)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Vietnamese</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("vi")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(22)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Zulu</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("zu")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(23)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                        </Tabs>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={12} sm={6} md={8} lg={9} xl={10}>
                                <TabPanel value={value} index={0}>
                                    <Images allImages={images} imageType="en" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Images allImages={images} imageType="it" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Images allImages={images} imageType={null} moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <Images allImages={images} imageType="pt" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    <Images allImages={images} imageType="ru" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    <Images allImages={images} imageType="uk" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={6}>
                                    <Images allImages={images} imageType="ar" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={7}>
                                    <Images allImages={images} imageType="bg" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={8}>
                                    <Images allImages={images} imageType="cn" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={9}>
                                    <Images allImages={images} imageType="hr" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={10}>
                                    <Images allImages={images} imageType="cs" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={11}>
                                    <Images allImages={images} imageType="fr" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={12}>
                                    <Images allImages={images} imageType="el" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={13}>
                                    <Images allImages={images} imageType="he" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={14}>
                                    <Images allImages={images} imageType="hu" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={15}>
                                    <Images allImages={images} imageType="ja" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={16}>
                                    <Images allImages={images} imageType="no" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={17}>
                                    <Images allImages={images} imageType="pl" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={18}>
                                    <Images allImages={images} imageType="es" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={19}>
                                    <Images allImages={images} imageType="sv" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={20}>
                                    <Images allImages={images} imageType="th" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={21}>
                                    <Images allImages={images} imageType="tr" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={22}>
                                    <Images allImages={images} imageType="vi" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={23}>
                                    <Images allImages={images} imageType="zu" moiveTitle={movie} />
                                </TabPanel>
                            </Grid>
                        </Grid>
                    </Box>
            }
        </>
    );
}

export default Posters;
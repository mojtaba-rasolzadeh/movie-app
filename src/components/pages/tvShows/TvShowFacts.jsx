import { Avatar, Box, Typography } from "@mui/material";
import { lime } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Keywords from "./Keywords";

const TvShowFacts = ({
    status,
    networks,
    type,
    original_language,
    languagesList,
    original_name,
    keywords
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 5,
                my: 4,
            }}
        >
            {
                original_name &&
                <div>
                    <Typography
                        variant="body1"
                        sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
                    >
                        Original Title
                    </Typography>
                    <Typography variant="body2" sx={{ color: lime[100] }}>
                        {original_name}
                    </Typography>
                </div>
            }
            <div>
                <Typography
                    variant="body1"
                    sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
                >
                    Status
                </Typography>
                <Typography variant="body2" sx={{ color: lime[100] }}>
                    {status}
                </Typography>
            </div>
            <div>
                <Typography
                    variant="body1"
                    sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
                >
                    Network
                </Typography>
                <Box sx={{display:'flex'}}>
                    {networks && networks.map((network) => (
                        <Link key={network.id} to={`/network/${network.id}`} style={{ textDecoration: 'none' }}>
                            <Avatar variant="square" sx={{ maxWidth:260,width:1, maxHeight: 30 }} src={`https://www.themoviedb.org/t/p/h30${network.logo_path}`} alt={network.name} />
                        </Link>
                    ))}
                </Box>
            </div>
            <div>
                <Typography
                    variant="body1"
                    sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
                >
                    Type
                </Typography>
                <Typography variant="body2" sx={{ color: lime[100] }}>
                    {type}
                </Typography>
            </div>
            <div>
                <Typography
                    variant="body1"
                    sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
                >
                    Original Language
                </Typography>
                {languagesList.map(
                    (language, index) =>
                        language.iso_639_1 === original_language && (
                            <Typography key={index} variant="body2" sx={{ color: lime[100] }}>
                                {language.english_name}
                            </Typography>
                        )
                )}
            </div>
            <Keywords keywords={keywords} />
        </Box>
    );
};

export default TvShowFacts;

import { Avatar, Box, Typography } from "@mui/material";
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
                gap: 3,
                my: 4,
            }}
        >
            {
                original_name &&
                <div>
                    <Typography
                        variant="body1"
                        sx={{ letterSpacing: 2, fontWeight: "700" }}
                    >
                        Original Title:
                    </Typography>
                    <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
                        {original_name}
                    </Typography>
                </div>
            }
            <div>
                <Typography
                    variant="body1"
                    sx={{ letterSpacing: 2, fontWeight: "700" }}
                >
                    Status:
                </Typography>
                <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
                    {status}
                </Typography>
            </div>
            <div>
                <Typography
                    variant="body1"
                    sx={{ letterSpacing: 2, fontWeight: "700" }}
                >
                    Network:
                </Typography>
                <Box sx={{ display: 'flex',pl:1 }}>
                    {networks && networks.map((network) => (
                        <Link key={network.id} to={`/network/${network.id}`} style={{ textDecoration: 'none' }}>
                            <Avatar variant="square" sx={{ maxWidth: 260, width: 1, maxHeight: 30 }} src={`https://www.themoviedb.org/t/p/h30${network.logo_path}`} alt={network.name} />
                        </Link>
                    ))}
                </Box>
            </div>
            <div>
                <Typography
                    variant="body1"
                    sx={{ letterSpacing: 2, fontWeight: "700" }}
                >
                    Type:
                </Typography>
                <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
                    {type}
                </Typography>
            </div>
            <div>
                <Typography
                    variant="body1"
                    sx={{ letterSpacing: 2, fontWeight: "700" }}
                >
                    Original Language:
                </Typography>
                {languagesList.map(
                    (language, index) =>
                        language.iso_639_1 === original_language && (
                            <Typography key={index} variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
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

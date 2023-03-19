import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import Keywords from "./Keywords";

const MoreDetails = ({
    status,
    networks,
    type,
    original_language,
    languagesList,
    keywords,
    created_by
}) => {

    return (
        <Box sx={{ mt: {xs:4,md:0} }}>
            <Typography variant="h6" gutterBottom>More Details</Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 1.5,
                    my: 2,
                }}
            >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body1"
                        sx={{ letterSpacing: 1 }}
                    >
                        Creator:
                    </Typography>
                    <Box>
                        {
                            created_by?.map((user) => (
                                <Typography key={user.id} variant="body2" sx={{
                                    textAlign: 'right',
                                    letterSpacing: 1,
                                    fontWeight: 600,
                                    color: grey[600]
                                }}>
                                    {user.name}
                                </Typography>
                            ))
                        }
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body1"
                        sx={{ letterSpacing: 1 }}
                    >
                        Status:
                    </Typography>
                    <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
                        {status}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body1"
                        sx={{ letterSpacing: 1 }}
                    >
                        Original Language:
                    </Typography>
                    {languagesList?.map(
                        (language, index) =>
                            language.iso_639_1 === original_language && (
                                <Typography key={index} variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
                                    {language.english_name}
                                </Typography>
                            )
                    )}
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body1"
                        sx={{ letterSpacing: 1 }}
                    >
                        Type:
                    </Typography>
                    <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
                        {type}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="body1"
                        sx={{ letterSpacing: 1 }}
                    >
                        Networks:
                    </Typography>
                    <Box>
                        {networks?.map((network) => (
                            <Link key={network.id} to={`/network/${network.id}`} style={{ textDecoration: 'none' }}>
                                <Avatar variant="square" sx={{
                                    maxWidth: 260,
                                    width: 1,
                                    maxHeight: 30
                                }}
                                    src={`https://www.themoviedb.org/t/p/h30${network.logo_path}`}
                                    alt={network.name} />
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Keywords keywords={keywords} />
            </Box>
        </Box>
    );
};

export default MoreDetails;
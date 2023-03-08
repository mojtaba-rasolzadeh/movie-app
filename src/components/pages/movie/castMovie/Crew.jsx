import { Link } from "react-router-dom";
import { Box, Avatar, Typography, CardActionArea } from "@mui/material";

const Crew = ({ id, name, profile_path, job }) => {
    return (
        <CardActionArea key={id} sx={{ width: 160, height: 240, borderRadius: '20px' }}>
            <Link
                to={`/person/${id}-${name.split(/[\s:,]/).join("-").split("--").join("-").toLowerCase()}`}
                style={{ textDecoration: 'none' }}>
                <Box sx={{ position: 'relative', width: 160, mb: 2, borderRadius: '20px' }}>
                    <Avatar variant="rounded" sx={{ width: 1, height: 240, borderRadius: '20px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`} />
                    <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: 1, backgroundImage: 'linear-gradient(to top, rgb(32 32 32 / 87%) 60px, rgb(12 11 2 / 0%) 100%)', borderRadius: '17px' }} />
                    <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Box sx={{ maxWidth: 200 }}>
                            <Link
                                to={`/person/${id}-${name.split(/[\s:,]/)
                                    .join("-")
                                    .split("--")
                                    .join("-")
                                    .toLowerCase()}`}
                                style={{ textDecoration: 'none' }}>
                                <Typography variant="body2" sx={{ textAlign: 'center', letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' } }}>{name}</Typography>
                            </Link>
                            <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 1 }}>
                                {job}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </CardActionArea>
    );
}

export default Crew;
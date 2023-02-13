import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { lime, blueGrey } from "@mui/material/colors";

const BackToSeasonList = ({ poster_path, air_date, name, searchParams }) => {

    return (
        <Box sx={{ my: 4, display: "flex", gap: 2, bgcolor: blueGrey[900], p: 2, borderRadius: 1 }}>
            <Link
                to={``}
                style={{ textDecoration: "none" }}
            >
                <Avatar
                    variant="rounded"
                    sx={{ width: 58, height: 87 }}
                    src={`https://www.themoviedb.org/t/p/w58_and_h87_face${poster_path}`}
                />
            </Link>
            <Box>
                <Link
                    to={``}
                    style={{ textDecoration: "none" }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            letterSpacing: 1,
                            fontWeight: "700",
                            color: lime[500],
                            "&:hover": { color: lime[700] },
                        }}
                    >
                        {name}{" "}
                        <Typography
                            variant="h6"
                            sx={{ display: "inline-block", color: lime[200] }}
                        >
                            {`( ${air_date && air_date.substring(0, 4)} )`}
                        </Typography>
                    </Typography>
                </Link>
                <Link
                    to={`/tv/${searchParams}/seasons`}
                    style={{ textDecoration: "none" }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            mt: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            color: "#fff",
                            "&:hover": {
                                color: "text.secondary",
                            },
                        }}
                    >
                        <KeyboardBackspace />
                        Back to season list
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
};

export default BackToSeasonList;

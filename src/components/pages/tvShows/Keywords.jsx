import { Link } from "react-router-dom";
import _ from "lodash";
import { Box, Typography, Chip } from "@mui/material";
import { yellow } from "@mui/material/colors";

const Keywords = ({ keywords }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography
                variant="body1"
                sx={{ letterSpacing: 2, fontWeight: "700",color: yellow[700] }}
            >
                Keywords:
            </Typography>
            {_.isEmpty(keywords?.results) ? (
                <Typography variant="body2">
                    No keywords have been added.
                </Typography>
            ) : (
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
                    {keywords?.results.map((keyword) => (
                        <Link
                            key={keyword.id}
                            to={`/keyword/${keyword.id}-${keyword.name?.split(" ")
                                .join("-")
                                .split("--")
                                .join("-")
                                .toLowerCase()
                                }/tv`}
                            style={{ textDecoration: "none" }}
                        >
                            <Chip
                                label={keyword.name}
                                clickable
                            />
                        </Link>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Keywords;

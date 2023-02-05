import { Link } from "react-router-dom";
import _ from "lodash";
import { Box, Typography, Chip } from "@mui/material";
import { lime } from "@mui/material/colors";

const Keywords = ({ keywords }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography
                variant="body1"
                sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
            >
                Keywords
            </Typography>
            {_.isEmpty(keywords && keywords.results) ? (
                <Typography variant="body2" sx={{ color: lime[100] }}>
                    No keywords have been added.
                </Typography>
            ) : (
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
                    {keywords.results.map((keyword) => (
                        <Link
                            key={keyword.id}
                            to={`/keyword/${keyword.id}-${keyword.name &&
                                keyword.name
                                    .split(" ")
                                    .join("-")
                                    .split("--")
                                    .join("-")
                                    .toLowerCase()
                                }/movie`}
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

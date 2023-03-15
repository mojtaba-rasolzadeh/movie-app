import { Box, Typography } from '@mui/material';
import { AccessTimeFilledRounded } from '@mui/icons-material';

import { toHoursAndMinutes } from "../../../utils/toHoursAndMinutes";

const RuntimeMovie = ({ runtime }) => {
    return (
        <>
            {runtime > 0 && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                    <AccessTimeFilledRounded sx={{ color: '#ff004d' }} />
                    <Typography variant="subtitle2">
                        {toHoursAndMinutes(runtime)}
                    </Typography>
                </Box>
            )}
        </>
    );
}

export default RuntimeMovie;
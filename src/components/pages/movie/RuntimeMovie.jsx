import { Box, Typography } from '@mui/material';
import {AccessTimeFilledRounded} from '@mui/icons-material';

import { toHoursAndMinutes } from "../../../utils/toHoursAndMinutes";

const RuntimeMovie = ({ runtime }) => {
    return (
        <>
            {runtime > 0 && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <AccessTimeFilledRounded color="error" />
                    <Typography variant="subtitle2">
                        {toHoursAndMinutes(runtime)}
                    </Typography>
                </Box>
            )}
        </>
    );
}

export default RuntimeMovie;
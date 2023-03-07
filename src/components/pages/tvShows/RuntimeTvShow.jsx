import { AccessTimeFilledRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { toHoursAndMinutes } from "../../../utils/toHoursAndMinutes";

const RuntimeTvShow = ({ episode_run_time }) => {
    return (
        <>
            {episode_run_time > 0 && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <AccessTimeFilledRounded color="error" />
                    <Typography variant="subtitle2">
                        {toHoursAndMinutes(episode_run_time)}
                    </Typography>
                </Box>
            )}
        </>
    );
}

export default RuntimeTvShow;
import { Box, Chip, Typography } from '@mui/material';

const CastAndCrewTitle = ({ selectedIndex, castAndCrew }) => {
    return (
        <>
            {
                selectedIndex === 0 ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant='h5' sx={{
                            letterSpacing: 1,
                            textTransform: 'capitalize'
                        }}>series actors</Typography>
                        <Chip
                            label={
                                <Typography variant="body2">
                                    {castAndCrew.cast?.length}
                                </Typography>
                            }
                            size="small"
                            variant='outlined'
                        />
                    </Box>) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant='h5' sx={{
                            letterSpacing: 1,
                            textTransform: 'capitalize'
                        }}>series crews</Typography>
                        <Chip
                            label={
                                <Typography variant="body2">
                                    {castAndCrew.crew?.length}
                                </Typography>
                            }
                            size="small"
                            variant='outlined'
                        />
                    </Box>
                )
            }
        </>
    );
}

export default CastAndCrewTitle;
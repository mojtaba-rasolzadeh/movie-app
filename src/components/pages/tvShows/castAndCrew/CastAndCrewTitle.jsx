import { Box, Chip, Typography } from '@mui/material';

const CastAndCrewTitle = ({ selectedIndex, castAndCrew }) => {
    return (
        <>
            {
                selectedIndex === 0 ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant='h5' sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            letterSpacing: 1,
                            background: 'linear-gradient(to right,#ED4700,#E76F00)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>series actors</Typography>
                        <Chip
                            label={
                                <Typography variant="body2">
                                    {castAndCrew.cast?.length}
                                </Typography>
                            }
                            size="small"
                            sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)', mt: '6px' }}
                        />
                    </Box>) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant='h5' sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            letterSpacing: 1,
                            background: 'linear-gradient(to right,#ED4700,#E76F00)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>series crews</Typography>
                        <Chip
                            label={
                                <Typography variant="body2">
                                    {castAndCrew.crew?.length}
                                </Typography>
                            }
                            size="small"
                            sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)', mt: '6px' }}
                        />
                    </Box>
                )
            }
        </>
    );
}

export default CastAndCrewTitle;
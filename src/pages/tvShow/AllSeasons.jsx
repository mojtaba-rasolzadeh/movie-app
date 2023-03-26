import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';

import { getTv } from '../../services/MovieService';
import BackToMain from '../../components/constant/BackToMain';
import Season from '../../components/pages/tvShows/allSeasons/Season';
import ReviewsSkeleton from '../../components/pages/constant/skeletons/ReviewsSkeleton';

const AllSeasons = () => {
    const { tvId } = useParams();
    const [loading, setLoading] = useState(false);
    const [tvShow, setTvShow] = useState([]);
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getTv(parseInt(tvId));
                if (status === 200) {
                    setLoading(false);
                    setTvShow(data);
                    setSeasons(data.seasons);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {
                loading ? <ReviewsSkeleton /> :
                    <>
                        <Helmet>
                            <title>{`${tvShow.name} (TV Series ${tvShow.first_air_date?.slice(0, 4)}) - Seasons`} | Movie App</title>
                        </Helmet>
                        <BackToMain media_data={tvShow} media_type="tv" searchParams={tvId} />
                        <Box>
                            {seasons?.map((season, index) => (<Season key={index} tvShow={tvShow} season={season} />))}
                        </Box>
                    </>
            }
        </>
    )
}
export default AllSeasons;
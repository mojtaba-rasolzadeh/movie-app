import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Divider } from "@mui/material";

import { Loader } from "../../components/constant";
import { getTv } from "../../services/MovieService";
import Actors from "../../components/pages/tvShows/castAndCrew/Actors";
import BackToMain from "../../components/constant/BackToMain";
import CastAndCrewMenu from "../../components/pages/tvShows/castAndCrew/CastAndCrewMenu";
import CastAndCrewTitle from "../../components/pages/tvShows/castAndCrew/CastAndCrewTitle";
import Crews from "../../components/pages/tvShows/castAndCrew/Crews";

const TvShowCastAndCrew = () => {
    const { tvId } = useParams();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [tvShow, setTvshow] = useState([]);
    const [castAndCrew, setCastAndCrew] = useState([]);

    console.log(castAndCrew);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getTv(parseInt(tvId));
                if (status === 200) {
                    setLoading(false);
                    setTvshow(data);
                    setCastAndCrew(data.aggregate_credits);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Helmet>
                        <title>{`${tvShow.name} (TV Series ${tvShow.first_air_date?.slice(0, 4)}) - Cast & Crew`} | Movie App</title>
                    </Helmet>
                    <BackToMain media_data={tvShow} media_type="tv" searchParams={tvId} />
                    <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                        <CastAndCrewTitle selectedIndex={selectedIndex} castAndCrew={castAndCrew} />
                        <CastAndCrewMenu selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                    </Box>
                    <Divider />
                    {selectedIndex === 0 ? <Actors castAndCrew={castAndCrew} /> : <Crews castAndCrew={castAndCrew} />}
                </>
            )}
        </>
    );
};

export default TvShowCastAndCrew;

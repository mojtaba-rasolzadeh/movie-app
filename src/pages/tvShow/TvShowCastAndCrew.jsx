
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Loader } from "../../components/constant";
import { getTv } from "../../services/MovieService";
import Actors from "../../components/pages/movie/Actors";
import Crew from "../../components/pages/movie/Crew";
import BackToMain from "../../components/constant/BackToMain";

const TvShowCastAndCrew = () => {
    const { tvId } = useParams();

    const [loading, setLoading] = useState(false);
    const [tvShow, setTvshow] = useState([]);
    const [castAndCrew, setCastAndCrew] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getTv(parseInt(tvId));
                if (status === 200) {
                    setLoading(false);
                    setTvshow(data);
                    setCastAndCrew(data.credits);
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
                   
                </>
            )}
        </>
    );
};

export default TvShowCastAndCrew;

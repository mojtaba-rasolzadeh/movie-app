import Popular from "../components/pages/home/popular/Popular";
import Trailers from "../components/pages/home/trailers/Trailers";
import Trending from "../components/pages/home/trending/Trending";
import FreeToWatch from "../components/pages/home/watch/FreeToWatch";

const Home = () => {
  return (
    <div>
      <Trailers />
      <Popular />
      <FreeToWatch />
      <Trending />
    </div>
  );
};

export default Home;

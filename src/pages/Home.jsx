import Banner from "../components/Home_Components/Banner";
import Heading from "../components/Home_Components/Heading";

const Home = () => {
    return (
        <div>
           {/* banner */}
            <Banner/>
           {/* Heading */}
           <Heading title="Brows Coffees by Categories" subtitle={'Choose Your Favourite coffee and enjoy coffee at home as well as at office'}/>
           {/* categories tab section */}
           {/* dynamic nested component */}
        </div>
    );
};

export default Home;
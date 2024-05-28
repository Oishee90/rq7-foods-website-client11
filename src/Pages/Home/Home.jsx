
import About from "./About";
import Banner from "./Banner";
import PopularFood from "./PopularFood";
import Hero from "./Hero";
import FeaturedFoods from "./FeaturedFoods";

const Home = () => {
    return (
        <div className="container mx-auto">
           <Banner></Banner>
       <FeaturedFoods></FeaturedFoods>
           <About></About>
           <Hero></Hero>
           <PopularFood></PopularFood>
        </div>
    );
};

export default Home;
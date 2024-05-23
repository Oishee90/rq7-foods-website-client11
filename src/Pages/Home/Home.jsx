
import About from "./About";
import Banner from "./Banner";
import PopularFood from "./PopularFood";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="container mx-auto">
           <Banner></Banner>
       
           <About></About>
           <Hero></Hero>
           <PopularFood></PopularFood>
        </div>
    );
};

export default Home;

import About from "./About";
import Banner from "./Banner";
import PopularFood from "./PopularFood";
import Hero from "./Hero";
import FeaturedFoods from "./FeaturedFoods";
import { useEffect, useState } from "react";

const Home = () => {
    const [foods, setFoods] = useState([])
    const foodItems = foods.slice(0,6)
    useEffect(() => {
    fetch("http://localhost:5001/addFood")
            .then(res => res.json())
            .then(data => {
                // Sort foods by quantity in descending order
                const sortedFoods = data.sort((a, b) => b.foodQuantity - a.foodQuantity
                );
                setFoods(sortedFoods);
            })
            .catch(error => console.error('Error fetching food data:', error));
    }, []);
    console.log(foodItems)
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };
    return (
        <div className="container mx-auto">
           <Banner></Banner>
           <div className=" mt-32 mb-30 ">
           <div className='flex flex-col justify-center' data-aos="fade-up">
          <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'>Our Featured Foods</h1>
          <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-green-700 '></div>
          <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '>At FoodShareHub,Explore our curated selection of featured foods, handpicked to delight your taste buds and nourish your body.Dive in and discover your new favorite dish today.</p>
        
      </div>
        
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  container mx-auto " >
    {
        foodItems.map(foodItem => 
            <FeaturedFoods key={foodItem .id} foodItem ={foodItem } truncateText={truncateText}>

            </FeaturedFoods>
        )
    }
    </div>
      </div>
     
           <About></About>
           <Hero></Hero>
           <PopularFood></PopularFood>
         
        </div>
    );
};

export default Home;
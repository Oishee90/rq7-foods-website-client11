import hero from "../../assets/31071-removebg-preview.png"
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        <div>
                  <div className="hero h-[700px]  mb-10 bg-[#0C0C0C]"data-aos="fade-up">
  <div className="hero-content h-full flex-col lg:flex-row-reverse text-white mb-5">
    <img src={hero} className="w-[50%] h-full rounded-lg shadow-2xl " />
    <div className="mb-5">
      <h1 className="text-2xl md:text-5xl font-bold">Join the Fight Against <span className="text-[#FFA62F]">Hunger</span> </h1>
      <p className="py-6 text-base md:text-lg"> At FoodshareHub, we believe that no one should go hungry. Our mission is to connect surplus food from local communities and businesses with those in need. By donating food, you can help us reduce food waste and provide nutritious meals to families facing food insecurity. Your generosity makes a real difference in the lives of many. Join us in spreading kindness and making sure everyone has access to the food they need to thrive.
        </p>
      <Link to={'/addFood'}><div><button className="btn bg-green-600 hover:bg-green-700 text-white font-raleway border-none p-4"> Donate Now</button></div></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;
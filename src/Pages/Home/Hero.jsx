import hero from "../../assets/flame-grilled-meat-cooking-flames-generative-ai-removebg-preview.png"
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
                  <div className="hero h-[500px]  mb-10 bg-[#0C0C0C]"data-aos="fade-up">
  <div className="hero-content h-full flex-col lg:flex-row-reverse text-white mb-5">
    <img src={hero} className="w-[50%] h-full rounded-lg shadow-2xl " />
    <div className="mb-5">
      <h1 className="text-2xl md:text-5xl font-bold">Today's <span className="text-[#FFA62F]">Astackin</span> Day</h1>
      <p className="py-6 text-base md:text-xl">Today marks Astackin Day, a celebration of progress, perseverance, and the power of learning. It's a day to embrace challenges, tackle obstacles, and stack up achievements, big or small. Whether you're conquering coding conundrums, mastering new skills, or simply taking steps toward your goals, today is your day to shine. 
      </p>
      <div><button className="btn bg-[#FFA62F] hover:bg-[#ff8d36] border-none p-4">Order Now</button></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;
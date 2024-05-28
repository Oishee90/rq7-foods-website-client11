
import card1 from "../../assets/chad-montano-MqT0asuoIcU-unsplash.jpg";
import quantity from "../../assets/dinner_4686140.png";
import location from "../../assets/placeholder_819814.png";
import ExpireDate from "../../assets/expired_5632472.png";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const FeaturedFoods = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className="container mx-auto  mt-32 mb-30 " >
    <div className='flex flex-col justify-center' data-aos="fade-up">
          <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'>Our Featured Foods</h1>
          <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-green-700 '></div>
          <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '>At FoodKing, we take pride in serving excellence on every plate. Our Featured Foods section highlights the dishes that have won the hearts of our customers.
          Whether you’re a food enthusiast or a casual diner, these specialties are sure to impress. </p>
        
      </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  container mx-auto " >
        <div className="card card-side bg-[#FFA62F] rounded-lg border border-transparent hover:bg-green-50 hover:border-green-300 hover:shadow-2xl transition-all duration-300 ease-in-out" data-aos="fade-up-left">
  <figure className="w-1/2"><img src={card1} className="w-full h-full" alt="Movie"/></figure>
  <div className="felx flex-col gap-3 p-1 ml-3 mb-3 mr-3 mt-3">
  <div className="flex items-center gap-3 mt-4 mb-4">
<div className="avatar">
  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
            
            </div>
          </div>
    <h2 className="card-title font-extrabold font-oswald w-1/2">Pasta :</h2>
    <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
            
          
    <p className="mb-4 font-raleway">Contains gluten and dairy.</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base  font-bold"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve 5 person</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-bold"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>2024-06-01 12:00 PM</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-bold"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>123 Food Street, Cityville</p>


<div className="card-actions grid grid-cols-2 mt-3">
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button>
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">Show All</button>
     
    </div>
  </div>
</div>
<div className="card card-side bg-[#FFA62F] rounded-lg border border-transparent hover:bg-green-50 hover:border-green-300 hover:shadow-2xl transition-all duration-300 ease-in-out" data-aos="fade-up-left">

  <figure className="w-1/2"><img src={card1} className="w-full h-full" alt="Movie"/></figure>
  <div className="felx flex-col gap-3 p-1 ml-3 mb-3 mr-3 mt-3">
  <div className="flex items-center gap-3 mt-4 mb-4">
<div className="avatar">
  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
            
            </div>
          </div>
    <h2 className="card-title font-extrabold font-oswald w-1/2">Pasta :</h2>
    <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
            
          
    <p className="mb-4 font-raleway">Contains gluten and dairy.</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base  font-bold"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve 5 person</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-bold"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>2024-06-01 12:00 PM</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-bold"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>123 Food Street, Cityville</p>


    <div className="card-actions grid grid-cols-2 mt-3">
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button>
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">Show All</button>
     
    </div>
  </div>
</div>
<div className="card card-side bg-[#FFA62F]  hover:bg-white rounded-lg hover:shadow-3xltransition-all duration-300 ease-in-out" data-aos="fade-up-left">
  <figure className="w-1/2"><img src={card1} className="w-full h-full" alt="Movie"/></figure>
  <div className="felx flex-col gap-3 p-1 ml-3 mb-3 mr-3 mt-3">
  <div className="flex items-center gap-3 mt-4 mb-4">
<div className="avatar">
  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
            
            </div>
          </div>
    <h2 className="card-title font-extrabold font-oswald w-1/2">Pasta :</h2>
    <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
            
          
    <p className="mb-4 font-raleway">Contains gluten and dairy.</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base  font-bold"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve 5 person</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-bold"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>2024-06-01 12:00 PM</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-bold"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>123 Food Street, Cityville</p>


<div className="card-actions grid grid-cols-2 mt-3">
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button>
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">Show All</button>
     
    </div>
  </div>
</div>
  </div>
    </div>
  );
};

export default FeaturedFoods;

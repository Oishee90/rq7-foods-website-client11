import bg from "../assets/chad-montano-MqT0asuoIcU-unsplash.jpg";
import  { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import quantity from "../assets/dinner_4686140.png";
import location from "../assets/placeholder_819814.png";
import ExpireDate from "../assets/expired_5632472.png";
const AvailableFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
      useEffect(() => {
        fetch('http://localhost:5001/addFood')
            .then(res => res.json())
            .then(data => {
                const availableFoods = data.filter(food => food.foodStatus === 'available');
                setFoods(availableFoods);
                // setSortedFoods(availableFoods);
            });
    }, []);
    console.log(foods)
  return (
    <div className="container mx-auto mt-20 mb-20">
        {/* heading start */}
      <div data-aos="fade-down"
        className="hero h-[400px] rounded-sm"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-4xl md:text-6xl w-full  text-white font-extrabold font-oswald mb-4" data-aos="fade-up">Our Available Delicacies</h1>
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200  font-oswald md:mb-4" data-aos="fade-up">
            Treat yourself to our exquisite range of available delicacies, crafted to perfection by our talented chefs. Satisfy your cravings with our mouth-watering options.

            </p>
        
</div>
</div>
</div>
{/* heading end */}
<div>
<div className='flex flex-col justify-center' data-aos="fade-up">
                <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'> Currently Available Meals</h1>
                <div className='justify-center mx-auto border-b-2 h-px w-[100px]  border-green-700 '></div>
                <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '>Dive into our array of currently available meals, each designed to tantalize your taste buds. Enjoy the perfect blend of taste and quality in every bite. </p>
       {/* functionality start */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                <div className="flex justify-start">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for delicious foods..."
            className="w-full py-3 pl-10 pr-4 text-sm rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      {/* sort and toogle start */}
      <div className="flex items-center justify-between gap-6 font-raleway">
        
      <div className="flex ">
                <select className="p-2 border border-green-300 rounded-md">
                {/* //   value={order} onChange={handleSortChange}> */}
                    <option value="">Sort by Cost</option>
                    <option value="ascending">Minimum Cost</option>
                    <option value="descending">Maximum Cost</option>
                </select>
            </div>
      <div>
      <button 
    className="text-base p-2 border border-green-400 bg-white  hover:bg-green-500 text-black rounded-lg"
                    // onClick={toggleLayout}
                >
                    Change Layout
                </button>
      </div>
      </div>
       {/* sort and toogle end*/}
       </div>
       {/* card start */}
       <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12' data-aos="fade-up-left">
       <div className="card   bg-purple-100 text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <div className="felx flex-col gap-3">
 
    <h2 className="card-title font-extrabold font-oswald w-1/2">Pasta :</h2>
    <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
            
          
    <p className="mb-4 font-raleway">Contains gluten and dairy.</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base  font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve 5 person</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-medium ml-6"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>2024-06-01 12:00 PM</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>123 Food Street, Cityville</p>

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
<div className="card-actions justify-end">
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button>
   
    </div>
  </div>
  </div>

       </div>
      
       <div className="card   bg-purple-100 text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <div className="felx flex-col gap-3">
 
    <h2 className="card-title font-extrabold font-oswald w-1/2">Pasta :</h2>
    <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
            
          
    <p className="mb-4 font-raleway">Contains gluten and dairy.</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base  font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve 5 person</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-medium ml-6"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>2024-06-01 12:00 PM</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>123 Food Street, Cityville</p>

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
<div className="card-actions justify-end">
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button>
   
    </div>
  </div>
  </div>

       </div>

       <div className="card   bg-purple-100 text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <div className="felx flex-col gap-3">
 
    <h2 className="card-title font-extrabold font-oswald w-1/2">Pasta :</h2>
    <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
            
          
    <p className="mb-4 font-raleway">Contains gluten and dairy.</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base  font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve 5 person</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-medium ml-6"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>2024-06-01 12:00 PM</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>123 Food Street, Cityville</p>

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
<div className="card-actions justify-end">
      <button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button>
   
    </div>
  </div>
  </div>

       </div>

      </div>
            </div>
</div>

</div>
);
};

export default AvailableFood;
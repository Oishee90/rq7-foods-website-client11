import bg from "../assets/chad-montano-MqT0asuoIcU-unsplash.jpg";
import  { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import quantity from "../assets/dinner_4686140.png";
import location from "../assets/placeholder_819814.png";
import ExpireDate from "../assets/expired_5632472.png";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import axios from "axios";
const AvailableFood = () => {
    const [foods, setFoods] = useState([]);
    const [order, setOrder] = useState("");
    const [search, setSearch] = useState("");
    const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
     useEffect(()=>{
      const getData = async () => {
        const {data} = await axios.get (
          `https://foodking-webserver.vercel.app/food?search=${search}`
        )
        const availableFoods = data.filter(food => food.foodStatus === 'available');
        setFoods(availableFoods)
      }
      getData()
     },[search])
     const handleSearch = (e) => {
      e.preventDefault ()
      const text = e.target.search.value
      setSearch(text)
      // console.log(text)
     }
 
      const handleSortChange = (e) => {
        const selectedSortOrder = e.target.value;
        setOrder(selectedSortOrder);

        const sortedFoods = [...foods].sort((a, b) => {
            const dateA = new Date(a.expiredDateTime);
            const dateB = new Date(b.expiredDateTime);

            if (selectedSortOrder === "ascending") {
                return dateA - dateB;
            } else if (selectedSortOrder === "descending") {
                return dateB - dateA;
            }
            return 0;
        });

        setFoods(sortedFoods);
    };
  
  
    const toggleLayout = () => {
        setIsThreeColumnLayout(!isThreeColumnLayout);
    };
    // console.log(foods)
  return (
    <div className="container mx-auto mt-20 mb-20">
       <Helmet><title>FoodShare-Available Food</title></Helmet>
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
          <form onSubmit={handleSearch}>
                <div className="flex justify-start">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            name="search"
            placeholder="Search for delicious foods..."
            className="w-full py-3 pl-10 pr-4 text-sm rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      </form>
      {/* sort and toogle start */}
      <div className="flex items-center justify-between gap-6 font-raleway">
        
      <div className="flex ">
                <select className="p-2 border border-green-300 rounded-md" value={order} onChange={handleSortChange} >
                {/* //   value={order} onChange={handleSortChange}> */}
                    <option value="">Sort by Expire Date</option>
                    <option value="ascending">Minimum Expire Date</option>
                    <option value="descending">Maximum Expire Date</option>
                </select>
            </div>
      <div>
      <button 
    className="text-base p-2 border border-green-400 bg-white  hover:bg-green-500 text-black rounded-lg"
                    onClick={toggleLayout}
                >
                    Change Layout
                </button>
      </div>
      </div>
       {/* sort and toogle end*/}
       </div>
       {/* card start */}
       <motion.div  className={isThreeColumnLayout ? 'grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10' : 'grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10' }
                layout
                transition={{ duration: 0.5 }} data-aos="fade-up-left" >
     {

        foods.map(food => 
        <motion.div key={food._id}  className="card rounded-lg  bg-green-100  text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
        <div className="relative h-[400px]">
        <figure className="h-full flex flex-grow w-full rounded-lg "><img className="h-full flex-grow w-full " src={food.foodImage} alt="Food" /></figure>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
        </div>
        <div className="card-body">
        <div className="felx flex-col gap-3">
       
          <h2 className="card-title font-extrabold font-oswald w-1/2">{food.foodName}:</h2>
          <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
                  
                
          <p className="mb-4 font-raleway">{food.additionalNotes}</p>
      <p className="flex items-center gap-2 mt-3 font-oswald text-base  font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve {food.foodQuantity} person</p>
      <p className="flex items-center gap-2 mt-3 font-oswald text-base font-medium ml-6"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>Expire Date: {new Date(food.expiredDateTime).toLocaleDateString()}</p>
      <p className="flex items-center gap-2 mt-3 font-oswald text-base font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>Location: {food.pickupLocation}</p>
      
      <div className="flex items-center gap-3 mt-4 mb-4">
      <div className="avatar">
        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className="" src={food.donator.donatorImage} />
        </div>
      </div>
                  <div>
                    <div className=" text-base font-raleway font-medium">{food.donator.name}</div>
                    <div className="text-base font-raleway font-medium">{food.donator.email}</div>
                  
                  </div>
                </div>
      <div className="card-actions justify-end">
            <Link to={`/food/${food._id}`}><button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button></Link>
         
          </div>
        </div>
        </div>
      
             </motion.div>)
     }
      
   
       
      </motion.div>
            </div>
</div>

</div>
);
};

export default AvailableFood;
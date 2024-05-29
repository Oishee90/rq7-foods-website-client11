
import {  useParams} from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import bg from "../assets/woman-offering-food-neighbor.jpg";

const FoodDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5001/addfood/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    },[id]);
console.log(product)
    return (
        <div className="container mx-auto mt-20 mb-20">
                  <div data-aos="fade-down"
        className="hero h-[400px] rounded-sm"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-4xl md:text-6xl w-full  text-white font-extrabold font-oswald mb-4" data-aos="fade-up">Food Details</h1>
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200  font-oswald md:mb-4" data-aos="fade-up">
            Treat yourself to our exquisite range of available delicacies, crafted to perfection by our talented chefs. Satisfy your cravings with our mouth-watering options.

            </p>
        
</div>
</div>
</div>
             <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mt-6 mb-20 container mx-auto"  >
  <div className="rounded-2xl relative h-full w-full ">

      <img className="    rounded-2xl mx-auto  h-full w-full object-cover" src={""} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-xl"></div>
    </div>
         <div className="flex flex-col gap-5 space-y-2 p-4"> 
            <h1 className=" font-raleWay text-4xl font-bold hover:text-[#3d6c6c]"></h1>
            
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <h2 className='font-raleWay font-bold text-xl text-black'></h2>
            <h2 className='flex items-center gap-3 text-lg font-bold font-raleway'><FaLocationDot /> </h2>
           
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <h2 className='font-raleWay text-xl text-[#131313B3]'> </h2>
            <div className='border border-dashed  h-0 border-gray-400 mt-4 '></div>
            
            <h2 className='font-raleWay text-xl font-bold text-black'>Facilities:</h2>
            <div className='flex flex-col justify-starts items-startsr gap-5'>
            <div className="ml-5">
    
  
    <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Total Visitors Per Year: </li>
    <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Travel Time:</li>
    <li className="text-gray-600 mb-4 text-base font-raleway font-bold">Seasonality: </li>
    </div>
            

</div>
            <div className='flex justify-center items-center gap-5'>

          
            
            <p className='p-4 rounded-full w-1/2 text-center bg-[#afc8cb] border-[#135D66] font-bold  text-black text-xs md:text-xl font-raleway'   >Price : <span className='text-red-500'></span></p>
          
            </div>
     </div>
       
         </div>
        </div>
    );
};

export default FoodDetails;
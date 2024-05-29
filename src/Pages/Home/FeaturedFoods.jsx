

import quantity from "../../assets/dinner_4686140.png";
import location from "../../assets/placeholder_819814.png";
import ExpireDate from "../../assets/expired_5632472.png";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


const FeaturedFoods = ({foodItem , truncateText}) => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div className="container mx-auto " >

        <div className="card card-side bg-yellow-100 rounded-lg border border-transparent hover:bg-green-50 hover:border-green-300 hover:shadow-2xl transition-all duration-100 ease-in-out  " data-aos="fade-up-left">
  <figure className="w-1/2 flex-shrink-0 "><img src={foodItem.foodImage} className="w-full h-full" alt="Movie"/></figure>
  <div className="felx flex-col gap-3 p-1 ml-3 mb-3 mr-3 mt-3 flex-grow">
  <div className="flex items-center gap-3 mt-4 mb-4">
<div className="avatar">
  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={foodItem.donator.donatorImage} />
  </div>
</div>
            <div>
              <div className="font-bold">{foodItem.donator.name}</div>
            
            </div>
          </div>
    <h2 className="card-title font-extrabold font-oswald ">{foodItem.foodName}</h2>
    <div className=' border-b-2 h-px w-[61px]   border-green-700 mb-2 '></div>
            
          
    <p className="mb-4 font-raleway">{truncateText(foodItem.additionalNotes, 50)}</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base  font-bold"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve {foodItem.foodQuantity}person</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-bold"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>{new Date(foodItem.expiredDateTime).toLocaleDateString()}</p>
<p className="flex items-center gap-2 mt-3 font-raleway text-base font-bold"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>{foodItem.pickupLocation}</p>


<div className="card-actions grid grid-cols-2 mt-3">
      <Link to={`/food/${foodItem._id}`}><button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">View Details</button>
     </Link>
      <Link to={"/availableFood"}><button className="btn font-raleway text-xs font-bold rounded-xl bg-green-50 hover:bg-[#FFA62F] transition-all duration-300 ease-in-out border border-[#FFA62F]">Show All</button>
     </Link>
    </div>
  </div>
</div>

  </div>
 
  );
};

export default FeaturedFoods;

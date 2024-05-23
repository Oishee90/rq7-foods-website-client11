import about from "../../assets/dan-gold-E6HjQaB7UEA-unsplash.jpg"
import { CiCircleCheck } from "react-icons/ci";




const About = () => {
    
    return (
        <div className="container mx-auto  mt-10 mb-10 ">
          <div className='flex flex-col justify-center'>
                <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'>About Our Food</h1>
                <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-green-700 mb-6'></div>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10  mt-6 mb-20 items-start container mx-auto">
  <div className="rounded-2xl relative h-full ">

      <img className=" items-center rounded-xl h-full  mt-10 mx-auto " src={about} alt="" />
      <div className="absolute mt-10 h-full  rounded-xl inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] "></div>

    </div>
         <div className="flex flex-col mt-5 "> 
         <h1 className="font-oswald font-bold text-2xl  lg:text-4xl text-green-800 mt-3">Why Choose Us</h1>
         <h1 className="font-oswald font-extrabold text-xl  md:text-5xl text-black mt-7 ">
         Where Quality Meet Excellent <span className="text-green-800">Service</span>.</h1>
<p className="text-black text-base lg:text-xl font-oswald  mt-6">Its the perfect dining experience where every dish is crafted with fresh, high-quality Experience quick and efficient service that ensures your food is servead fresh Its the dining experience where every dish is crafted with fresh, high-quality ingredients

</p>
         <div className="flex flex-col ml-3">
         <p className="items-center gap-2  text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-green-600 w-[2rem] "/>
        
Super Quality Food
          </p>
          <p className="items-center gap-2 text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-green-600 w-[2rem] "/>
          Well Reputation
          </p>
          <p className="items-center gap-2 text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-green-600 w-[2rem] "/>
          Fresh Ingredients Daily
          </p>
          <p className="items-center gap-2 text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-green-600 w-[2rem] "/>
          Professional Chef Consultations
          </p>

         </div>
      
            
      </div>
      </div>
      {/* swipper */}

    
    </div>

    );
};

export default About;
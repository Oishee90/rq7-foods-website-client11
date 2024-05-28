
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import banner1 from "../../assets/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg"
import banner2 from "../../assets/burger-hamburger-cheeseburger.jpg"
import banner3 from "../../assets/pasta-1.jpg"
import banner4 from "../../assets/flame-grilled-meat-cooking-flames-generative-ai.jpg"
import banner5 from "../../assets/top-view-table-full-delicious-food-composition.jpg"
import banner6 from "../../assets/mae-mu-I7A_pHLcQK8-unsplash.jpg"
import banner7 from "../../assets/chad-montano-MqT0asuoIcU-unsplash.jpg"
import banner8 from "../../assets/ryan-concepcion-50KffXbjIOg-unsplash.jpg"
import banner9 from "../../assets/olayinka-babalola-r01ZopTiEV8-unsplash.jpg"
// import required modules
import { Autoplay , Pagination} from 'swiper/modules';
import { useRef } from 'react';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularFood = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
   
    return (
        <div className='mb-5'>
            <div className='flex flex-col justify-center' data-aos="fade-up">
                <h1 className='text-center  p-5 text-4xl font-oswald font-semiboldbold'> A Showcase of Culinary Artistry</h1>
                <div className='justify-center mx-auto border-b-2 h-px w-[100px]  border-green-700 mb-6'></div>
                <p className='text-center p-5 mx-auto mb-6 text-lg font-raleway '>Welcome to the FoodKing Food Gallery, a showcase of our culinary artistry. Here, we present stunning images of our dishes, each meticulously prepared and beautifully presented. Let these photos inspire your next dining experience at FoodKing. </p>
        
            </div>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
       slidesPerView={3}
       spaceBetween={5}
      
       pagination={{
           clickable: true,
       }}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
   
       modules={[ Pagination, Autoplay]}
       className="mySwiper"
      >
   <SwiperSlide>
        <div className='relative cursor-pointer'  data-aos="fade-up"
          >
            <img src={banner1} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Ramen Noodles</h1>
            <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-green-700 mb-6'></div>
           
            </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='relative cursor-pointer' data-aos="fade-up"
        >
            <img src={banner2} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Pro Burger</h1>
        
            </div>
        </SwiperSlide>
        <SwiperSlide>  <div className='relative cursor-pointer'   data-aos="fade-up"
          >
            <img src={banner3} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Spicy Pasta</h1>
        
            </div></SwiperSlide>
        <SwiperSlide>  <div className='relative cursor-pointer' data-aos="fade-up"
      >
            <img src={banner4} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Chicke Tikka</h1>
        
            </div></SwiperSlide>
        <SwiperSlide>  <div className='relative cursor-pointer'  data-aos="fade-up"
          >
            <img src={banner5} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Spicy Grill</h1>
        
            </div></SwiperSlide>
        <SwiperSlide>  <div className='relative cursor-pointer'  data-aos="fade-up"
           >
            <img src={banner6} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Regular Burger</h1>
        
            </div></SwiperSlide>
        <SwiperSlide>  <div className='relative cursor-pointer'  data-aos="fade-up" 
          >
            <img src={banner7} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Hot Pizza</h1>
        
            </div></SwiperSlide>
        <SwiperSlide>  <div className='relative cursor-pointer'  data-aos="fade-up"
        >
            <img src={banner8} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Chicken Shawrma</h1>
        
            </div></SwiperSlide>
        <SwiperSlide>  <div className='relative cursor-pointer' data-aos="fade-up"
          >
            <img src={banner9} alt="" className="h-[400px] w-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  "></div>
            <h1 className=' text-white font-oswald font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> Chawmin</h1>
        
            </div></SwiperSlide>
      </Swiper>
   
        </div>
    );
};

export default PopularFood;
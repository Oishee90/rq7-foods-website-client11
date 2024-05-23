import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { MdAddCall, MdMarkEmailRead, MdOutlineAddLocationAlt   } from "react-icons/md";
import logo from '../assets/Good-food-logo-design-on-transparent-background-PNG.png'

const Footer = () => {

    return (
        <div className=" w-full"  >
          

<footer className="">
    <div className="  w-full">
   <div className="p-10 flex gap-5 flex-col md:flex-row md:justify-between items-center bg-gray-300 dark:bg-gray-900">
    <div className="text-black font-raleway font-ubuntu font-extrabold">
    <div className="flex flex-row items-center">
    <img src={logo} className="md:h-16 h-8 w-auto" alt="Logo" />
   <h1 className="text-5xl font-oswald text-black">Food<span className="text-green-800">King</span></h1></div>
   <p  className="mt-5 mb-5 text-base md:text lg">Stay Connected with FoodKing</p>
   <p className=" text-base md:text lg"> Connect with fellow food enthusiasts, share your recipes, and join in on exciting discussions.</p>
    </div>

    <div>
        <h1 className="text-sm font-bold text-gray-900 uppercase dark:text-white">Contact Us</h1>
        <div className="border-b-2 w-[81px] mt-2 border-[#FFA62F] ... mb-6"></div>
        <div className="flex  items-center gap-2 mt-0">
               <MdAddCall  className=" text-green-800 fill-current font-extrabold w-[24px] h-[24px]"></MdAddCall >
            <h3 className="py-2 font-bold font-raleway text-black ">Phone Number : (+62) 123-321-543</h3></div>
            <div className="flex  items-center gap-2 mt-0">
              <MdMarkEmailRead  className="text-green-800 fill-current font-extrabold w-[24px] h-[24px]"></MdMarkEmailRead >
              <h3 className="py-2 font-bold font-raleway text-black ">Email : foodking12@support.com</h3></div>
              <div className="flex  items-center gap-2 mt-0">
              <MdOutlineAddLocationAlt  className="text-green-800fill-current font-extrabold w-[24px] h-[24px]"></MdOutlineAddLocationAlt >
              <h3 className="py-2 font-bold font-raleway text-black ">Location : 152/1 Mohakhali Wireless Gate</h3></div>
   
   
    </div>
   </div>
    <footer className="footer footer-center p-10 bg-green-800 text-base-content rounded">
  
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://twitter.com/'><FaXTwitter className="fill-current font-extrabold w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.instagram.com/'><FaInstagram  className="fill-current font-extrabold w-[24px] h-[24px] text-white" /></a>
      <a href='https://web.facebook.com/'><FaFacebookF className="fill-current w-[24px] h-[24px] text-white" /></a>
      
      
      
    </div>
  </nav> 
  <aside>
    <p className='text-white font-bold'>Copyright © 2024 - All right reserved by FoodKing</p>
  </aside>
</footer>
    </div>
</footer>

          {/* <footer className="footer footer-center p-10 bg-black text-base-content rounded">
  
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://twitter.com/'><FaXTwitter className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.instagram.com/'><FaInstagram  className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://web.facebook.com/'><FaFacebookF className="fill-current w-[24px] h-[24px] text-white" /></a>
      
      
      
    </div>
  </nav> 
  <aside>
    <p className='text-white'>Copyright © 2024 - All right reserved by SkyVista</p>
  </aside>
</footer> */}
        </div>
    );
};

export default Footer;









// const Footer = () => {
//     return (
//         <div className="mt-10"  >
//             <footer className="footer grid grid-cols-3  p-10 bg-neutral text-neutral-content">
//   <div className="text-[#ffe4c4] font-ubuntu font-extrabold">
//     <h1 className="text-5xl ">Journey<span className="gap-9 text-[#D83F31]">SEA</span></h1>
   
//     {/* <p>

// </p>
// <p>

// hockeys@support.com
// 

// </p> */}
//   </div> 
//   <div>
//   <p className="text-xl">Contact Us:</p>
//     <div className="flex  items-center gap-2 mt-0">
//                <i className="fa-regular md:text-[24px] text-[20px] fa-envelope text-[#FF4240] py-2"></i>
//             <h3 className="py-2 font-medium text-[#FFFFFF99] ">hockeys@support.com</h3></div>
//             <div className="flex  items-center gap-2 mt-0">
//               <i className="fa-solid fa-phone md:text-[24px] text-[20px]  text-[#FF4240] py-2"></i>
//               <h3 className="py-2 font-medium text-[#FFFFFF99] ">hockeys@support.com</h3></div>
//   </div>
//   <nav>
//     <h6 className="footer-title">Social</h6> 
//     <div className="grid grid-flow-col gap-4">
//       <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
//       <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//       <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//     </div>
//   </nav>
// </footer>
//         </div>
//     );
// };

// export default Footer;
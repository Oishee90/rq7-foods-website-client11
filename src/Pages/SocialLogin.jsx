import { useLocation, useNavigate } from "react-router-dom";

import {  toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import UseAuth from "../hook/useAuth";


const SocialLogIn = () => {
    const {googleLogIn, githubLogIn} = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const form = location?.state ||"/";
    const handleSocialLogin = socialProvider => {
      socialProvider()
      .then (result => {
        toast.success('Log in successfully!');
        if(result.user){
         navigate(form)
        }
      })
    }
    return (
        <div>
        <div className=" mt-6">
        <div className='flex items-center gap-3'>
          <div className='border border-dashed border-blue-300 w-1/2 h-0 '></div><div><h2 className='font-raleway text-white font-bold text-xs md:text-base'>OR</h2></div><div  className='border border-dashed border-blue-300 w-1/2 h-0 '></div>
       
        </div>
        <div className='text-center font-raleway text-xs md:text-lg  text-white font-bold mt-2'><p>Log in With Social Accounts</p></div>
        </div>
         <div className=" mt-6">
         <div className='flex items-center justify-center gap-6'>
           <div onClick={() => handleSocialLogin(googleLogIn)} className='btn glass hover:border-blue-950 hover:bg-[#86469C] hover:text-white md:text-base  text-xs font-raleway font-bold'> <FaGoogle /> Google</div>
           <div onClick={() => handleSocialLogin(githubLogIn)} className='btn  glass  hover:border-blue-950 hover:bg-[#86469C] hover:text-white md:text-base   text-xs font-raleway font-bold' > <FaGithub />Github</div>
         </div>
         </div>
         </div>
    );
};

export default SocialLogIn;
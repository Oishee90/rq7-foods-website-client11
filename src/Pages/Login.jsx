
import backgroundImage from '../assets/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce.jpg';
import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash} from 'react-icons/fa';

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import UseAuth from '../hook/useAuth';
import SocialLogIn from './SocialLogin';

const Login = () => {
  const {signInUser} = UseAuth()
  const [showpassword, setShowpassword] = useState(false)

  const {
    register,
    handleSubmit,  
  
    formState: { errors },
  } = useForm();
 // navigation system
 const location = useLocation()
 console.log(location)
 const navigate = useNavigate()

 
 const form = location?.state? location.state : "/";



  const onSubmit = data  => {
   
    // console.log(data)
   const {email,password} = data;
   signInUser(email,password)
   .then (result => {
   
    if(result.user){
      toast.success('Log in successfully!');
     navigate(form)
    }
  })
   .catch( () => {
    toast.error('Invalid email or password.');
   })
  }
    return (
  
        <div className='mt-20'>
       
        <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` ,
     backgroundSize: 'cover',
     backgroundPosition: 'center',  }}>
<div className="text-center w-1/2 mt-5 mb-5 glass rounded-xl">

<div className="card shadow-2xl w-full ">
    <h1 className="font-extrabold text-xl md:text-4xl mt-5 font-ubuntu text-[#FCFFE0]">Login Now!!</h1>
 
 <div className="card-body">
 <form   onSubmit={handleSubmit(onSubmit)}>
 
 <div className="form-control ">
   <label className="label">
     <span  className="label-text font-raleway text-base md:text-lg font-bold text-white">Email</span>
   </label>
   <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })}
    className="  glass input input-bordered  border-violet-900  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-[#747264]
    " />
    {errors.email&& 
         <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
  
 </div>

 <div className="form-control  relative">
       <label className="label">
         <span className="label-text font-raleway text-base md:text-lg font-bold text-white">Password</span>
         
       </label>
       
       <input 
          type = {showpassword ? "text" : "password"}
          placeholder="password" {...register("password", { required: true })}
          className="border-green-200 glass input input-bordered    placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:font-medium placeholder:text-[#747264]"  />
       <p onClick={() => setShowpassword(!showpassword)} className="absolute top-[66%] left-[82%] md:left-[94%]">
        {
          showpassword ? <FaEyeSlash className="h-[100%] text-black" /> :<FaEye className="h-[100%] text-black" ></FaEye>
     
        }
        </p>   
    {errors.password&& 
         <span className="text-left font-extrabold text-red-600 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
  
       
     </div>
 
 <div className="form-control mt-6">
   <button className="btn border-none transition duration-1000 ease-in  cursor-pointer bg-[#5f2d70de]  hover:bg-[#4d205c] font-ubuntu text-xs md:text-2xl font-extrabold text-white">Log In</button>
 </div>
 <ToastContainer  />
 <div className="form-control mt-6">
 <p className="text-left font-raleway text-xs md:text-lg font-bold text-white">Do You Have An Account? Please <Link to={'/register'} className="text-[#FDBF60]">Register</Link></p>
 </div>
 
</form>

<SocialLogIn></SocialLogIn>
 </div>
  
</div>
</div>
</div>
    </div>
    );
};

export default Login;
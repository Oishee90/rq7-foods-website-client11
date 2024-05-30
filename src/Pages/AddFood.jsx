import bg from "../assets/woman-offering-food-neighbor.jpg";
import UseAuth from "../hook/useAuth";
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Helmet } from "react-helmet-async"

const AddFood = () => {
    const {user} = UseAuth()
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
    const handleAddFood = (e) => {
        e.preventDefault();
        const foodName = e.target.foodName.value;
        const foodImage = e.target.foodImage.value;
        const foodQuantity = e.target.foodQuantity.value;
        const pickupLocation = e.target.pickupLocation.value;
        const expiredDateTime = e.target.expiredDateTime.value;
        const additionalNotes = e.target.additionalNotes.value;
        const email = user.email;
        const name = user.displayName;
        const foodStatus = "available";
        const donatorImage = user.photoURL;
        const info = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, foodStatus, donator : {email, name ,donatorImage} };
    //    console.log(info)
       fetch("https://foodking-webserver.vercel.app/addFood", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(info)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: ' Food Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
  })
    }
    return (
        <div className="container mx-auto mt-20 mb-20">
             <Helmet><title>FoodShareHub|Add Food</title></Helmet>
                 <div data-aos="fade-down"
        className="hero h-[400px] rounded-sm"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-4xl md:text-6xl w-full  text-white font-extrabold font-oswald mb-4" data-aos="fade-up">Share Your Culinary Creations</h1>
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200  font-oswald md:mb-4" data-aos="fade-up">
            At FoodKing, we believe that great food comes from the heart. Share your culinary creations with our community and let your dishes shine. Whether it is a family recipe or a new experiment, we can not wait to see what you haveve cooked up!
            </p>
        
</div>
</div>
</div>
<div className="bg-[#faebd9] p-10 md:p-24">
                <h1 className="text-3xl font-oswald mb-2 font-extrabold text-center">Add Food</h1> 
                <div className='justify-center mx-auto border-b-2 h-px w-[81px]  border-green-700 mb-6'></div>

                <form onSubmit={handleAddFood} className="bg-purple-100 mt-5 p-4 md:p-10 rounded-2xl">
                    <div className="flex md:flex-row flex-col gap-6">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Food Name</label>
                            <input className="input input-bordered join-item w-full" type="text" name="foodName" placeholder="Enter Food Name"/>
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Food Image</label>
                            <input className="input input-bordered join-item w-full" type="text" name="foodImage" placeholder="Enter Food Image URL"/>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 mt-5">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Food Quantity</label>
                            <input className="input input-bordered join-item w-full" type="text" name="foodQuantity" placeholder="Enter Food Quantity"/>
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Pickup Location</label>
                            <input className="input input-bordered join-item w-full" type="text" name="pickupLocation" placeholder="Enter Pickup Location"/>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 mt-5">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Expired Date/Time</label>
                            <input className="input input-bordered join-item w-full" type="datetime-local" name="expiredDateTime" />
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Additional Notes</label>
                            <textarea className="input input-bordered join-item w-full" type="text" name="additionalNotes" placeholder="Enter Additional Notes"/>
                        
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 mt-5">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Your Email</label>
                            <input className="input input-bordered join-item w-full" name="email" value={`${user.email}`} disabled style={{ color: 'black' }}/>
                        
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Your Name</label>
                            <input className="input input-bordered join-item w-full" name="name" value={`${user.displayName}`} disabled style={{ color: 'black' }}/>
                        </div>
                    </div>
                    <input className="btn btn-block fomt-raleway font-bold mt-5 bg-green-800 hover:bg-green-900 text-white" type="submit" value="Add Food" />
     
       
                </form>
            </div>
        </div>
    );
};

export default AddFood;
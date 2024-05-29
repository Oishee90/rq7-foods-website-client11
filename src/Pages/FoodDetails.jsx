
import {  useParams} from "react-router-dom";
import quantity from "../assets/dinner_4686140.png";
import location from "../assets/placeholder_819814.png";
import ExpireDate from "../assets/expired_5632472.png"
import { useEffect, useState } from "react";
import bg from "../assets/woman-offering-food-neighbor.jpg";
import UseAuth from "../hook/useAuth";
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Helmet } from "react-helmet-async"

const FoodDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {user} = UseAuth()
    const {id} = useParams();
    const [food, setFood] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5001/addfood/${id}`)
        .then(res => res.json())
        .then(data => {
            setFood(data)
        })
    },[id]);
console.log(food)
const handleFormSubmit = async e => {
  e.preventDefault()
  const foodId = e.target._id.value;
  const foodName = e.target.foodName.value;
  const foodImage = e.target.foodImage.value;

  const pickupLocation = e.target.pickupLocation.value;
  const expiredDateTime = e.target.expiredDateTime.value;
  const additionalNotes = e.target.additionalNotes.value;
  const email = e.target.email.value;
  const name = e.target.name.value;
  const donatorImage = food.donator.donatorImage;
  const user_email = e.target.user_email.value
  const foodStatus = "requested";
  const requestDate = startDate
const reqData ={
  foodId,foodName,foodImage,pickupLocation,expiredDateTime,additionalNotes,user_email,foodStatus,requestDate,
  donator:
  {email,name, donatorImage}

}
console.log(reqData)
// add req data
try{
  const {data} = await axios.post('http://localhost:5001/requiest', reqData)
  console.log(data)
}
catch(err){
  console.log(err)
}
// update data
try{
  const {data} = await axios.put(`http://localhost:5001/addfood/${id}`,
    reqData
  )
  console.log(data)
  if(data.modifiedCount > 0){
    Swal.fire({
        title: 'Success!',
        text: 'Update Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })}

}
catch(err){
  console.log(err)
}
document.getElementById('my_modal_1').close();
}
    return (
        <div className="container mx-auto mt-20 mb-20">
            <Helmet><title>FoodShare-Food Details</title></Helmet>
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

      <img className=" rounded-2xl mx-auto  h-full w-full object-cover" src={food.foodImage} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-xl"></div>
    </div>
         <div className="flex flex-col gap-5  p-4">
            <h1 className="font-bold font-oswald text-2xl ">Donator Information :</h1> 
            <div className='border-b-2 h-px w-[81px]  border-green-700'></div>
            {food.donator && (
         <div className="flex items-center gap-3 mt-4 mb-4">
<div className="avatar">
  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={food.donator.donatorImage} />
  </div>
</div>
            <div>
              <div className="">{food.donator.name}</div>
              <h2 className='flex items-center   font-oswald'> {food.pickupLocation} </h2>          
            </div>
          </div>
           ) }
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <h1 className="font-bold font-oswald text-2xl ">Explore Food Details</h1> 
            <div className='border-b-2 h-px w-[81px]  border-green-700 '></div>
            <p className="font-medium font-raleway text-lg">Discover the intricate details of each donation, from the mouthwatering descriptions to the heartfelt stories behind them.Immerse yourself in the world of food donation, where every contribution makes a difference in someones life.</p>
          
            <h2 className='font-oswald font-bold text-xl '>Food Name: <span className="text-green-800  font-bold font-raleway">{food.foodName}</span></h2>
            
          
            <h2 className='font-oswald font-bold text-xl '>Additional Notes: <span className="text-[#131313B3]  font-raleway">{food.additionalNotes} </span></h2>
       
            <div className='flex flex-col justify-starts items-startsr gap-5'>
            <h2 className='font-oswald font-bold text-xl '>Details:</h2>
       
            <div className="ml-5">
           
       <p className="flex items-center gap-2 font-oswald text-base  font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={quantity} alt="" /></span> Serve {food.foodQuantity} person</p>
      <p className="flex items-center gap-2 mt-3 font-oswald text-base font-medium ml-6"> <span className=" w-5"><img className="w-full " src={ExpireDate} alt="" /></span>Expire Date: {new Date(food.expiredDateTime).toLocaleDateString()}</p>
      <p className="flex items-center gap-2 mt-3 font-oswald text-base font-medium  ml-6"> <span className=" w-5"><img className="w-full " src={location} alt="" /></span>Location: {food.pickupLocation}</p>
      
  
   
    </div>
            

</div>
            <div className='flex items-center gap-5'>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn rounded-2xl bg-green-700 hover:bg-green-900 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-3" onClick={()=>document.getElementById('my_modal_1').showModal()}>Request Food</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-extrabold text-lg text-center text-green-800 mb-6 font-raleway">Requested Food</h3>
 
    <div >
      
      <form onSubmit={handleFormSubmit} method="dialog">
      <div className="flex items-center gap-6 mt-2">
        <div className="form-control">
        <label className="font-raleway font-bold text-base mb-2">Food Id</label>
       <input className="input input-bordered join-item w-full" name="_id" value={`${food._id}`} disabled style={{ color: 'black' }}/>
                        
        </div>
        <div className="form-control">
        <label className="font-raleway font-bold text-base mb-2">Food Name</label>
       <input className="input input-bordered join-item w-full" name="foodName" value={`${food.foodName}`} disabled style={{ color: 'black' }}/>
             
        </div>
        </div>

        <div className="flex items-center gap-6 mt-2">
        <div className="form-control">
        <label className="font-raleway font-bold text-base mb-2">Food Image</label>
       <input className="input input-bordered join-item w-full" name="foodImage" value={`${food.foodImage}`} disabled style={{ color: 'black' }}/>
             
        </div>
        <div className="form-control">
        <label className="font-raleway font-bold text-base mb-2">Pick Up Location</label>
       <input className="input input-bordered join-item w-full"  name="pickupLocation" value={`${food.pickupLocation}`} disabled style={{ color: 'black' }}/>
             
        </div>
        </div>

        <div className="flex items-center gap-6 mt-2">
        <div className="form-control">
        <label className="font-raleway font-bold text-base mt-2 mb-2">Expire Date</label>
       <input className="input input-bordered join-item w-full" name="expiredDateTime" value={`${new Date(food.expiredDateTime).toLocaleDateString()}`} disabled style={{ color: 'black' }}/>
             
        </div>
        <div className="form-control">
        <label className="font-raleway font-bold text-base mt-2 mb-2">User Email</label>
       <input className="input input-bordered join-item w-full" name="user_email" value={`${user.email}`} disabled style={{ color: 'black' }}/>
           
      
        </div>
        </div>
        {food.donator && (
        <div className="flex items-center gap-6 mt-2">
        <div className="form-control">
           <label className="font-raleway font-bold text-base mt-2 mb-2">Donator Name</label>
       <input className="input input-bordered join-item w-full" name="name" value={`${food.donator.name}`} disabled style={{ color: 'black' }}/>
           
        </div>
        <div className="form-control">
        <label className="font-raleway font-bold text-base mt-2 mb-2">Donator Email</label>
       <input className="input input-bordered join-item w-full" name="email" value={`${food.donator.email}`} disabled style={{ color: 'black' }}/>
           
        </div>
        </div>)}

        <div className="flex items-center gap-9 mt-2">
        <div className="form-control">
        <label className="font-raleway font-bold text-base mt-2 mb-2">Request Date</label>
        <DatePicker
        className="border p-2 rounded-md"
        selected={startDate} onChange={(date) => setStartDate(date)} disabled style={{ color: 'black' }} />
        </div>
        <div className="form-control">
        <label className="font-raleway font-bold text-base mt-2 mb-2">Additional Notes</label>
       <textarea className="input input-bordered join-item w-full" type="text" name="additionalNotes" defaultValue={food.additionalNotes} placeholder="Enter Additional Notes"/>
                        
        </div>
        </div>

        <div className="form-control mt-6 ">
        <input className="btn btn-block fomt-raleway font-bold mt-5 bg-green-800 hover:bg-green-900 text-white" type="submit" value="Request Food" />
      
     
        </div>
      </form>
       
     
    </div>
  </div>
</dialog>
          
            
            {/* <button className="btn rounded-2xl bg-green-700 hover:bg-green-900 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-3">Request Food</button> */}
          
            </div>
     </div>
       
         </div>
        </div>
    );
};

export default FoodDetails;
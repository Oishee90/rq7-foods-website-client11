import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../hook/useAuth";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async"
import "react-datepicker/dist/react-datepicker.css";


const Update = () => {
    const {user} = UseAuth()
    const {id} = useParams();
    const [food, setFood] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    useEffect(() => {
        fetch(`http://localhost:5001/addfood/${id}`)
        .then(res => res.json())
        .then(data => {
            setFood(data)
        })
    },[id]);
console.log(food)
    const handleUpdateFood = async e => {
        e.preventDefault()
      
        const foodName = e.target.foodName.value;
        const foodImage = e.target.foodImage.value;
       
        const pickupLocation = e.target.pickupLocation.value;
        const expiredDateTime =startDate
        const additionalNotes = e.target.additionalNotes.value;
        const email = e.target.email.value;
        const name = e.target.email.value;
      

      const reqData ={
        foodName,foodImage,pickupLocation,expiredDateTime,additionalNotes,
        donator:
        {email,name }
      
      }
      console.log(reqData)
      
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
     
      }
    return (
        <div className="container mx-auto mt-20 mb-20">
             <Helmet><title>FoodShare-Update Food</title></Helmet>
          <form onSubmit={handleUpdateFood} className="bg-purple-100 mt-5 p-4 md:p-10 rounded-2xl">
                    <div className="flex md:flex-row flex-col gap-6">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Food Name</label>
                            <input className="input input-bordered join-item w-full" type="text" defaultValue={food.foodName} name="foodName" placeholder="Enter Food Name"/>
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Food Image</label>
                            <input className="input input-bordered join-item w-full" type="text" name="foodImage" defaultValue={food.foodImage} placeholder="Enter Food Image URL"/>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 mt-5">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Food Quantity</label>
                            <input className="input input-bordered join-item w-full" type="text" name="foodQuantity" defaultValue={food.foodQuantity} placeholder="Enter Food Quantity"/>
                        </div>
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Pickup Location</label>
                            <input className="input input-bordered join-item w-full" type="text" name="pickupLocation" defaultValue={food.pickupLocation} placeholder="Enter Pickup Location"/>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 mt-5">
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Expired Date/Time</label>
                            <DatePicker
        className="border p-2 rounded-md w-full"
        selected={startDate} onChange={(date) => setStartDate(date)} defaultValue={food.expiredDateTime}  />
                        </div>
                       
                        <div className="join flex-col gap-2 md:w-1/2">
                            <label className="font-raleway font-bold text-xl">Additional Notes</label>
                            <textarea className="input input-bordered join-item w-full" type="text" name="additionalNotes" defaultValue={food.additionalNotes}  placeholder="Enter Additional Notes"/>
                        
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
    );
};

export default Update;
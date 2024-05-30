import axios from "axios";
import {  useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../hook/useAuth";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async"
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from "@tanstack/react-query";


const Update = () => {
    const {user} = UseAuth()
    const {id} = useParams();
    // const [food, setFood] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const { data: food = [], isLoading, isError, error, } = useQuery({
        queryFn: () => getData(),
        queryKey: ['food',],
    });

    const getData = async () => {

        const { data } = await axios.get(`https://foodking-webserver.vercel.app/addfood/${id}`);
       return data
    }

    const {mutateAsync} = useMutation({   

        mutationFn: async ({reqData}) => {
            const { data } = await axios.put(`https://foodking-webserver.vercel.app/addfood/${id}`, reqData);
            return data;
        },
    onSuccess : (data) => {
        console.log('wow, data updated')
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Update Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
            // Perform any additional actions on success
        }
    },
    onError: (error) => {
        console.error(error);
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    },
        
});

 
console.log(food)
    const handleUpdateFood = async e => {
        e.preventDefault()
        
        const foodName = e.target.foodName.value;
        const foodImage = e.target.foodImage.value;
        const foodQuantity = e.target.foodQuantity.value;
        const pickupLocation = e.target.pickupLocation.value;
        const expiredDateTime =startDate
        const additionalNotes = e.target.additionalNotes.value;
        const email = user.email;
        const name = user.displayName;
        const foodStatus = e.target.foodStatus.value;
        const donatorImage = user.photoURL;

      const reqData ={
        foodName,foodImage,pickupLocation,expiredDateTime,additionalNotes,foodQuantity,foodStatus,
        donator:
        {email,name ,donatorImage }
      
      }
      
      mutateAsync({reqData});
      
      console.log(reqData)
     
      }
      if (isLoading) return <div>Loading...</div>;
      if (isError || error) return <div>Error: {error}</div>;
    return (
        <div className="container mx-auto mt-20 mb-20">
             <Helmet><title>FoodShare- Food</title></Helmet>
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
                            <label className="font-raleway font-bold text-xl">Food Status</label>
                            <input className="input input-bordered join-item w-full" type="text" name="foodStatus" defaultValue={food.foodStatus} placeholder="Enter Pickup Location"/>
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
                    <input className="btn btn-block fomt-raleway font-bold mt-5 bg-green-800 hover:bg-green-900 text-white" type="submit" value="Update Food" />
     
       
                </form>
        </div>
    );
};

export default Update;
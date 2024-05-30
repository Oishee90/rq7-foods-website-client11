import { useEffect, useState } from "react";
import UseAuth from "../hook/useAuth";
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async"
import bg from "../assets/woman-offering-food-neighbor.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyFood = () => {
    const {user} = UseAuth()
    const [items,setItem]=useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [control,setControl]=useState(false)
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
    useEffect(() => {
        const getData = async () => {
            try {
                if (user?.email) {
                    const { data } = await axios.get(`https://foodking-webserver.vercel.app/addFoods/${user.email}`);
                    setItem(data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [user]);
    // console.log(items);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const { data } = await axios.delete(`https://foodking-webserver.vercel.app/addFood/${id}`);
                // console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your this Bucket List item has been deleted.",
                        icon: "success"
                    });
                    setControl(!control);
                    setItem(items.filter(item => item._id !== id));
                }
            } catch (err) {
                console.log(err.message);
                alert('Error: ' + err.message);
            }
        }
    };
 
   
    return (
        <div className="container mx-auto mt-20 bg-white min-h-screen">
        <Helmet><title>FoodShareHub|MyFood</title></Helmet>
        <div data-aos="fade-down"
        className="hero h-[400px] rounded-sm"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-4xl md:text-6xl w-full  text-white font-extrabold font-oswald mb-4" data-aos="fade-up">Manage My Foods</h1>
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200  font-oswald md:mb-4" data-aos="fade-up">
            Welcome to Manage My Foods! This section allows you to efficiently oversee all your food items. Keep track of important details such as food name, quantity served, expiration date, and pickup location. Update or delete entries as needed to ensure your food inventory is always current and well-organized.
            </p>
        
</div>
</div>
</div>
        <div className="font-ubuntu my-8 text-center space-y-6 mt-10 mb-10">
          <h1 className="text-2xl lg:text-4xl font-oswald font-extrabold ">Adventures in Your Bucket List</h1>
          <div className='justify-center mx-auto border-b-2 h-px w-[100px]  border-green-700 '></div>
          <p className="text-lg lg:text-xl font-raleway">Your table lists various foods along with their details such as food name, quantity, expiration date, location, and available actions (update or delete)</p>
        </div>
      
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Foods Name</th>
                <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Foods Image</th>
                <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Quantity</th>
                <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Expired Date</th>
                <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Location</th>
                <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-purple-100">
              {items.map(item => (
                <tr key={item.id}>
                  <td className="border font-raleway font-bold hover:bg-green-100 border-gray-300 px-4 py-2">{item.foodName}</td>
                  <td className="border font-raleway font-bold hover:bg-green-100 border-gray-300 px-4 py-2"><div className="avatar">
  <div className="w-32 rounded">
    <img src={item.foodImage} />
  </div> </div></td>
                  <td className="border font-raleway font-bold hover:bg-green-100 border-gray-300 px-4 py-2">{item.foodQuantity}</td>
                  <td className="border font-raleway font-bold hover:bg-green-100 border-gray-300 px-4 py-2">{new Date(item.expiredDateTime).toLocaleDateString()}</td>
                  <td className="border font-raleway font-bold hover:bg-green-100 border-gray-300 px-4 py-2">{item.pickupLocation}</td>
                  <td className="border font-raleway font-bold border-gray-300 px-4 py-2 flex justify-between space-x-2">
                    <Link to={`/update/${item._id}`}>
                      <button className="transition duration-1000 ease-in cursor-pointer bg-green-700 hover:bg-green-800 font-ubuntu text-white font-bold py-2 px-4 rounded">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(item._id)} className="transition duration-1000 ease-in cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    );
};

export default MyFood;
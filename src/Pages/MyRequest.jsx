
import { useEffect, useState } from "react";
import UseAuth from "../hook/useAuth";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from "../assets/woman-offering-food-neighbor.jpg";
import { Helmet } from "react-helmet-async"
import { useQuery } from "@tanstack/react-query";

const MyRequest = () => {
    const {user} = UseAuth()
    // const [items,setItem]=useState([])
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
         // Whether animation should happen only once - while scrolling down
        });
      }, []);
      const {
        data: items = [],
        isLoading,
        refetch,
        isError,
        error,

      } = useQuery({
        queryFn: () => getData(),
        queryKey:['items'],
      })
      console.log(items)

        const getData = async () => {

            const { data } = await axios.get(`http://localhost:5001/requiest/${user.email}`);
           return data
        }
  
    console.log(items);

    if (isLoading) return <div>Loading...</div>;
    if (isError || error) return <div>Error: {error}</div>;
    return (
        <div className="container mx-auto mt-24 bg-[#faebd9] min-h-screen">
            <Helmet><title>FoodShare-My Request Food</title></Helmet>
              <div data-aos="fade-down"
        className="hero h-[400px] rounded-sm"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" text-4xl md:text-6xl w-full  text-white font-extrabold font-oswald mb-4" data-aos="fade-up">Food Request Dashboard</h1>
            <p className="mt-2 md:mt-5 text-base md:text-xl w-full  text-gray-200  font-oswald md:mb-4" data-aos="fade-up">
            Welcome to Your Food Request Dashboard! Here, you can easily track and manage all your food requests. From detailed food names and quantities to expiration dates and pickup locations, this comprehensive list ensures you stay on top of your culinary needs
            </p>
        
</div>
</div>
</div>
        <div className="font-ubuntu my-8 text-center space-y-6 mt-10 mb-10">
          <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold ">My Food Request List</h1>
          <div className='justify-center mx-auto border-b-2 h-px w-[100px]  border-green-700 '></div>
          <p className="text-lg lg:text-xl font-raleway">Manage your food requests with ease. This page provides a comprehensive overview of all your food requests, including details such as food name, quantity served, expiration date, and pickup location. </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border  font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Foods Id</th>
                <th className="border  font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Foods Name</th>
                <th className="border   font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Donator Name</th>
                <th className="border  font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Donator email</th>
                <th className="border  font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Expired Date</th>
                <th className="border  font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Request Date</th>
                <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Location</th>
              </tr>
            </thead>
            <tbody className="bg-purple-100">
              {items.map(item => (
                <tr key={item.id}>
                  <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item._id}</td>
                  <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.foodName}</td>
                  <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.donator && (item.donator.name)}</td>
                  <td className="border   font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.donator && (item.donator.email)}</td>
                  <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{new Date(item.expiredDateTime).toLocaleDateString()}</td>
                  <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{new Date(item.requestDate).toLocaleDateString()}</td>
                  <td className="border font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.pickupLocation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    );
};

export default MyRequest;
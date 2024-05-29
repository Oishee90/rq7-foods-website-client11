import { useEffect, useState } from "react";
import UseAuth from "../hook/useAuth";
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async"

const MyFood = () => {
    const {user} = UseAuth()
    const [items,setItem]=useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [control,setControl]=useState(false)
    useEffect(() => {
        const getData = async () => {
            try {
                if (user?.email) {
                    const { data } = await axios.get(`http://localhost:5001/addFoods/${user.email}`);
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
    console.log(items);

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
                const { data } = await axios.delete(`http://localhost:5001/addFood/${id}`);
                console.log(data);
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
        <div className="container mx-auto mt-20 bg-[#faebd9] min-h-screen">
               <Helmet><title>EoodKing-MyFood</title></Helmet>
         
            <div className="font-ubuntu my-8 text-center space-y-6 mt-10 mb-10">
  <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold p-10">Adventures in Your Bucket List</h1>
  

   
    </div>
            <table className="w-full border-collapse border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Foods Name</th>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Food Served Quantity</th>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Expired Date</th>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Location</th>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-purple-100">
                    {items.map(item => (
                        <tr key={item.id}>
                            <td className="border font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.foodName}</td>
                            <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.foodQuantity}</td>
                            <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.expiredDateTime} </td>
                            <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.pickupLocation}</td>
                            <td className="border  font-raleway font-bold border-gray-300 px-4 py-2 flex justify-between space-x-2">
                                <Link to={`/update/${item._id}`}><button className="transition duration-1000 ease-in  cursor-pointer bg-[#5f2d70de]  hover:bg-[#4d205c] font-ubuntu text-white font-bold py-2 px-4 rounded">
                                    Update
                                </button></Link>
                                <button onClick={()=>handleDelete(item._id)} className="transition duration-1000 ease-in  cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyFood;
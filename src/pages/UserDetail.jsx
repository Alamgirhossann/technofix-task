// components/UserDetails.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./pages.css";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/user/${id}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-lg w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-200 to-pink-200"></div>
        <div className="px-6 py-8 relative z-10">
          <div className="flex justify-center mb-4">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="rounded-full h-24 w-24 -mt-6 border-4 border-white shadow-md"
            />
          </div>
          <h2 className="text-center text-3xl font-bold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-center text-sm md:text-xl  text-gray-600 mb-4">
            {user.email}
          </p>
          <div className="border-t border-gray-200"></div>
          <div className="mt-4">
            <p className="text-lg text-gray-700 font-semibold mt-2">Address:</p>
            <p className="text-lg text-gray-600">
              {user.address.address}, {user.address.city}
            </p>
            <p className="text-lg text-gray-700 font-semibold mt-2">Suite:</p>
            <p className="text-lg text-gray-600">
              {user.address.coordinates.lat} {user.address.coordinates.lng}
            </p>
            <p className="text-lg text-gray-700 font-semibold mt-2">Company:</p>
            <p className="text-lg text-gray-600">{user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

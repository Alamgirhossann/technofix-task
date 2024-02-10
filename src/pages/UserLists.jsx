import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddUserForm from "../Components/UserAddForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.users?.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers?.sort((a, b) => {
    if (sortBy === "name") {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortBy === "company") {
      return a.company.name.localeCompare(b.company.name);
    }
  });

  if (!filteredUsers) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        >
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
          <option value="company">Sort by company</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <AddUserForm />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedUsers?.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl h-full"
            >
              <div className="relative flex justify-center items-center bg-gradient-to-b from-purple-200 to-pink-200 p-4">
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="rounded-full h-24 w-24  border-4 border-white shadow-md"
                />
                <Link to={`/user/${user.id}`}>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white text-sm">
                    {user.firstName} {user.lastName}
                  </div>
                </Link>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">{user.email}</p>
                <p className="text-sm text-gray-600">
                  {user.address.city}, {user.address.country}
                </p>
                <p className="text-sm text-gray-600">
                  Company: {user.company.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;

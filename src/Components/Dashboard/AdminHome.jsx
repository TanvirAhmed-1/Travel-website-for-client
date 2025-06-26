import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaUser, FaBoxOpen, FaHeart, FaBookOpen } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState({ user: 0, torPackage: 0, wish: 0, booked: 0 });

  useEffect(() => {
    axiosSecure
      .get("/admin/home")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, [axiosSecure]);

  // Prepare data for chart
  const chartData = [
    { name: "Users", value: data.user },
    { name: "Wishlist", value: data.wish },
    { name: "Booked", value: data.booked },
  ];

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-6">
        Welcome Back, <span className="text-blue-600">{user?.displayName || "Admin"}</span>!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard
          icon={<FaUser className="text-white text-3xl" />}
          title="Total Users"
          value={data.user}
          bgColor="bg-blue-500"
        />
        <SummaryCard
          icon={<FaBoxOpen className="text-white text-3xl" />}
          title="Total Packages"
          value={data.torPackage}
          bgColor="bg-green-500"
        />
        <SummaryCard
          icon={<FaHeart className="text-white text-3xl" />}
          title="Total Wishlists"
          value={data.wish}
          bgColor="bg-pink-500"
        />
        <SummaryCard
          icon={<FaBookOpen className="text-white text-3xl" />}
          title="Total Bookings"
          value={data.booked}
          bgColor="bg-yellow-500"
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Overview Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, title, value, bgColor }) => {
  return (
    <div className={`rounded-xl shadow-lg p-5 flex items-center space-x-4 ${bgColor}`}>
      <div className="p-4 bg-white bg-opacity-20 rounded-full">{icon}</div>
      <div className="text-white">
        <p className="text-lg font-medium">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
};

export default AdminHome;

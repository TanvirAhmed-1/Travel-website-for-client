import { useContext, useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";

const UserHome = () => {
  const axiosSecure = useAxiosSecure();
  const [book, setBook] = useState([]);
  const { user } = useContext(AuthContext);
console.log(book)
  useEffect(() => {
    axiosSecure
      .get("/book")
      .then((res) => setBook(res.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">
        Welcome, <span className="text-blue-600">{user?.displayName || "User"}</span>!
      </h2>

      {/* Booking Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 border-t-4 border-blue-500">
          <div className="p-4 bg-blue-500 bg-opacity-20 rounded-full">
            <FaBookOpen className="text-blue-600 text-3xl" />
          </div>
          <div>
            <p className="text-gray-600 text-lg font-medium">Total Bookings</p>
            <h3 className="text-2xl font-bold text-blue-700">{book.length}</h3>
          </div>
        </div>
      </div>

      {/* Booking Cards */}
      <div className="grid grid-cols-1 gap-6">
        {book.map((b) => (
          <div
            key={b._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            {/* Tour Cover */}
            <img
              src={b.tour_cover_photo}
              alt={b.tour_title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {b.tour_title} - {b.tour_location}
                </h3>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  b.booking_states === "Accept"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}>
                  {b.booking_states}
                </span>
              </div>

              <p className="text-gray-600 text-sm">{b.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p><strong>Days:</strong> {b.total_days}</p>
                  <p><strong>Price:</strong> ৳ {b.price}</p>
                  <p><strong>Ratings:</strong>  {b.ratings}</p>
                  <p><strong>Places:</strong> {b.places}</p>
                </div>
                <div>
                  <p><strong>Tour Manager:</strong> {b.tour_manager} ({b.tour_manager_contact})</p>
                  <p><strong>Guide:</strong> {b.guide_name} ({b.guide_contact})</p>
                  <p><strong>Things to carry:</strong> {b.things_to_carry}</p>
                </div>
              </div>

              {/* Hotel Section */}
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={b.hotel_image}
                    alt={b.hotel_name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-semibold">{b.hotel_name}</p>
                    <p className="text-sm text-gray-600">{b.hotel_description}</p>
                  </div>
                </div>
              </div>

              {/* Bus Info */}
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={b.bus_photo}
                    alt={b.bus_name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-semibold">{b.bus_name}</p>
                    <p className="text-sm text-gray-600">Contact: {b.bus_contact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHome;

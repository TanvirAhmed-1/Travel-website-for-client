import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hook/useAxiosSecure";

const Booking = () => {
  const axiosSecure = useAxiosSecure();
  const [book, setBook] = useState([]);


  useEffect(() => {
    axiosSecure
      .get("/book")
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    const res = await axiosSecure.delete(`/book/${id}`);
    console.log(res.data);
    const filterData = book.filter((v) => v._id !== id);
    setBook(filterData);
    if (res.data.acknowledged) {
      Swal.fire({
        position: "top-cent",
        icon: "Delete successful",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Bookings List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-md">
          <thead className="bg-sky-400 text-white text-center text-lg">
            <tr className="*:text-center">
              <th className="p-3 border border-gray-300">Tour Cover</th>
              <th className="p-3 border border-gray-300">Bus Name</th>
              <th className="p-3 border border-gray-300">Bus Contact</th>
              <th className="p-3 border border-gray-300">Tour Title</th>
              <th className="p-3 border border-gray-300">Hotel Name</th>
              <th className="py-3 px-4 text-left">Days</th>
              <th className="py-3 px-4 text-left">Tour Manager</th>
              <th className="py-3 px-4 text-left">Booking States </th>
              <th className="py-3 px-4 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {book.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-5">
                  No bookings found.
                </td>
              </tr>
            ) : (
              book.map((b, index) => (
                <tr
                  key={index}
                  className={`*:text-center ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="p-3 border border-gray-300">
                    <img
                      src={b.tour_cover_photo}
                      alt={b.tour_title}
                      className="w-24 h-16 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="p-3 border border-gray-300">{b.bus_name}</td>
                  <td className="p-3 border border-gray-300">
                    {b.bus_contact}
                  </td>
                  <td className="p-3 border border-gray-300">{b.tour_title}</td>
                  <td className="p-3 border border-gray-300">{b.hotel_name}</td>
                  <td className="p-3 border border-gray-300">
                    {b.total_days}{" "}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {b.tour_manager}{" "}
                  </td>
                  <td className="p-3 border border-gray-300 text-blue-600">
                    {b?.booking_states}{" "}
                  </td>
                  <td
                    className="p-3 border border-gray-300 text-center align-middle"
                    onClick={() => handleDelete(b._id)}
                  >
                    <MdDeleteForever className="text-3xl text-red-500 hover:text-red-600 cursor-pointer inline-block" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;

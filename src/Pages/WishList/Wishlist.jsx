import useWishTanStackQuery from "../../Hook/useWishTanStackQuery";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";

const Wishlist = () => {
  const [wish, refetch] = useWishTanStackQuery();
  const axiosPublic = useAxiosPublic();

  const handleDelete = async (id) => {
    const res = await axiosPublic.delete(`/wish/${id}`);
    console.log(res.data);
    if (res.data.acknowledged === true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: " Successfully Delete!",
        showConfirmButton: false,
        timer: 1100,
      });
    }
    refetch();
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        My Wishlist
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Tour Title</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Days</th>
              <th className="py-3 px-4 text-left">Book</th>
              <th className="py-3 px-4 text-left">Details</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {wish?.map((item, index) => (
              <tr
                key={item._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={item.tour_cover_photo}
                    alt="Cover"
                    className="w-24 h-16 object-cover rounded-md border"
                  />
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium">
                  {item.tour_title}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {item.tour_location}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {item.total_days} Days
                </td>
                <td className="py-3 px-4 text-center">
                  <Link
                    to={`/book/${item.locationId}`}
                    className=" btn text-white bg-blue-600 hover:rounded-lg rounded-xl  hover:bg-sky-400 transition"
                  >
                    Book Now
                  </Link>
                </td>

                <td className="py-3 px-4 text-center">
                  <Link
                    to={`/addData/${item.locationId}`}
                    className=" btn text-white hover:rounded-lg rounded-xl bg-blue-600  hover:bg-sky-400 transition"
                  >
                    Details
                  </Link>
                </td>

                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {wish?.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No wishlist items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;

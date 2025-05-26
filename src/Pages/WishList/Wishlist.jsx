import useWishTanStackQuery from "../../Hook/useWishTanStackQuery";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";

const Wishlist = () => {
  const [wish, refetch] = useWishTanStackQuery();

  useEffect(() => {
    console.log(wish);
  }, [wish]);

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
                  <button
                    onClick={() => console.log("Delete", item._id)}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Delete"
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

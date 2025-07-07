import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useWishTanStackQuery from "../../Hook/useWishTanStackQuery";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

const DataCard = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [wish, refetch] = useWishTanStackQuery();
  const axiosPublic = useAxiosPublic();

  const {
    tour_title,
    tour_location,
    tour_cover_photo,
    total_days,
    places,
    price,
    _id,
  } = data;

  const handleWishlist = async () => {
    const { _id, description, ...data2 } = data;

    const wishData = {
      ...data2,
      locationId: _id,
      email: user?.email,
    };

    try {
      const res = await axiosPublic.post("/wish", wishData);
      refetch();
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Added to wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
<div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-xl duration-300">
  <img
    src={tour_cover_photo}
    alt={tour_title}
    className="w-full h-60 object-cover"
  />

  <div className="p-5 space-y-2">
    <h2 className="text-xl font-semibold text-gray-800">{tour_title}</h2>
    <p className="flex items-center text-gray-500">
      <FaMapMarkerAlt className="mr-1 text-green-600" /> {tour_location}
    </p>
    <p className="text-sm text-gray-600">
      <span className="font-semibold">Total Days:</span> {total_days}
    </p>
    <p className="text-sm text-gray-600">
      <span className="font-semibold">Places:</span> {places}
    </p>
    <p className="text-lg text-green-600 font-bold">৳ {price}</p>

    <div className="flex justify-between pt-4">
      <button
        onClick={handleWishlist}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-700 transition-all"
      >
        <FaHeart className="text-pink-500" />
        Wishlist
      </button>

      <Link to={`/addData/${_id}`}>
        <button className="px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-700 transition-all">
          View Details
        </button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default DataCard;

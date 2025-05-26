import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useWishTanStackQuery from "../../Hook/useWishTanStackQuery";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const TourCard = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [wish, refetch] = useWishTanStackQuery();
  const axiosPublic = useAxiosPublic();
  const {
    tour_title,
    tour_location,
    bus_name,
    bus_contact,
    bus_photo,
    tour_cover_photo,
    hotel_image,
    hotel_description,
    hotel_name,
    total_days,
    tour_manager_contact,
    tour_manager,
    ratings,
    things_to_carry,
    description,
    places,
    guide_contact,
    guide_name,
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

    console.log(wishData);
    try {
      const res = await axiosPublic.post("/wish", wishData);
      console.log(res.data);
      refetch();
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-cent",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card card-compact bg-base-100 w-96 mx-auto shadow-xl">
      <figure>
        <img src={tour_cover_photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tour_title}</h2>
        <p>Location: {tour_location}</p>
        <p>Total Days: {total_days}</p>
        <p>Places: {places}</p>
        <p className="text-green-500">Price: {price}</p>
        <div className="card-actions justify-between items-center">
          <Link onClick={handleWishlist}>
            <button className=" py-2 px-4 btn hover:text-white rounded-xl transition-all duration-300 rounded-br-3xl hover:bg-[#143D60] hover:rounded-br-xl  text-lg font-medium  bg-[#A0C878] border-none">
              Add to Wishlist
            </button>
          </Link>
          <Link to={`/addData/${_id}`}>
            <button className="py-2 px-5 btn text-black hover:text-white text-lg font-medium rounded-xl rounded-br-3xl transition-all duration-300  bg-[#A1E3F9] hover:bg-[#3674B5] hover:rounded-br-xl  border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

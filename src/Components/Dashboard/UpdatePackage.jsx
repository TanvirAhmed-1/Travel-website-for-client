import { useNavigate, useParams } from "react-router-dom";
import useAllPAckageData from "../../Hook/useAllPAckageData";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const UpdatePackage = () => {
  const [Package, refetch] = useAllPAckageData();
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    const found = Package.find((v) => v._id === id);
    if (found) setFormData(found);
  }, [Package, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { _id, ...updateData } = formData;
    try {
      const res = await axiosSecure.patch(`/addData/${id}`, updateData);
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been Update",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/Dashboard/AllPackage");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!formData) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-8">
          Update Tour Package
        </h1>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderInput(
              "Tour Title",
              "tour_title",
              formData.tour_title,
              handleChange
            )}
            {renderInput(
              "Tour Location",
              "tour_location",
              formData.tour_location,
              handleChange
            )}
            {renderInput(
              "Bus Name",
              "bus_name",
              formData.bus_name,
              handleChange
            )}
            {renderInput(
              "Bus Contact",
              "bus_contact",
              formData.bus_contact,
              handleChange
            )}
            {renderInput(
              "Guide Name",
              "guide_name",
              formData.guide_name,
              handleChange
            )}
            {renderInput(
              "Guide Contact",
              "guide_contact",
              formData.guide_contact,
              handleChange
            )}
            {renderInput("Places", "places", formData.places, handleChange)}
            {renderInput(
              "Description",
              "description",
              formData.description,
              handleChange
            )}
            {renderInput(
              "Things To Carry",
              "things_to_carry",
              formData.things_to_carry,
              handleChange
            )}
            {renderInput("Ratings", "ratings", formData.ratings, handleChange)}
            {renderInput(
              "Tour Manager",
              "tour_manager",
              formData.tour_manager,
              handleChange
            )}
            {renderInput(
              "Tour Manager Contact",
              "tour_manager_contact",
              formData.tour_manager_contact,
              handleChange
            )}
            {renderInput(
              "Total Days",
              "total_days",
              formData.total_days,
              handleChange
            )}
            {renderInput(
              "Hotel Name",
              "hotel_name",
              formData.hotel_name,
              handleChange
            )}
            {renderInput(
              "Hotel Description",
              "hotel_description",
              formData.hotel_description,
              handleChange
            )}
            {renderInput(
              "Hotel Image",
              "hotel_image",
              formData.hotel_image,
              handleChange
            )}
            {renderInput(
              "Tour Cover Photo",
              "tour_cover_photo",
              formData.tour_cover_photo,
              handleChange
            )}
            {renderInput(
              "Bus Photo",
              "bus_photo",
              formData.bus_photo,
              handleChange
            )}
            {renderInput("Price", "price", formData.price || "", handleChange)}
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="btn btn-primary w-full md:w-1/2 text-lg"
            >
              Update Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePackage;

function renderInput(labelText, name, value, onChange) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-medium text-gray-700">
          {labelText}
        </span>
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={labelText}
        className="input input-bordered rounded-xl w-full"
        required
      />
    </div>
  );
}

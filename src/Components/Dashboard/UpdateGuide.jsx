import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateGuide = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [guide, setGuide] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.get(`/guides/${id}`).then((res) => {
      setGuide(res.data);
    });
  }, [axiosSecure, id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedGuide = {
      name: form.name.value,
      image: form.image.value,
      phone: form.phone.value,
      email: form.email.value,
      address: form.address.value,
      rating: parseFloat(form.rating.value),
      isAvailable: form.isAvailable.value,
      experience: parseInt(form.experience.value),
      languages: form.languages.value,
      availabilityType: form.availabilityType.value,
    };

    try {
      const res = await axiosSecure.patch(`/guides/${id}`, updatedGuide);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Guide Updated",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/Dashboard/manageGuide"); 
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!guide) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Update Guide
        </h2>
        <form onSubmit={handleUpdate} className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-semibold">Guide Name</label>
            <input
              type="text"
              name="name"
              defaultValue={guide.name}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={guide.image}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              defaultValue={guide.phone}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={guide.email}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Address</label>
            <input
              type="text"
              name="address"
              defaultValue={guide.address}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Rating</label>
            <input
              type="number"
              name="rating"
              step="0.1"
              min="0"
              max="5"
              defaultValue={guide.rating}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Availability</label>
            <select
              name="isAvailable"
              className="select select-bordered"
              defaultValue={guide.isAvailable}
            >
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label font-semibold">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              defaultValue={guide.experience}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Languages Spoken</label>
            <input
              type="text"
              name="languages"
              defaultValue={guide.languages}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Availability Type</label>
            <select
              name="availabilityType"
              className="select select-bordered"
              defaultValue={guide.availabilityType}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="btn bg-green-600 hover:bg-green-700 text-white text-lg px-8 mt-4"
            >
              Update Guide
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateGuide;

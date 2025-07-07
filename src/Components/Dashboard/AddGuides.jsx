import React from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";

const AddGuides = () => {
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const guideData = {
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
    console.log(guideData);

    try {
      const res = await axiosPublic.post("/guides", guideData);
      console.log(res.data);

      if (res.data.acknowledged) {
        Swal.fire({
          title: "success!",
          text: "Guide is successfully Add!",
          icon: "success",
        });
        form.reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Add New Guide
        </h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-semibold">Guide Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter guide name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Paste image link"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="0178XXXXXXX"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Street, City, District"
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
              placeholder="4.5"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Availability Select */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Availability</span>
            </label>
            <select name="isAvailable" className="select select-bordered">
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Experience (Years)
              </span>
            </label>
            <input
              type="number"
              name="experience"
              placeholder="e.g., 5"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Languages Spoken</span>
            </label>
            <input
              type="text"
              name="languages"
              placeholder="e.g., Bangla, English"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Availability Type
              </span>
            </label>
            <select name="availabilityType" className="select select-bordered">
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 mt-4"
            >
              Add Guide
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGuides;

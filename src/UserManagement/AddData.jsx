import React from "react";
import UserManagementNavbar from "./UserManagementNavbar";
import Swal from "sweetalert2";

const AddData = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const tour_title = form.tour_title.value;
    const tour_location = form.tour_location.value;
    const bus_name = form.bus_name.value;
    const bus_contact = form.bus_contact.value;
    const bus_photo = form.bus_photo.value;
    const tour_cover_photo = form.tour_cover_photo.value;
    const hotel_image = form.hotel_image.value;
    const hotel_description = form.hotel_description.value;
    const hotel_name = form.hotel_name.value;
    const total_days = form.total_days.value;
    const tour_manager = form.tour_manager.value;
    const tour_manager_contact = form.tour_manager_contact.value;
    const ratings = form.ratings.value;
    const things_to_carry = form.things_to_carry.value;
    const description = form.description.value;
    const places = form.places.value;
    const guide_contact = form.guide_contact.value;
    const guide_name = form.guide_name.value;
    const price = form.price.value;
    const addedData = {
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
    };
    fetch("http://localhost:5000/addData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Add Tour Data
        </h1>
        <form
          onSubmit={handleAdd}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/** Repeating input fields with same styling */}
          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Tour Title</span>
            <input
              name="tour_title"
              type="text"
              placeholder="Tour Title"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Tour Location</span>
            <input
              name="tour_location"
              type="text"
              placeholder="Location"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Bus Name</span>
            <input
              name="bus_name"
              type="text"
              placeholder="Bus Name"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Bus Contact</span>
            <input
              name="bus_contact"
              type="text"
              placeholder="Bus Contact"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Guide Name</span>
            <input
              name="guide_name"
              type="text"
              placeholder="Guide Name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Guide Contact</span>
            <input
              name="guide_contact"
              type="text"
              placeholder="Guide Contact"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Places</span>
            <input
              name="places"
              type="text"
              placeholder="Places"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Description</span>
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">
              Things To Carry
            </span>
            <input
              name="things_to_carry"
              type="text"
              placeholder="Things To Carry"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Ratings</span>
            <input
              name="ratings"
              type="text"
              placeholder="Ratings"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Tour Manager</span>
            <input
              name="tour_manager"
              type="text"
              placeholder="Tour Manager"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">
              Manager Contact
            </span>
            <input
              name="tour_manager_contact"
              type="text"
              placeholder="Manager Contact"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Total Days</span>
            <input
              name="total_days"
              type="text"
              placeholder="Total Days"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Hotel Name</span>
            <input
              name="hotel_name"
              type="text"
              placeholder="Hotel Name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">
              Hotel Description
            </span>
            <input
              name="hotel_description"
              type="text"
              placeholder="Hotel Description"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Hotel Image</span>
            <input
              name="hotel_image"
              type="text"
              placeholder="Hotel Image URL"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">
              Tour Cover Photo
            </span>
            <input
              name="tour_cover_photo"
              type="text"
              placeholder="Tour Cover URL"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Bus Photo</span>
            <input
              name="bus_photo"
              type="text"
              placeholder="Bus Photo URL"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-semibold mb-1">Price</span>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </label>
        </form>

        <div className="text-center mt-10">
          <input
            type="submit"
            value="ADD"
            className="btn btn-primary px-10 text-lg tracking-wide"
          />
        </div>
      </div>
    </div>
  );
};

export default AddData;

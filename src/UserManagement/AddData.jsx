import React from 'react';
import UserManagementNavbar from './UserManagementNavbar';

const AddData = () => {
   const handleAdd = e=>{
      e.preventDefault();
      const form = e.target;
      const tour_title = form.tour_title.value;
      const tour_location=form.tour_location.value;
      const bus_name =form.bus_name.value;
      const bus_contact=form.bus_contact.value;
      const bus_photo=form.bus_photo.value;
      const tour_cover_photo=form.tour_cover_photo.value;
      const hotel_image= form.hotel_image.value;
      const hotel_description=form.hotel_description.value;
      const hotel_name=form.hotel_name.value;
      const total_days=form.total_days.value;
      const tour_manager=form.tour_manager.value;
      const tour_manager_contact=form.tour_manager_contact.value;
      const ratings= form.ratings.value;
      const things_to_carry=form.things_to_carry.value;
      const description=form.description.value;
      const places =form.places.value;
      const guide_contact=form.guide_contact.value;
      const guide_name=form.guide_name.value;
      const price = form.price.value;
      const addedData= { tour_title,tour_location ,bus_name,bus_contact,bus_photo,tour_cover_photo,hotel_image,hotel_description,hotel_name,total_days,tour_manager_contact,tour_manager,ratings,things_to_carry,description,places,guide_contact,guide_name,price}
      fetch("http://localhost:5000/addData",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(addedData)
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
   }



    return (
        
   <div>
    <UserManagementNavbar></UserManagementNavbar>
    
    <div>
    <form onSubmit={handleAdd}  className="text-center border  p-10 w-full">
        {/* name */}
        <h1 className="text-3xl font-bold">ADD DATA</h1>
       <div className="grid  md:grid-cols-3 lg:grid-cols-3    justify-center">
       <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text">Tour Title</span>
           
          </div>
          <input
          name="tour_title"
            type="text"
            placeholder="Tour Title"
            className="input input-bordered w-full max-w-xs"
          />
          
        </label>
       <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text">Tour Location</span>
           
          </div>
          <input
          name="tour_location"
            type="text"
            placeholder="location"
            className="input input-bordered w-full max-w-xs"
          />
          
        </label>
       <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text">Bus Name</span>
           
          </div>
          <input
          name="bus_name"
            type="text"
            placeholder="Bus Name"
            className="input input-bordered w-full max-w-xs"
          />
          
        </label>
       <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text">Bus Contact</span>
           
          </div>
          <input
          name="bus_contact"
            type="text"
            placeholder="Bus Contact"
            className="input input-bordered w-full max-w-xs"
          />
          
        </label>
      
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Guide Name</span>
           
          </div>
          <input
          name="guide_name"
            type="text"
            placeholder="Guide Name"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Guide Contact</span>
           
          </div>
          <input
          name="guide_contact"
            type="text"
            placeholder="Guide Contact"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Places</span>
           
          </div>
          <input
          name="places"
            type="text"
            placeholder="Places"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
           
          </div>
          <input
          name="description"
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Things To Carry</span>
           
          </div>
          <input
          name="things_to_carry"
            type="text"
            placeholder="Things To Carry"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ratings</span>
           
          </div>
          <input
          name="ratings"
            type="text"
            placeholder="Ratings"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Tour Manager</span>
           
          </div>
          <input
          name="tour_manager"
            type="text"
            placeholder="Tour Manager"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Tour Manager Contact</span>
           
          </div>
          <input
          name="tour_manager_contact"
            type="text"
            placeholder="Tour Manager Contact"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Total Days</span>
           
          </div>
          <input
          name="total_days"
            type="text"
            placeholder="Total Days"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Hotel Name</span>
           
          </div>
          <input
          name="hotel_name"
            type="text"
            placeholder="Hotel Name"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Hotel Description</span>
           
          </div>
          <input
          name="hotel_description"
            type="text"
            placeholder="Hotel Description"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Hotel Image</span>
           
          </div>
          <input
          name="hotel_image"
            type="text"
            placeholder="Hotel Image URL"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Tour Cover Photo</span>
           
          </div>
          <input
          name="tour_cover_photo"
            type="text"
            placeholder="Tour Cover URL"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Bus Photo</span>
           
          </div>
          <input
          name="bus_photo"
            type="text"
            placeholder="Bus Photo"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Price</span>
           
          </div>
          <input
          name="price"
            type="text"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        
       </div>
       <input type="submit" className="btn btn-primary mt-10 w-full" value="ADD" />
      </form>
    </div>
   </div>
    );
};

export default AddData
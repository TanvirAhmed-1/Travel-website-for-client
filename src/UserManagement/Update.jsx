import React from "react";
import UserManagementNavbar from "./UserManagementNavbar";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const user = useLoaderData()
    const handleUpdate = e=>{
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const updateUser = {name,email};
          fetch(`http://localhost:5000/users/${user._id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(updateUser)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
          })
    }
   
  return (
    <div>
        <UserManagementNavbar></UserManagementNavbar>
      <form onSubmit={handleUpdate} className="text-center border p-10">
        {/* name */}
        <h1 className="text-3xl font-bold">Update User Information</h1>
       <div className="flex gap-5 justify-center">
       <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text">Name</span>
           
          </div>
          <input
          name="name"
            type="text"
            placeholder={user.name}
            className="input input-bordered w-full max-w-xs"
          />
          
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
           
          </div>
          <input
          name="email"
            type="text"
            placeholder={user.email}
            className="input input-bordered w-full max-w-xs"
            required
          />
          
        </label>
        
       </div>
       <input type="submit" className="btn btn-primary mt-10" value="Update" />
      </form>
    </div>
  );
};

export default Update;

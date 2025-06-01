import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UserManagementNavbar from "./UserManagementNavbar";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "./../Hook/useAxiosSecure";
import userTanstackQuery from "../Hook/userTanstackQuery";

const UsersList = () => {
  const AxiosSecure = useAxiosSecure();
  const [user, refetch] = userTanstackQuery();
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Deleted !",
          showConfirmButton: false,
          timer: 1100,
        });
        refetch();
      });
  };

  const handleCreate = async (v) => {
  const{_id, ...data}=v
    const userData = {
      ...data,
      role: "Admin",
    };
    try {
      const res = await AxiosSecure.patch(`/users/${v._id}`, userData );
      console.log(res.data);
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Role is Update !",
        showConfirmButton: false,
        timer: 1100,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleCreateUser = async (v) => {

    const{_id, ...data}=v
    const userData = {
      ...data,
      role: "User",
    };


    try {
      const res = await AxiosSecure.patch(`/users/${v._id}`, userData);
      console.log(res.data);
      refetch();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "User role has been updated!",
        showConfirmButton: false,
        timer: 1100,
      });
    } catch (error) {
      console.error("Error updating user role:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
<div className="pt-14 pb-6 text-center">
  <h1 className="text-2xl font-semibold inline-block border-t-2 border-b-2 border-green-600 py-1 px-4">
    Manage Users
  </h1>
</div>


      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-xl font-semibold bg-sky-400 text-black">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Create a Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user?.map((v, index) => (
              <tr key={v._id} className=" text-xl text-black bg-white">
                <td>{index + 1}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td className={`${v?.role==="Admin"? "text-green-500 font-semibold " : "text-black"}`}>{v?.role || "User"}</td>
                <td>
                  {v?.role === "Admin" ? (
                    <button
                      onClick={() =>handleCreateUser(v)}
                      className="btn bg-green-300"
                    >
                      Create User
                    </button>
                  ) : (
                    <button
                      onClick={() =>handleCreate(v)}
                      className="btn bg-green-300"
                    >
                      Create Admin
                    </button>
                  )}
                </td>
                <td onClick={() => handleDelete(v._id)}>
                  <MdDeleteForever className="text-3xl text-red-500 hover:text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;

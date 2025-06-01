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
  const [users, setUsers] = useState([]);
  setUsers(user);
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

  const handleCreate = async (id) => {
    userdata = {
      ...user,
      role: Admin,
    };
    const res = await AxiosSecure.patch(`/users/${id}`);
    console.log(res.data);
    refetch();
    setUsers(res.data);
  };

  const handleCreateUser = async (id) => {
    userdata = {
      ...user,
      role: User,
    };
    const res = await AxiosSecure.patch(`/users/${id}`);
    console.log(res.data);
    refetch();
    setUsers(res.data);
  };

  return (
    <div>
      <UserManagementNavbar></UserManagementNavbar>

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
            {users.map((v, index) => (
              <tr key={v._id} className=" text-xl text-black bg-white">
                <td>{index + 1}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v?.role || "User"}</td>
                <td>
                  {v?.role === "Admin" ? (
                    <button
                      onClick={() => handleCreateUser(v._id)}
                      className="btn bg-green-400"
                    >
                      Create User
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCreate(v._id)}
                      className="btn bg-green-400"
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

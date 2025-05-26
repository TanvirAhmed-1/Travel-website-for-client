import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UserManagementNavbar from "./UserManagementNavbar";

const UsersList = () => {
  const loadedUsers = useLoaderData();
  const [users,setUsers]=useState(loadedUsers) 
  const handleDelete = (_id)=>{
   
    fetch(`http://localhost:5000/users/${_id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      const remaining = users.filter(user=> user._id !== _id)
      setUsers(remaining)
      console.log(data)
    })
  }

  return (
    <div>
      <UserManagementNavbar></UserManagementNavbar>
      <div>
        {
            users.map(user=><div key={user._id} className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      
                      <th>Name</th>
                      <th>Email</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                      
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td className="mx-2 flex justify-end gap-2"><button onClick={()=> handleDelete(user._id)} className="btn btn-primary">Delete</button> <Link to={`/updateuser/${user._id}`}><button className="btn btn-primary">Update</button></Link></td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>)
        }
      </div>
      

        
      </div>
    
  );
};

export default UsersList;

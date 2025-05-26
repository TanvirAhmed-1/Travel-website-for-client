import React from "react";
import { Link } from "react-router-dom";

const UserManagementNavbar = () => {
    const navLinks=<>
    <Link to={'/usermanagement'}><li><h2>Admin Home</h2></li></Link>
    <Link to={'/'}><li><h2>Client Home</h2></li></Link>
    <Link to={'/userslist'}><li><h2>Users List</h2></li></Link>
    <Link to={'/addData'}><li><h2>Add Data</h2></li></Link>
    
    </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-pasicfico">Travel Way Admin Panel</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default UserManagementNavbar;

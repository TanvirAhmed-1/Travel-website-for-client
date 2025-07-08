import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useWishTanStackQuery from "../Hook/useWishTanStackQuery";
import userTanstackQuery from "../Hook/userTanstackQuery";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [wish] = useWishTanStackQuery();
  const [users] = userTanstackQuery();

  const currentUser = users.find((u) => u.email === user?.email);
  const isAdmin = currentUser?.role === "Admin";

  const handleLogout = () => signOutUser();

  const navLinks = (
    <>
      <li>
        <Link to="/" className="text-base font-medium hover:text-yellow-500">
          Home
        </Link>
      </li>
      <li>
        <Link to="/tours" className="text-base font-medium hover:text-yellow-500">
          Tours
        </Link>
      </li>
      <li>
        <Link to="/hotels" className="text-base font-medium hover:text-yellow-500">
          Hotels
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-base font-medium hover:text-yellow-500">
          Contact Us
        </Link>
      </li>
      {user && (
        <li className="relative">

          <Link
            to="/Wishlist"
            className="text-base font-medium hover:text-yellow-500"
          >
            Wishlist <div className="badge badge-lg badge-secondary">{wish?.length || 0}</div>
          </Link>
        </li>
      )}
      {user && (
        <li>
          <Link
            to={isAdmin ? "/Dashboard/AdminHome" : "/Dashboard/UserHome"}
            className="text-base font-medium hover:text-yellow-500"
          >
            Profile
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar max-w-screen-xl mx-auto px-4 py-4">
      
        <div className="navbar-start">
        
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {navLinks}
            </ul>
          </div>


          <Link to="/" className="btn btn-ghost text-2xl  font-pacifico text-black">
            Travel Way
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-3">
          {user && (
            // <div className="flex items-center space-x-2">
            //   {user?.photoURL && (
            //     <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="user" />
            //   )}
            //   <span className="hidden md:inline text-base font-medium">{user.displayName}</span>
            // </div>
            

            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL}/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-1 mt-3 w-32 p-2 shadow">
        <li><a>{user.displayName}</a></li>
      </ul>
    </div>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="py-2 px-4 rounded-xl  bg-sky-400 border-none text-white hover:bg-sky-700"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="py-2 px-4 rounded-xl bg-sky-400 border-none text-black hover:bg-sky-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

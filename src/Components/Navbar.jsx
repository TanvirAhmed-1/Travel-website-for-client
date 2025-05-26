import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import "animate.css"
import useWishTanStackQuery from "../Hook/useWishTanStackQuery";
const Navbar = () => {
  const {user,signOutUser}=useContext(AuthContext)
   const [wish, refetch] = useWishTanStackQuery();


  const handleLogout = ()=>{
    return signOutUser();
  }

    const navlinks= 
    <>
    <Link to={'/'}><li><h2>Home</h2></li></Link>
    <Link to={"/tours"}><li><h2>Tours</h2></li></Link>
    <Link to={'/hotels'}><li><h2>Hotels</h2></li></Link>
    {
      user ?  <Link><li><h2>Profile</h2></li></Link>: ''
    }
  
{
  user ? (
    <Link to="/Wishlist" className="relative flex items-center space-x-2">
      <li className="list-none text-gray-800 hover:text-sky-500 transition font-medium">
        Wishlist
      </li>
      <span className="absolute -top-3 p-3 -right-3 text-[10px] bg-yellow-400 text-sky-800 w-4 h-4 flex items-center justify-center rounded-full font-semibold shadow">
      {wish?.length}
      </span>
    </Link>
  ) : ''
}

    {
      user ? <Link to={'/usermanagement'}><li><h2>Admin Panel</h2></li></Link>: ''
    }
  
   
    

    
    </>
  return (
    <div>
      <div className="navbar bg-base-100 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-5"
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
            {navlinks}
            </ul>
          </div>
          <Link to={'/'}><h2 className="btn btn-ghost text-xl font-pasicfico">Travel Way </h2></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-xl gap-2 flex-row">
            {navlinks}
          </ul>
        </div>
        
          
        
        <div className="navbar-end gap-2">
          {
            user?.displayName?<p>{user.displayName}</p>:" "
          }
        {
            user?.photoURL?<img className="rounded-lg w-12" src={user.photoURL} alt="" />:' '
          }
   {
    user? <h2 onClick={handleLogout} className="btn bg-yellow-400 border-none text-black">Logout</h2>:<Link to={'/login'}> <h2 className="btn bg-yellow-400 border-none text-black">Login</h2></Link>
   }
  </div>
      
      </div>
    </div>
  );
};

export default Navbar;

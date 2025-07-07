import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome, FaShoppingBag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import userTanstackQuery from "../../Hook/userTanstackQuery";
// Adjust path as needed

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [users, refetch] = userTanstackQuery();

  // const userRole = users.find((v) => v.email === user?.email);
  // const isAdmin = userRole?.role === "Admin";

  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden m-4 w-fit"
        >
          <FaBars />
        </label>
        <div className="py-4 px-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu py-4 md:w-80 w-60 min-h-full bg-green-400 text-gray-800 text-lg font-semibold space-y-2">
          <a className="btn btn-ghost text-3xl font-pasicfico">Travel Way</a>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/AdminHome">
                  <FaHome className="mr-2" /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/userslist">
                  <FaHome className="mr-2" /> Manage User
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/ManageBook">
                  <FaHome className="mr-2" /> Manage Book
                </NavLink>
              </li>

              <li>
                <NavLink to="/Dashboard/addData">
                  <FaHome className="mr-2" /> Add Place
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/AllPackage">
                  <FaHome className="mr-2" /> All Package
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/Dashboard/UserHome">
                  <FaHome className="mr-2" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/bookPlace">
                  <FaHome className="mr-2" /> Book Place
                </NavLink>
              </li>
            </>
          )}

          <div className="divider divider-neutral"></div>

          {/* Common Links */}
          <li>
            <NavLink to="/">
              <FaHome className="mr-2" /> Main Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdEmail className="mr-2" /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

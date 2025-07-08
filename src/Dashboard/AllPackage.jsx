import { FaPen, FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAllPAckageData from "../Hook/useAllPAckageData";
import useAxiosSecure from "../Hook/useAxiosSecure";

const AllPackage = () => {
  const [Package, refetch] = useAllPAckageData();
  const axiosSecure = useAxiosSecure();
  console.log(Package);

  const HandleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`/addData/${id}`);
      console.log(res.data);
      if (res.data.deletedCount === 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Package is Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 rounded-xl">
      <div>
        <h1 className="text-3xl font-semibold text-center py-10">All Package</h1>
      </div>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Tour Title</th>
              <th>Price</th>
              <th>tour Manager</th>
              <th>Manager Contact</th>
              <th>Hotel Name</th>
              <th>Guid Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Package?.map((v, index) => (
              <tr className="text-sm text-gray-800 font-normal" key={index}>
                <th>{index + 1}</th>
                <th>
                  <img
                    src={v.tour_cover_photo}
                    className="mask rounded-xl h-16 w-20  "
                    alt=""
                    srcset=""
                  />
                </th>
                <td>{v.tour_title}</td>
                <td>{v.price || "N/A"}</td>
                <td>{v.tour_manager}</td>
                <td>{v.tour_manager_contact}</td>
                <td>{v.hotel_name}</td>
                <td>{v.guide_name}</td>
                <td>
                  <Link to={`/Dashboard/UpdatePackage/${v._id}`}>
                    <FaPen className="text-blue-500 hover:text-blue-700 text-4xl text-center border border-gray-300 rounded-xl p-2" />
                  </Link>
                </td>
                <td>
                  <button onClick={() => HandleDelete(v._id)}>
                    <MdDeleteForever className="text-red-500 hover:text-red-700 text-4xl text-center border border-gray-300 rounded-xl p-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPackage;

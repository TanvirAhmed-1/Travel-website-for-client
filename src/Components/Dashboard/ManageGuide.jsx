import { FaTrash, FaEdit } from "react-icons/fa"; // Icons
import useGuideHook from "../../Hook/useGuideHook";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageGuide = () => {
  const [guides, refetch] = useGuideHook();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`/guides/${id}`);
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Guide is Deleted!",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Manage All Guides
      </h1>

      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="table w-full text-sm">
          <thead className="bg-blue-100 text-gray-800">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Guide Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
              <th>Languages</th>
              <th>Type</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((guide, index) => (
              <tr key={guide._id} className="hover:bg-blue-50 transition">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-20 h-12 rounded-xl object-cover border shadow"
                  />
                </td>
                <td>{guide.name}</td>
                <td>{guide.phone}</td>
                <td>{guide.email}</td>

                <td>
                  <span
                    className={`badge text-sm px-3 py-3 font-medium rounded-full ${
                      guide.isAvailable === "true"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {guide.isAvailable === "true" ? "Available" : "Unavailable"}
                  </span>
                </td>

                <td>{guide.languages}</td>
                <td>{guide.availabilityType}</td>

                <td>
                  <Link
                    to={`/Dashboard/UpdateGuide/${guide._id}`}
                    className="text-blue-500 hover:text-blue-800"
                    title="Update"
                  >
                    <FaEdit className="text-xl" />
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(guide._id)}
                    className="text-red-500 hover:text-white border border-red-300 hover:bg-red-500 rounded-full p-2 transition duration-200"
                    title="Delete"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {guides.length === 0 && (
          <p className="text-center text-red-500 mt-10">No guides found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageGuide;

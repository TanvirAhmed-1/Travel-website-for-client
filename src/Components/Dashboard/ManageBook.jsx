import useAxiosSecure from "../../Hook/useAxiosSecure";
import useBookedStackQuery from "../../Hook/useBookedStackQuery";

const ManageBook = () => {
    const axiosSecure = useAxiosSecure();
  const [Booking, refetch] = useBookedStackQuery();

  const handleState =async (value) => {
   const{booking_states,_id, ...data}=value
   const sendData={
    booking_states:"Accept"
   }
  const res=await axiosSecure.patch(`/book/${_id}`,sendData) 
    console.log(res.data)
    refetch()
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        All Bookings
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-sky-500 text-white text-center">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Tour Title</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Total Days</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Booking Status</th>
            </tr>
          </thead>
          <tbody className="text-center text-gray-700">
            {Booking?.map((item, index) => (
              <tr
                key={item._id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{item.tour_title}</td>
                <td className="py-3 px-4">{item.tour_location}</td>
                <td className="py-3 px-4">{item.total_days} days</td>
                <td className="py-3 px-4">{item.firstName}</td>
                <td className="py-3 px-4">{item.phone}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td
                  onClick={() => handleState(item)}
                  className="py-3 px-6 capitalize font-medium"
                >
                  <button className={`${item.booking_states == "Accept" ? "text-white bg-[#36b59c] hover:bg-[#daf2fa] hover:text-blue-600":"bg-[#daf2fa] hover:bg-[#36b59c] text-blue-600"} py-2 px-5 btn hover:text-white text-lg font-medium rounded-xl rounded-br-3xl transition-all duration-300  hover:rounded-br-xl  border-none`}>
                    {item.booking_states}
                  </button>
                </td>
              </tr>
            ))}
            {Booking?.length === 0 && (
              <tr>
                <td colSpan="8" className="py-6 text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBook;

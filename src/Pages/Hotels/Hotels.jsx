import { useLoaderData, Link } from "react-router-dom";

const Hotels = () => {
  const data = useLoaderData();

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-6">Available Hotels</h2>

      <div className="overflow-x-auto w-full p-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Hotel Name</th>
              <th>Places</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v) => (
              <tr key={v._id} className="hover">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-xl h-16 w-16">
                        <img
                          src={
                            v.hotel_image || "https://via.placeholder.com/150"
                          }
                          alt={`Image of ${v.hotel_name}`}
                          onError={(e) =>
                            (e.target.src = "https://via.placeholder.com/150")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{v.hotel_name}</td>
                <td>{v.tour_location}</td>
                <td className="text-green-600 font-medium">
                  {v.price ? `${v.price} TK` : "N/A"}
                </td>
                <td>
                  <Link to={`/addData/${v._id}`}>
                    <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 border-none">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hotels;

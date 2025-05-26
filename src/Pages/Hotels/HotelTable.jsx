import React from "react";
import { Link } from "react-router-dom";

const HotelTable = ({ data }) => {
  const { hotel_image, hotel_name, price, _id, tour_location } = data;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={hotel_image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{hotel_name}</td>
      <td>{tour_location}</td>
      <th>{price} TK</th>
      <th>
        <Link to={`/addData/${_id}`}>
          {" "}
          <button className="btn btn-ghost btn-xs">details</button>{" "}
        </Link>
      </th>
    </tr>
  );
};

export default HotelTable;

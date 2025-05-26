import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelTable from "./HotelTable";
import Navbar from "../../Components/Navbar";

const Hotels = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Hotel Name</th>
              <th>Places</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((aData) => (
              <HotelTable data={aData} key={aData._id}></HotelTable>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Hotels;

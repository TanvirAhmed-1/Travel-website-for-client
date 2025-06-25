import { useLoaderData } from "react-router-dom";
// import { useState, useEffect } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Book = () => {
  const{user}=useContext(AuthContext)
  const tourData = useLoaderData();
  const axiosPublic = useAxiosPublic();

  // const [today, setToday] = useState("");
  // const [checkInDate, setCheckInDate] = useState("");

console.log(tourData)

// user chose tours date

  // useEffect(() => {
  //   const now = new Date();
  //   const yyyy = now.getFullYear();
  //   const mm = String(now.getMonth() + 1).padStart(2, "0");
  //   const dd = String(now.getDate()).padStart(2, "0");
  //   const formattedToday = `${yyyy}-${mm}-${dd}`;
  //   setToday(formattedToday);
  // }, []);

  const handleBook = async (e) => {
    e.preventDefault();
    const{_id, ...Data}=tourData
    const form = e.target;
    const bookingInfo = {
      ...Data,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      email: form.email.value,
      booking_states: "pending",
      // checkIn: form.checkIn.value,
      // checkOut: form.checkOut.value,
    };

    // Validate dates
    if (bookingInfo.checkOut <= bookingInfo.checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    console.log("Booking Info:", bookingInfo);
    const res = await axiosPublic.post(`/book`, bookingInfo);
    console.log(res.data);
      if (res.data?.insertedId || res.data?.acknowledged) {
      Swal.fire({
        icon: "success",
        title: "Booking Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
      form.reset();

    form.reset();
  };

  return (
    <div>
      <h2 className="text-center text-4xl my-10">Book Desired Packages</h2>
      <section className="p-6 bg-gray-100 ">
        <form onSubmit={handleBook} className="max-w-5xl mx-auto space-y-12">
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-white border border-gray-200">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">First name</label>
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Last name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Phone</label>
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder={user?.email ||"Email"}
                required
                readOnly
                className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Check-In Date */}
            {/* <div className="flex flex-col">
              <label className="text-sm mb-1">Check-in Date</label>
              <input
                name="checkIn"
                type="date"
                min={today}
                required
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-yellow-300"
              />
            </div> */}

            {/* Check-Out Date */}
            {/* <div className="flex flex-col">
              <label className="text-sm mb-1">Check-out Date</label>
              <input
                name="checkOut"
                type="date"
                min={checkInDate || today}
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-yellow-300"
              />
            </div> */}
          </fieldset>

          {/* Submit Button */}
          <div className="flex justify-center">
            <input
              type="submit"
              value="Book"
              className="btn bg-yellow-300 text-black border-none px-6 py-2 rounded-md hover:bg-yellow-400 transition"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Book;

import { FaPhoneAlt, FaEnvelope, FaShieldAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
          Contact <span className="text-blue-500">Us</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Reach Out</h3>
            <p className="text-gray-600">
              Have questions about tours, bookings, or custom travel plans?
              We're here to help!
            </p>

            <div className="flex items-start gap-4 text-blue-600">
              <FaPhoneAlt className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p>0178692811</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-blue-600">
              <FaEnvelope className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p>ntanvirahmed123@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-blue-600">
              <FaShieldAlt className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Privacy Policy</h4>
                <p className="text-sm text-gray-600">
                  We value your privacy. Your personal data will never be shared
                  without your consent.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Send a Message
            </h3>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Booking Inquiry"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} TravelVista. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

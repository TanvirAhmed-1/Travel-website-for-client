

const contact = () => {
  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600">
              We'd love to hear from you! Whether you have a question about tours, pricing, or anything else — our team is ready to help.
            </p>
            <p><strong>📞 Phone:</strong> <span className="text-blue-700">0178692811</span></p>
            <p><strong>📧 Email:</strong> <span className="text-blue-700">ntanvirahmed123@gmail.com</span></p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">🔒 Privacy Policy</h4>
              <p className="text-sm text-gray-600">
                We respect your privacy. Your data is securely handled and never shared with third parties without consent.
              </p>
            </div>
          </div>

          {/* Message Form */}
          <form className="bg-white p-6 rounded-xl shadow-md space-y-5">
            <h3 className="text-xl font-semibold text-gray-800">Send Us a Message</h3>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} TravelVista. All rights reserved.
        </div>
      </div>
    </div>
  );
};


export default contact;
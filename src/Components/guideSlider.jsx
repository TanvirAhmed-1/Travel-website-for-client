import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useGuideHook from "../Hook/useGuideHook";

const GuideSlider = () => {
  const [guides] = useGuideHook();

  return (
    <div className="py-14 px-4 lg:px-20 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Our Professional Guides
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {guides?.map((guide) => (
          <SwiperSlide key={guide._id}>
            <div className="bg-white shadow-md rounded-2xl overflow-hidden p-6 flex flex-col items-center transition duration-300 hover:shadow-xl h-full">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 shadow-md">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {guide.name}
              </h3>
              <p className="text-sm mt-3 text-gray-600">Email: {guide.email}</p>
              <p className="text-sm text-gray-600 my-2">Phone: {guide.phone}</p>

              <div className="text-center text-gray-600  text-sm">
                <p className="italic">Speaks: {guide.languages}</p>
                <p className="italic my-1">Experience: {guide.experience} Year</p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center text-sm mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    guide.isAvailable === "true" ? "bg-green-500" : "bg-red-400"
                  }`}
                >
                  {guide.isAvailable === "true" ? "Available" : "Unavailable"}
                </span>

                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">
                  ★ {guide.rating}
                </span>

                <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                  {guide.availabilityType}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GuideSlider;

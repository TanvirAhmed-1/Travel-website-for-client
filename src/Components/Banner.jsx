import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="min-h-screen sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://i.ibb.co.com/zhRTsbnL/mamun-srizon-qay3l-NDSHzc-unsplash.jpg"
            alt="..."
            className="w-full object-cover"
          />
          <img
            src="https://i.ibb.co.com/SXS5BPRb/204-36376273530-3c9a0335f5-b-copyjpg.jpg"
            alt="..."
            className="w-full object-cover"
          />
          <img
            src="https://i.ibb.co/TxNZRCSg/istockphoto-1173105044-170667a.jpg"
            alt="..."
            className="w-full object-cover"
          />
          <img
            src="https://i.ibb.co.com/pjjDZG1d/mirinja.jpg"
            alt="..."
            className="w-full object-cover"
          />
          <img
            src="https://i.ibb.co.com/wrzNq6mJ/tiger-1600x900.webp"
            alt="..."
            className="w-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

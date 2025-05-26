import React from "react";
import {Carousel } from "flowbite-react";





const Banner = () => {
  
    // <div className="carousel max-h-64 mt-32">
    // //   <div id="slide1" className="carousel-item relative w-full  ">
    // //     <img
    // //       src="https://i.ibb.co.com/zhRTsbnL/mamun-srizon-qay3l-NDSHzc-unsplash.jpg"
    // //       className="w-full h-64"
    // //     />
    // //     <div className="absolute font-pasicfico text-6xl text-white  min-h-screen left-1/2 top-1/2">
        
    // //     <p>Adventure Tours</p>
    // //     </div>
        
    // //     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    // //       <a href="#slide4" className="btn btn-circle">
    // //         ❮
    // //       </a>
    // //       <a href="#slide2" className="btn btn-circle">
    // //         ❯
    // //       </a>
    // //     </div>
    // //   </div>
    // //   <div id="slide2" className="carousel-item relative w-full">
    // //     <img
    // //       src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
    // //       className="w-full"
    // //     />
    // //     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    // //       <a href="#slide1" className="btn btn-circle">
    // //         ❮
    // //       </a>
    // //       <a href="#slide3" className="btn btn-circle">
    // //         ❯
    // //       </a>
    // //     </div>
    // //   </div>
    // //   <div id="slide3" className="carousel-item relative w-full">
    // //     <img
    // //       src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
    // //       className="w-full"
    // //     />
    // //     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    // //       <a href="#slide2" className="btn btn-circle">
    // //         ❮
    // //       </a>
    // //       <a href="#slide4" className="btn btn-circle">
    // //         ❯
    // //       </a>
    // //     </div>
    // //   </div>
    // //   <div id="slide4" className="carousel-item relative w-full">
    // //     <img
    // //       src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
    // //       className="w-full"
    // //     />
    // //     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    // //       <a href="#slide3" className="btn btn-circle">
    // //         ❮
    // //       </a>
    // //       <a href="#slide1" className="btn btn-circle">
    // //         ❯
    // //       </a>
    // //     </div>
    // //   </div>
    // // </div>


    return ( <div>


<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img  src="https://i.ibb.co.com/zhRTsbnL/mamun-srizon-qay3l-NDSHzc-unsplash.jpg"  alt="..." />
        <img src="https://i.ibb.co.com/VW3Vnpxh/mirinja.webp" alt="..." />
        <img    src="https://i.ibb.co.com/CNsRXgK/rangamati.webp" alt="..." />
        <img   src="https://i.ibb.co.com/pjjDZG1d/mirinja.jpg" alt="..." />
        <img   src="https://i.ibb.co.com/wrzNq6mJ/tiger-1600x900.webp" alt="..." />
      </Carousel>
    </div>


</div>

    
  );
};

export default Banner;

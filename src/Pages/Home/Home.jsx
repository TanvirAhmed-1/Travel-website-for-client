import React, { useContext } from "react";
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import DataCard from "./DataCard";
import GuideSlider from "../../Components/guideSlider";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
    
      <Banner></Banner>

      <p className="text-4xl text-center font-bold my-10">
        Our Polpular Packages
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-2  ">
        {data.map((aData) => (
          <DataCard data={aData} key={aData._id}></DataCard>
        ))}
      </div>
      <GuideSlider></GuideSlider>
    </div>
  );
};

export default Home;

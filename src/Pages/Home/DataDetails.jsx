import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

const DataDetails = () => {
    const data = useLoaderData();
    const { tour_title,
        tour_location,
        bus_name,
        bus_contact,
        bus_photo,
        tour_cover_photo,
        hotel_image,
        hotel_description,
        hotel_name,
        total_days,
        tour_manager_contact,
        tour_manager,
        ratings,
        things_to_carry,
        description,
        places,
        guide_contact,
        guide_name,
        price, _id} = data;

    return (
       <div>
        <h2 className="text-6xl text-center text-yellow-600">{tour_title}</h2>
        <div className='grid lg:grid-cols-4 mx-auto justify-center mt-10 gap-4'>
            {/* details grid 1 */}
            <div className='space-y-2 col-span-2 mx-auto lg:col-span-1'>
                <img src={tour_cover_photo} alt="" />
                

                
            </div>
            {/* details grid 2 */}
            <div className='col-span-2'>
            <h2 className='text-2xl  font-bold '>Location: {tour_location}</h2>
                <p className='text-2xl text-green-600'>Price: {price}</p>
                <p className='text-2xl'>Bus Name: {bus_name}</p>
                <p className='text-2xl'>Bus Contact: {bus_contact}</p>
                <p className='text-2xl'>Hotell Name: {hotel_name}</p>
                <p className='text-2xl'>Hotell Description: {hotel_description}</p>
                <p className='text-2xl'>Total Days: {total_days}</p>
                <p className='text-2xl'>Tour Manager: {tour_manager}</p>
                <p className='text-2xl'>Tour Manager Phone: {tour_manager_contact}</p>
                <p className='text-2xl'>Guide Name: {guide_name}</p>
                <p className='text-2xl'>Guide Phone: {guide_contact}</p>
                <p className='text-2xl'>Places: {places}</p>
                <p className='text-2xl'>Description: {description}</p>
                <p className='text-2xl'>Ratings: {ratings}</p>
                <p className='text-2xl'>Essentials: {things_to_carry}</p>
                <Link to={`/book/${_id}`}><button className='mt-10 btn btn-primary bg-yellow-300 border-none mb-10'>Book Now</button></Link>
                



            </div>
        </div>

       </div>
    );
};

export default DataDetails;
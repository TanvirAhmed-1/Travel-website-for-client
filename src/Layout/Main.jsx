import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

import FooterHome from '../Footer/FooterHome';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
             <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterHome></FooterHome>
        </div>
    );
};

export default Main;
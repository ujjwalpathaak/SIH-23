import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import home from "../assets/img/home.png"

function Home() {
    return (
        <>
            <img className='homeimg absolute' src={home} alt='home' />
            <Link to="login" class="z-10 mr-6 duration-150 relative top-[8vh] -right-3/4 bg-orange-400 rounded-full hover:bg-white-500 text-white font-semibold hover:text-orange-400 py-2 px-4 border-2 border-white-500 hover:border-orange-400 hover:bg-white">
                Register
            </Link>
            <Link to="login" class="z-10 duration-150 relative top-[8vh] -right-3/4 bg-orange-400 rounded-full hover:bg-white-500 text-white font-semibold hover:text-orange-400 py-2 px-4 border-2 border-white-500 hover:border-orange-400 hover:bg-white">
                Login
            </Link>
        </>)
};

export default Home;
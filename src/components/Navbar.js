import React from 'react';
import logo from '../image/Frame.png'
import '../App.css'

const Navbar = () => {
    return (
        <div className="navbar-container ">
            <div className='flex items-center justify-between mt-7' >
                <div className='flex items-center '>
                    <img className='w-[30px]' src={logo} alt=''/>
                    <h1 className='gap-1'>uifry</h1>
                    <div className='ml-8'>
                        <ul className='flex items-center gap-5'>
                            <li>
                                <a href='#home'>Home</a>
                            </li>
                            <li>
                                <a href='#about'>About us</a>
                            </li>
                            <li>
                                <a href='#price'>Pricing</a>
                            </li>
                            <li>
                                <a href='#feature'>Features</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='bg-black text-white px-8 py-2.5 rounded'>
                    <button>Download</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

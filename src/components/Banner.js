import React from 'react';
import logo from '../image/banner/Group 1000002356.png'
import ban1 from '../image/banner/Group 1000004718.png'
import ban2 from '../image/banner/Group 35905.png'
import ban3 from '../image/banner/Ellipse 2.png'
import ban4 from '../image/banner/Ellipse 1.png'
import phone from '../image/banner/iPhone 13 Pro (2).png'
import { FaApple } from "react-icons/fa";
import star1 from '../image/Star 2.png'
import star2 from '../image/Star 7.png'

const Banner = () => {
    return (
        <>
            <img src={star1} className='mt-[250px] ml-[30px]' alt=''/>
            <div className='navbar-container'>
                <div className='ml-[-190px] mt-[-300px]'>
                    <img src={logo} alt=''/>
                </div>

                <div className='relative '>
                    <div className='bg-black w-full h-[550px] mt-[-250px] overflow-hidden'>
                        <div className="image-container">
                            <img className='ml-[855px] mt-[0px]' src={ban1} alt=''/>
                        </div>
                        <div className="image-container">
                            <img className='ml-[0px] mt-[233px]' src={ban2} alt=''/>
                        </div>
                        <div className="image-container">
                            <img className='ml-[760px] mt-[33px] ' src={ban3} alt=''/>
                        </div>
                        <div className="image-container">
                            <img className='ml-[760px] mt-[94px] ' src={ban4} alt=''/>
                        </div>
                        <div className="image-container ">
                            <img className='ml-[714px] mt-[59px] overflow-hidden ' src={phone} alt=''/>
                        </div>

                        <div className='image-container'>
                            <img src={star2} alt='' className='ml-[600px] mt-8'/>
                            <h1 className='secondclass capitalize text-[50px] mt-[90px] ml-[70px] text-white'>
                                ready to get started?
                            </h1>
                            <p className='capitalize text-white ml-[70px] text-[20px]'>
                                risus habitant leo egestas marius diam eget morbi tempus
                            </p>
                            <p className='capitalize text-white ml-[70px] text-[20px]'>
                                vulputate.
                            </p>

                            <button
                                className='text-black px-4 py-2  rounded mt-3 text-[20px] flex items-center gap-2 ml-[70px] bg-white'>
                                Download{<FaApple/>}
                            </button>
                            <img src={star2} alt='' className='ml-[400px] mt-2'/>

                        </div>
                    </div>
                </div>


            </div>
        </>

    );
}
export default Banner;

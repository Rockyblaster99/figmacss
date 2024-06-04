import React from 'react'
import image from '../image/iPhone-13-Pro-Front.png';
import '../App.css'
import image1 from '../image/Group 35887.png'
import bgcolor from '../image/Group 35896.png'
import bgcolor2 from '../image/Group 35924.png'
import bgcolor3 from '../image/Group 35899.png'
import { FaArrowRight } from "react-icons/fa6";
import star from '../image/Star 2.png'
import phone2 from '../image/iPhone-13-Pro-Front (1).png'
import video from '../image/Group 3.png'
const Home = () => {
    return (
        <>
            <a id='home'></a>
            <div className='flex justify-between items-center'>
                <img src={star} alt='' className='ml-[30px]'/>
                <img src={star} alt='' className='ml-[] '/>
            </div>


            <div className='flex justify-between relative w-[80%] mx-auto mt-[-92px]'>
                <div className='relative w-[45%] '>
                    <img src={bgcolor} alt=''/>
                    <h1 className='mt-[-280px] font-bold text-[56px] '>
                        Make the Best
                    </h1>
                    <h1 className='mt-[-30px] font-bold text-[56px]'>
                        Financial Decisions
                    </h1>
                    <p className='w-[88%] capitalize'>
                        Cum et convallis risus placerat aliquam, nunc. Scelerisque Aliquet faucibus tincidunt eu
                        adipiscing sociis arcu lorem porttitor.
                    </p>

                    <div className='pl-2 pt-2 flex items-center gap-5'>
                        <button
                            className='bg-black text-white pt-[8px] pb-[8px] pr-[20px] pl-[20px] rounded flex items-center'>
                            Get Started
                            <span>{<FaArrowRight/>}</span>
                        </button>
                        <div className='flex items-center gap-[-4px]'>
                            <button className=' pt-[8px] text-[20px] flex items-center'>
                                <img className='mt-[10px]' src={video} alt=''/> Watch Video
                            </button>

                        </div>

                    </div>


                    <div className='w-[80%] relative'>
                        <div className='pt-[80px] pl-[100px]'>
                            <img className=' ' src={star} alt=''/>

                        </div>
                        <div className='mt-[-90px]'>
                            <img src={bgcolor2} alt=''/>
                        </div>

                    </div>

                </div>


                <div className='relative'>
                    <div>
                        <img src={image1} alt=''/>
                    </div>
                    <div className="image-container">
                        <img src={image} alt='' className="third"/>
                    </div>
                    <div className="image-container">
                        <img src={phone2} alt='' className="second"/>
                    </div>
                    <div className="image-container">
                        <img src={image} alt='' className="first"/>
                    </div>

                    <div className=''>
                        <div className='mt-[-680px] ml-[70px]'>
                            <img src={bgcolor3} alt=''/>
                        </div>

                        <div className='mt-[-250px] ml-[110px]'>
                            <img src={star} alt=''/>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
export default Home

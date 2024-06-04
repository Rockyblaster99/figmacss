import React from 'react'
import logo from '../image/Frame.png'
import logo2 from '../image/Frame (2).png'
import logo3 from '../image/Frame (3).png'

const fgrid = [
    {
        image:logo,
        head:'uifry'
    },
    {
        image:logo2,
        head:'help@frybix.com'
    },
    {
        image:logo3,
        head:'+1234 456 678 89'
    },
]
const Footer = () => {
    return (
        <>
            <div className='navbar-container'>
                <div className='flex gap-[83px] mt-[150px]'>
                    <div>
                        {
                            fgrid.map((item, index) => (
                                    <div className='flex items-center gap-2'>
                                        <img className='w-[20px]' src={item.image} alt=''/>
                                        <h1 className={`${index === 0 ? 'font-bold myClass text-[22px]' : 'capitalize text-gray-700 font-semibold'} `}>{item.head}</h1>
                                    </div>
                                )
                            )
                        }
                    </div>

                    <div>
                        <h1 className='myClass text-[22px]'>Links</h1>
                        <ul className=''>
                            <li className='mb-3'>Home</li>
                            <li className='mb-3'>About us</li>
                            <li className='mb-3'>Bookings</li>
                            <li className='mb-3'>Blog</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='myClass text-[22px]'>Legal</h1>
                        <ul>
                            <li className='mb-3'>Terms Of Use</li>
                            <li className='mb-3'>Privacy Policy</li>
                            <li className='mb-3'>Cookie Policy</li>

                        </ul>
                    </div>


                    <div>
                        <h1 className='myClass text-[22px]'>Product</h1>
                        <ul>
                            <li className='mb-3'>Take Tour</li>
                            <li className='mb-3'>Live Chat</li>
                            <li className='mb-3'>Reviews</li>
                        </ul>
                    </div>


                    <div>
                        <h1 className='myClass text-[22px]'>Newsletter</h1>
                        <h3>Stay Up To Date</h3>
                        <div className='p-[40px] '>
                        <span className='text-gray-500'>
                            Your email
                        </span>
                            <button className='ml-[60px] bg-black px-6 py-2.5 rounded text-white'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>


                <hr className='h-[2px] border-none mb-[10px] mt-[70px]  left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent'/>


                <div className='mt-[30px] mb-[60px] text-center'>
                    <h1 className='capitalize'>
                        Copyright2022 uifry.com All rights reserved
                    </h1>
                </div>


            </div>
        </>

    )
}
export default Footer

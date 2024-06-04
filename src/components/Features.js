import React from 'react'
import image1 from '../image/Group 35933.png'
import image2 from '../image/Group 35930.png'
import icon1 from '../image/Icon.png'
import icon2 from '../image/cube-02.png'
import icon3 from '../image/cube-04.png'

import ad1 from '../image/advantage/Group 35899.png'
import ad2 from '../image/advantage/Group 35931.png'
import ad3 from '../image/advantage/Group 35935 (1).png'
import ad4 from '../image/advantage/On Hold.png'

import ad5 from '../image/advantage2/Group.png'
import ad6 from '../image/advantage2/Group 35899 (1).png'
import ad7 from '../image/advantage2/Group 35932.png'
import ad8 from '../image/advantage2/Group 35937.png'

import star from '../image/Star 2.png'

const featuresData = [
    {
        image:icon1,
        heading:'Budgeting Intervals',
        desc:' Cum et convallis risus placerat aliquam, nunc. Scelerisque Aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.'
    },
    {
        image:icon2,
        heading:'Budgeting Intervals',
        desc:' Cum et convallis risus placerat aliquam, nunc. Scelerisque Aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.'
    },
    {
        image:icon3,
        heading:'Budgeting Intervals',
        desc:' Cum et convallis risus placerat aliquam, nunc. Scelerisque Aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.'
    },
]
const Features = () => {
    return (
        <>

            <a id='feature'></a>
            <img className='ml-[30px] mt-[100px]' src={star} alt=''/>
            <div className='relative w-[80%] mx-auto mt-[-90px] '>
                <div className='flex gap-2 mt-[20px]'>
                    <div className='relative '>
                        <img src={image2} alt=''/>
                        <img className='w-[100%] mt-[-430px] ml-[20px]' src={image1} alt=''/>
                    </div>

                    <div className='mt-[90px]'>
                        <h1 className='text-[18px] font-semibold text-red-400 uppercase'>Features</h1>
                        <h1 className='text-[45px] font-bold'>Uifry Premium</h1>
                        <div>
                            {
                                featuresData.map((item, index) => (
                                    <>
                                        <div className='flex items-center gap-2'>
                                            <img src={item.image} alt=''/>
                                            <h3 className='font-semibold text-[18px]'>{item.heading}</h3>
                                        </div>
                                        <p className='text-gray-700 text-[18px]'>
                                            {item.desc}
                                        </p>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>


            <img src={star} className='ml-[1460px] mt-[20px]' alt=''/>


            <div className='relative w-[80%] mx-auto mt-[-100px] '>


                <div className='flex gap-2 mt-[100px] '>
                    <div className='w-[40%] mt-[80px]'>
                        <h1 className='text-[18px] font-semibold text-red-400 uppercase'>
                            Advantages
                        </h1>
                        <h1 className='text-[45px] font-bold'>
                            Why choose uifry?
                        </h1>

                        <div className='flex items-center gap-2 mt-4 pl-2'>
                            <img className='w-[25px]' src={ad1} alt=''/>
                            <h1 className='text-[20px] font-bold'>Clever Notifications</h1>
                        </div>
                        <p className='capitalize text-gray-700 mt-4 text-[18px]'>
                            Arcu at dictum saplen, mollis, vulputrate sit id accumsan,
                            ultricies. in ultricies malesuada elit maruis etiam odia. duis
                            tristique lacus,et blandit viverra nisi velit sed mattis rhoncus
                            diam suspendisse sit nunc, gravida eu. lectus eget eget ac
                            dolor neque lorem sapien,suspendisse aliquam
                        </p>

                    </div>

                    <div className='relative'>

                        <img src={ad2} alt=''/>
                        <img className='mt-[-550px] ml-[-10px] w-[100%]' src={ad3} alt=''/>
                        <img className='mt-[-455px] w-[40%] ml-[300px]' src={ad4} alt=''/>

                    </div>


                </div>


            </div>


            <img src={star} className='mt-[200px] ml-[700px] ' alt=''/>
            <div className='relative w-[80%] mx-auto mt-[-250px] '>


                <div className='flex gap-2 mt-[300px] ]'>


                    <div className='relative'>
                        <img src={ad7} alt=''/>
                        <img className='mt-[-700px] ml-[-10px] w-[90%]' src={ad8} alt=''/>
                        <img className='mt-[-472px] w-[34%] ml-[185px]' src={ad5} alt=''/>
                    </div>


                    <div className='w-[40%] mt-[80px]'>


                        <div className='flex items-center gap-2 mt-4 pl-2'>
                            <img className='w-[25px]' src={ad6} alt=''/>
                            <h1 className='text-[20px] font-bold'>Fully Customizable</h1>
                        </div>
                        <p className='capitalize text-gray-700 mt-4 text-[18px]'>
                            Arcu at dictum saplen, mollis, vulputrate sit id accumsan,
                            ultricies. in ultricies malesuada elit maruis etiam odia. duis
                            tristique lacus,et blandit viverra nisi velit sed mattis rhoncus
                            diam suspendisse sit nunc, gravida eu. lectus eget eget ac
                            dolor neque lorem sapien,suspendisse aliquam.
                        </p>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Features

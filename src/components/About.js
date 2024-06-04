import React from 'react'

import about1 from '../image/about/Group 1000002356.png'
import about2 from '../image/about/Group 1000002332.png'
import about3 from '../image/about/Group 35917.png'

import star from '../image/Star 2.png'
const faq = [
    {
        heading1:'The best financial accounting',
        heading2:'app ever!',
        para:'Arcu at dictum sapien, mollies, vulputate sit is',
        para2:'accumsan, utricies.in utricies malesuada elit mauris'
    },
    {
        heading1:'The best financial accounting',
        heading2:'app ever!',
        para:'Arcu at dictum sapien, mollies, vulputate sit is',
        para2:'accumsan, utricies.in utricies malesuada elit mauris'
    },
    {
        heading1:'The best financial accounting',
        heading2:'app ever!',
        para:'Arcu at dictum sapien, mollies, vulputate sit is',
        para2:'accumsan, utricies.in utricies malesuada elit mauris'
    },
    {
        heading1:'The best financial accounting',
        heading2:'app ever!',
        para:'Arcu at dictum sapien, mollies, vulputate sit is',
        para2:'accumsan, utricies.in utricies malesuada elit mauris'
    },
    {
        heading1:'The best financial accounting',
        heading2:'app ever!',
        para:'Arcu at dictum sapien, mollies, vulputate sit is',
        para2:'accumsan, utricies.in utricies malesuada elit mauris'
    },
    {
        heading1:'The best financial accounting',
        heading2:'app ever!',
        para:'Arcu at dictum sapien, mollies, vulputate sit is',
        para2:'accumsan, utricies.in utricies malesuada elit mauris'
    },
]
const About = () => {
    return (
        <>
            <a id='about'></a>


            <div className='navbar-container'>

                <div className='text-center mt-[300px] '>
                    <p className='uppercase text-[18px] font-semibold'>
                        Testimonial
                    </p>
                    <div className=''>
                        <h1 className='secondclass capitalize w-[270px] ml-[490px]  text-[35px] font-bold'>
                            What our users say about us?
                        </h1>
                    </div>

                </div>
            </div>
            <div className='navbar-container'>


                <div className='flex gap-2'>
                    <div>
                        <img src={about1} alt=''/>
                        <img className='mt-[-480px]' src={about2} alt=''/>
                    </div>
                    <div className='w-[60%]'>
                        <h1 className='capitalize mt-[110px] secondclass  text-[25px] w-[60%]'>
                            the best financial accounting
                        </h1>
                        <h1 className='capitalize  secondclass text-[25px] w-[60%] mt-[-10px]'>
                            app ever!
                        </h1>
                        <p className='text-gray-700 w-[65%]'>
                            "Arcu at dictum saplen, mollis, vulputrate sit id accumsan,
                            ultricies. in ultricies malesuada elit maruis etiam odia. duis
                            tristique lacus,et blandit viverra nisi velit sed mattis rhoncus
                            diam suspendisse sit nunc, gravida eu. lectus eget eget ac
                            dolor neque lorem sapien,suspendisse aliquam."
                        </p>

                        <img className='mt-5' src={about3} alt=''/>
                        <h5 className='mt-3 font-bold'>Nick jonas</h5>
                    </div>
                </div>
            </div>

            <img src={star} className='mt-[-100px] ml-[30px]' alt=''/>

            <div className='navbar-container '>


                <div className='mb-8 mt-[40px]'>
                    <h1 className='text-red-400 font-semibold text-[17px]'>
                        FAQ
                    </h1>
                    <h1 className='text-[50px] font-bold  myClass '>
                        Frequently Asked
                    </h1>
                    <h1 className='text-[50px] font-bold mt-[-15px] myClass '>
                        Questions
                    </h1>
                    <img className='ml-[400px] mt-[-50px]' src={star} alt=''/>
                </div>


                <div className='grid grid-cols-2 gap-2 w-[90%] mr-auto'>
                    {
                        faq.map((item, index) => (
                            <>
                                <div
                                    className={`p-3 mb-2.5 ${index === 0 || index === 3 || index === 4 ? 'bg-red-400 text-white rounded' : ''}`}>
                                    <h1 className='secondclass text-[35px] capitalize'>{item.heading1}</h1>
                                    <h1 className='secondclass text-[35px] capitalize mt-[-20px]'>{item.heading2}</h1>
                                    <p className='text-[20px] capitalize'>{item.para}</p>
                                    <p className='text-[20px] capitalize'>{item.para2}</p>
                                </div>
                            </>
                        ))
                    }
                </div>


            </div>
        </>

    )
}
export default About

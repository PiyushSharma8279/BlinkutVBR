import React from 'react'
import Header from '../../components/header/Header'
import BlogImg from "../../assets/blog-masthead-desktop.png"
import Everthing from './EverthingCategory/Everthing'
import BlogImgMobile from "../../assets/Blog-home-mobile.png"



function Blogs() {
    return (
        <>
            <Header />
            <div>
                <div className='bg-gradient-to-b  bg-[#275c5e] to-[#458d92] mt-13 flex flex-col items-center w-full  '>
                    <div className='mt-[20px] h-[450px] '>
                        <img src={BlogImg} alt="" className=' h-[320px] hidden sm:hidden md:block lg:block' />
                        <img src={BlogImgMobile} alt="" className=' h-[350px] w-full lg:hidden md:hidden' />
                        <div className=' flex flex-col justify-center items-center text-white'>
                            <h1 className=' lg:text-[2.5rem] md:text-[2.5rem] text-[2rem] font-bold'>lambda</h1>
                            <p className=' lg:text-[1.125rem] md:text-[1.125rem] text-[1rem] font-medium'>Learn about everything we do at Blinkit</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#e9eef1]'>
                <Everthing/>
                </div>

                <div className=' text-center my-10'>
                    <p className=' text-[18px]'>You have reached the end of our appetite.</p>
                    <p className=' py-4 text-gray-300'>© Grofers Pvt Ltd. All rights reserved.</p>
                </div>
            </div>



        </>
    )
}

export default Blogs

import React from 'react'
import SlideBar from '../../components/header/SlideBar/SlideBar'
import { Link } from 'react-router-dom'
function SellersHeader() {
    return (
        <>
            <div className='flex justify-between  bg-gradient-to-b  bg-[#275c5e] to-[#458d92]   min-h-[50px] fixed top-0 left-0 w-full z-50'>
                <div className=' px-2 '>
                    <h2 className=' text-[20px] lg:text-[30px] font-bold text-[#efad31]'>seller <span className='text-[#b0c75a]'>hub</span></h2>
                    <h3 className=' text-[12px] lg:text-[20px] font-medium text-[#b0c75a]'>by <span className='text-[#efad31]'>V</span>BR</h3>
                </div>
                <div className=' mt-2 px-2 lg:hidden'>
                    <SlideBar />
                </div>
                 <div className=' lg:flex  justify-evenly items-center p-2 gap-5 hidden '>
                        <a href='/home' className='cursor-pointer font-medium text-white hidden lg:block'>Home</a>
                        <a href='/about' className='cursor-pointer font-medium text-white  hidden lg:block'>About</a>
                        <a className='cursor-pointer font-medium text-white  hidden lg:block' href='/careers'>
                            Careers
                        </a>
                        <Link to="/partner"
                            className='cursor-pointer font-medium text-white  hidden lg:block'>
                            Partner
                        </Link>
                        <a href='/blog' className='cursor-pointer font-medium text-white  hidden lg:block'>Blog</a>
                    </div>


            </div>


        </>
    )
}

export default SellersHeader

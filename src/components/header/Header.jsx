import React from 'react'
import SlideBar from './SlideBar/SlideBar'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div>
                <div className='flex justify-between  bg-gradient-to-b  bg-[#275c5e] to-[#458d92]   min-h-[50px] fixed top-0 left-0 w-full z-50'>
                    <div className='p-2 steaky'>
                        <h2 className='cursor-pointer  text-3xl font-extrabold text-[#efad31]'>V<span className='text-[#b0c75a]'>BR</span></h2>
                    </div>
                    <div className=' flex  justify-evenly items-center p-2 gap-5'>


                        <a href='/home' className='cursor-pointer font-medium text-white hidden lg:block'>Home</a>


                        <a href='/wwc' className='cursor-pointer font-medium text-white  hidden lg:block'>About</a>


                        <a className='cursor-pointer font-medium text-white  hidden lg:block' href='/careers'>
                            Careers

                        </a>


                        <a href="/partner"
                            className='cursor-pointer font-medium text-white  hidden lg:block'>
                            Partner
                        </a>


                       <a href="/blog"
                            className='cursor-pointer font-medium text-white  hidden lg:block'>
                            Blog
                        </a>


                        <div className=' mt-2'><SlideBar /></div>
                    </div>


                </div>


            </div>

        </>
    )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import SlideBar from './SlideBar/SlideBar'

function Header() {
    return (
        <>
            <div>
                <div className='flex justify-between  bg-amber-300 min-h-[50px] fixed top-0 left-0 w-full z-50'>
                    <div className='p-2 steaky'>
                        <h2 className='cursor-pointer  text-2xl font-extrabold text-orange-500'>V<span className='text-green-700'>BR</span></h2>
                    </div>
                    <div className=' flex  justify-evenly items-center p-2 gap-5'>

                        <div>
                            <h3 className='cursor-pointer font-medium text-gray-700 hidden lg:block'>Home</h3>
                        </div>
                        <div>
                            <h3 className='cursor-pointer font-medium text-gray-700 hidden lg:block'>About</h3>
                        </div>
                        <div>
                            <p className='cursor-pointer font-medium text-gray-700 hidden lg:block'>
                                Careers

                            </p>
                        </div>
                        <div>
                            <Link to="/partner"
                                className='cursor-pointer font-medium text-gray-700 hidden lg:block'>
                                Partner
                            </Link>
                        </div>
                        <div>
                            <h3 className='cursor-pointer font-medium text-gray-700 hidden lg:block'>Blog</h3>
                        </div>

                        <div className=' mt-2'><SlideBar /></div>
                    </div>


                </div>


            </div>

        </>
    )
}

export default Header

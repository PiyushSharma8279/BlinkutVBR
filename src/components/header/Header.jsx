import React from 'react'
import { Link } from 'react-router-dom'
import SlideBar from './SlideBar/SlideBar'

function Header() {
    return (
        <>
            <div>
                <div className='flex  justify-between  bg-amber-300 h-14 fixed top-0 left-0 w-full z-10'>
                    <div className='w-[70%] p-2 steaky'>
                        <h2 className='cursor-pointer w-16 text-2xl font-extrabold'>VB<span className='text-green-700'>R</span></h2>
                    </div>
                    <div className='flex w-[30%] justify-between align-middle p-2'>
                        <div>
                            <h3 className='cursor-pointer font-medium text-gray-700'>Home</h3>
                        </div>
                        <div>
                            <h3 className='cursor-pointer font-medium text-gray-700'>About</h3>
                        </div>
                        <div>
                            <p className='cursor-pointer font-medium text-gray-700'>
                                Careers

                            </p>     
                        </div>
                        <div>
                            <Link to="/partner"
                             className='cursor-pointer font-medium text-gray-700'>
                                Partner
                             </Link>
                        </div>
                        <div>
                            <h3 className='cursor-pointer font-medium text-gray-700'>Blog</h3>
                        </div>
                       <div>
                        <SlideBar/>
                       </div>
                    </div>
                </div>
                

            </div>

        </>
    )
}

export default Header

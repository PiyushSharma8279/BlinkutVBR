import React from 'react'
import Header from '../../components/header/Header'
import BlogImg from "../../assets/blog-masthead-desktop.png"
import Everthing from './EverthingCategory/Everthing'
import Footer from '../../components/footer/Footer'

function Blogs() {
    return (
        <>
            <Header />
            <div>
                <div className='bg-gradient-to-b  bg-[#275c5e] to-[#458d92] mt-13 flex flex-col items-center w-full  '>
                    <div className='mt-[20px] h-[500px] '>
                        <img src={BlogImg} alt="" className=' h-[380px]' />
                        <div className=' flex flex-col justify-center items-center text-white'>
                            <h1 className=' text-[2.5rem] font-bold'>lambda</h1>
                            <p className=' text-[1.125rem] font-medium'>Learn about everything we do at Blinkit</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className=' flex justify-center'>


                </div>
                <div className=' flex flex-col items-center justify-center'>
                    <div className='w-[80%]'>
                        <div className=' flex flex-col justify-center items-center'>
                            <Everthing />
                        </div>
                    </div>
                </div>



<div>
    <Footer/>
</div>
            </div>



        </>
    )
}

export default Blogs

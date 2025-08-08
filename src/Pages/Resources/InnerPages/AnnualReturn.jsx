import React from 'react'
import Footer from '../../../components/footer/Footer'

function AnnualReturn() {
    return (
        <>
            <div>
                <div className="w-full bg-gradient-to-b from-[#275c5e] to-[#458d92] mt-13 flex justify-center">
                    <div className=" max-w-[1200px] w-full">
                        <img
                            src="https://blinkit.com/careers/sites/default/files/2024-04/Group%2024680.png"
                            alt=""
                            className="w-full object-cover"
                        />
                        <div className="flex justify-center px-4 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:pb-5 text-white font-bold max-w-5xl mt-6">
                                Resources
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center'>


                <div className=' w-[80%]'>
                    <h2 className=' pt-8 text-3xl font-medium'>Annual Return</h2>
                    <div className=' flex flex-wrap  gap-4 my-10'>
                        <div className=' flex-1/4 '>
                            <div className='border-2 h-[160px] p-6 text-white bg-gradient-to-b from-[#275c5e] to-[#458d92] rounded-xl '>
                                <h2 className=' text-3xl font-bold '>FY 2024</h2>
                                <h3 className=' font-xl py-2'>Form MGT 7 23-24</h3>
                            </div>
                            <a href="#" className=' underline p-6 text-[18px] cursor-pointer'>View here</a>
                        </div>
                        <div className=' flex-1/4 '>
                           <div className='border-2 h-[160px] p-6 text-white bg-gradient-to-b from-[#275c5e] to-[#458d92] rounded-xl '>
                                <h2 className=' text-3xl font-bold '>FY 2024</h2>
                                <h3 className=' font-xl py-2'>Form MGT 7 23-24</h3>
                            </div>
                            <a href="#" className=' underline p-6 text-[18px] cursor-pointer'>View here</a>
                        </div>
                        <div className=' flex-1/4 '>
                            <div className='border-2 h-[160px] p-6 text-white bg-gradient-to-b from-[#275c5e] to-[#458d92] rounded-xl '>
                                <h2 className=' text-3xl font-bold '>FY 2024</h2>
                                <h3 className=' font-xl py-2'>Form MGT 7 23-24</h3>
                            </div>
                            <a href="#" className=' underline p-6 text-[18px] cursor-pointer'>View here</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default AnnualReturn

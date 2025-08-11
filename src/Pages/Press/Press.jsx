import React from 'react'
import Footer from '../../components/footer/Footer'

function Press() {
    return (
        <>
            <div>

                <div className="w-full bg-gradient-to-b from-[#275c5e] to-[#458d92] mt-13 flex justify-center">
                    <div className=" max-w-[1200px] w-full">
                        <img
                            src="https://blinkit.com/careers/sites/default/files/2024-05/press-masthead-desktop.png"
                            alt=""
                            className="w-full object-cover"
                        />
                        <div className="flex justify-center px-4 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:pb-5 text-white font-bold max-w-5xl mt-6">
                                Press Center
                            </h2>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center my-10'>
                    <div className=' w-[80%]'>
                        <h2 className=' font-bold text-[30px] py-3'>Logo</h2>
                        <p className=' py-3'>Click <span className='font-bold'>here</span> to access Blinkit logo files and brand guidelines</p>
                        <div className=' h-[400px] bg-gradient-to-b from-[#275c5e] to-[#458d92] w-full flex justify-center items-center rounded-2xl'>
                            <h2 className='  text-[80px] font-extrabold text-[#efad31]'>V<span className='text-[#b0c75a]'>BR</span></h2>


                        </div>
                    </div>
                </div>
                <div className=' flex justify-center'>
                    <div className=' w-[80%]'>
                        <h2 className=' font-medium py-2 text-3xl'>Background</h2>
                        <p className=' pt-2 pb-6'>Founded in December 2013, Blinkit is leading the charge in transforming India’s vast unorganised grocery landscape through cutting-edge technology and innovation. We believe every Indian deserves the opportunity to continually improve their life – a process that often begins at home. As part of our mission of helping consumers make healthier, better choices when buying everyday products, we make a wide range of high-quality grocery
                            and household products available right at their doorsteps within minutes.</p>


                    </div>
                </div>
            </div>
            <Footer/>


        </>
    )
}

export default Press

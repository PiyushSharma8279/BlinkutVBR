import React from 'react'
import SellersHeader from './SellersHeader'
import sellerImage from '../../assets/sellerImage.png'
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from 'react'
import Popup from './Popup'

function SellersHome() {
    let [isSignup, setIsSignup] = useState(false)
    console.log("isSignup:", isSignup);
    

   useEffect(() => {
  if (isSignup) {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  } else {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  }
}, [isSignup]);

    return (
        <>
            <SellersHeader />
            <div>
                <div className=' mt-[50px] w-[full]  pt-[40px]  sm:min-h-[700px] bg-gradient-to-b  bg-[#275c5e] to-[#458d92] lg:flex lg:justify-center lg:h-[200px] text-white'>
                    <div className=' w-[full] flex flex-col justify-center min-h-[300px] sm:min-h-[400px] lg:w-[30%] lg:h-[400px] lg:ml-[50px] lg:mt-[50px]    '>
                        <h2 className=' text-[32px] lg:text-[45px] text-center lg:text-start font-bold'>Your products.</h2>
                        <h2 className=' text-[32px] lg:text-[45px] text-center lg:text-start  font-bold'>Delivered.</h2>
                        <h2 className=' text-[32px] lg:text-[45px] text-center lg:text-start  font-bold'>In minutes.</h2>
                        <p className=' text-[14px] text-center lg:text-start   font-normal p-5 lg:p-0 lg:py-4 lg:text-[25px]'>
                            Offer customers the delight of your products and the convenience of 10 minute deliveries. Sign up and start selling!
                        </p>
                        <div className='flex justify-center lg:justify-start'>
                            <button className=' h-[48px] w-[164px] lg:h-[60px] lg:w-[200px] text-[15px] lg:text-[21px] lg:font-medium  px-[32px] py-[13px] text-white bg-[#b0c75a] border-none font-white cursor-pointer rounded-2xl'
                                onClick={() => setIsSignup(true)} >Sell on Blinkit</button>
                        </div>
                        <div>
                            {isSignup && <Popup AfterSingup={() => setIsSignup(false)} />}
                                
                        </div>
                    </div>
                    <div className=' h-[430px] sm:min-h-[600px] max-w-[full] flex justify-center lg:w-[70%] lg:h-[300px] '>
                        <img src={sellerImage} alt="seller image" className=' h-[200px] w-[full] scale-390 sm:scale-500' />
                    </div>

                </div>
                <div className='  px-[10px]'>


                    <div className='flex justify-evenly items-center min-h-[300px]  '>
                        <div className=' hidden  lg:block'>
                            <img src="https://cdn.grofers.com/da/seller-hub-assets/web-assets/homepage/top-choice-left-img.png" alt="" />

                        </div>
                        <div className='flex flex-col justify-center font-medium lg:font-bold'>
                            <h2 className='text-[32px] lg:text-[45px] text-center'>Why VBR is every</h2>
                            <h2 className='text-[32px] lg:text-[45px] text-center'>seller's top choice</h2>
                        </div>
                        <div className=' hidden lg:block '>
                            <img src="	https://cdn.grofers.com/da/seller-hub-assets/web-assets/homepage/top-choice-right-img.png" alt="" />

                        </div>
                    </div>
                    <div className=' flex justify-center'>


                        <div className=' flex flex-col gap-3 h-[400px] sm:h-[500px] md:h-[800px] lg:h-[850px] lg:grid lg:grid-cols-2 lg:gap-4 px-3 lg:w-[70%]'>
                            <div className=' flex flex-row justify-evenly gap-4 h-[100px] w-[100%] bg-green-100 pt-2 px-1 md:h-[200px] lg:h-[400px] lg:flex-col pl-[40px] '>
                                <div className=' w-[30%]'>
                                    <img src="https://cdn.grofers.com/da/seller-hub-assets/web-assets/homepage/noun-fast-img.webp" alt="" className=' md:h-[150px] sm:h-[80px] lg:h-[100px]' />
                                </div>
                                <div className='flex flex-col items-start md:justify-center md:w-[80%] lg:w-[90%] '>
                                    <h2 className=' font-medium md:text-[24px] lg:text-[32px] '>Reach Your customers in minutes</h2>
                                    <p className=' text-[14px] py-1 md:text-[20px] '>List your products on India's fastest-growing retail channel and grow with us</p>
                                </div>
                            </div>
                            <div className=' flex flex-row justify-evenly gap-4 lg:gap-1 h-[100px] w-[100%] bg-green-100 pt-2 px-1 md:h-[200px] lg:h-[400px] lg:flex-col pl-[40px]  '>
                                <div className=' w-[30%]'>
                                    <img src="https://cdn.grofers.com/da/seller-hub-assets/web-assets/homepage/noun-fast-img.webp" alt="" className=' md:h-[150px] sm:h-[80px] lg:h-[100px]' />

                                </div>
                                <div className='flex flex-col items-start md:justify-center md:w-[80%] lg:w-[90%]  '>
                                    <h2 className=' font-medium md:text-[24px] lg:text-[32px] '>Reach Your customers in minutes</h2>
                                    <p className=' text-[14px] py-1 md:text-[20px] '>List your products on India's fastest-growing retail channel and grow with us</p>
                                </div>
                            </div>
                            <div className=' flex flex-row justify-evenly gap-4 h-[100px] w-[100%] bg-green-100 pt-2 px-1 md:h-[200px] lg:h-[400px] lg:flex-col pl-[40px] '>
                                <div className=' w-[30%]'>
                                    <img src="https://cdn.grofers.com/da/seller-hub-assets/web-assets/homepage/noun-fast-img.webp" alt="" className=' md:h-[150px] sm:h-[80px] lg:h-[100px]' />

                                </div>
                                <div className='flex flex-col items-start md:justify-center md:w-[80%] lg:w-[90%]  '>
                                    <h2 className=' font-medium md:text-[24px] lg:text-[32px]'>Reach Your customers in minutes</h2>
                                    <p className=' text-[14px] py-1 md:text-[20px]'>List your products on India's fastest-growing retail channel and grow with us</p>
                                </div>
                            </div>
                            <div className=' flex flex-row justify-evenly gap-4 h-[100px] w-[100%] bg-green-100 pt-2 px-1 md:h-[200px] lg:h-[400px] lg:flex-col pl-[40px] '>
                                <div className=' w-[30%]'>
                                    <img src="https://cdn.grofers.com/da/seller-hub-assets/web-assets/homepage/noun-fast-img.webp" alt="" className=' md:h-[150px] sm:h-[80px] lg:h-[100px]' />

                                </div>
                                <div className='flex flex-col items-start md:justify-center md:w-[80%] lg:w-[90%] '>
                                    <h2 className=' font-medium md:text-[24px] lg:text-[32px] '>Reach Your customers in minutes</h2>
                                    <p className=' text-[14px] py-1 md:text-[20px] '>List your products on India's fastest-growing retail channel and grow with us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default SellersHome

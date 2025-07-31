import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { CheckCircle, ShieldCheck } from "lucide-react";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import alok from '../../assets/alok.png'
import shishir from '../../assets/shishir.png'
import rahul from '../../assets/rahul.png'
import WareHouseFAQ from './WareHouseFAQ';
import WareHouseForm from './WareHouseForm';


function WareHouse() {
    const [checked, setChecked] = useState(false);

    const swiperInstanceRef = useRef(null);

    const categoryImg = [
        {
            img: alok,
            text: "My Favorite Part of the day is Seeing our customers Smile while recieving their Orders from me",
            name: "Alok"

        },
        {
            img: shishir,
            text: "My Favorite Part of the day is Seeing our customers Smile while recieving their Orders from me",
            name: "Rahul"


        },
        {
            img: rahul,
            text: "My Favorite Part of the day is Seeing our customers Smile while recieving their Orders from me",
            name: "shishir"


        }
    ]
    return (
        <>
            <Header />
            <div>
                <div className='bg-gradient-to-b  bg-[#275c5e] to-[#458d92]  h-155 mt-14 flex flex-col justify-center px-3  md:max-h-140 md:flex md:flex-row md:justify-evenly  lg:max-h-140 lg:flex lg:flex-row lg:justify-evenly xl:max-h-250  2xl:max-h-300'>
                    <div className='h-140   sm:h-170 md:max-h-110 md:max-w-[60%]  2xl:max-h-400 xl:max-h-400'>
                        <img src="https://blinkit.com/careers/sites/default/files/2021-12/warehouse-desktop-masthead.png" alt="" className=' h-100  md:max-h-90 lg:max-h-100 sm:h-120 2xl:max-h-400 xl:max-h-400 ' />
                        <h1 className='text-3xl font-extrabold text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl'>
                            Warehouse partner
                        </h1>
                        <h2 className='  text-white text-xl'>
                            Pick, pack and sort orders placed by our customers
                        </h2>
                    </div>
                    <form className=' md:block md:bg-none  md:max-w-[40%]  xl:max-h-300px lg:block'>
                        <div className='w-[100%] h-96  bg-white rounded-2xl mt-30  hidden lg:block  lg:bg-white '>
                            <div className=' m-6 py-5 md:hidden lg:block'>
                                <div>
                                    <h1 className=' font-bold text-xl  lg:text-2xl'>Come bring orders to life</h1>
                                </div>
                                <div>
                                    <p className='pb-3 pt-1'>Earn more with a job in our warehouse</p>
                                </div>
                                <div className="flex gap-2 w-full">
                                    <div className="w-1/2">
                                        <input
                                            type="text"
                                            placeholder="your full name"
                                            className="w-full bg-gray-200 p-2 rounded-xs"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <input
                                            type="text"
                                            placeholder="phone number"
                                            className="w-full bg-gray-200 p-2 rounded-xs"
                                        />
                                    </div>

                                </div>
                                <div className="flex gap-2 w-full mt-4">
                                    <div className="w-1/2">
                                        <select className='w-[100%] p-2 bg-gray-200  text-gray-400 rounded-xs'>
                                            <option value="" selected="selected" className=' text-gray-400'>city</option>
                                            <option value="Ahmedabad">Ahmedabad</option>
                                            <option value="Bengaluru">Bengaluru</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Chennai">Chennai</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Faridabad">Faridabad</option>
                                            <option value="Gurgaon">Gurgaon</option>
                                            <option value="Hyderabad">Hyderabad</option>
                                            <option value="Jaipur">Jaipur</option>
                                            <option value="Jalandhar">Jalandhar</option>
                                            <option value="Kanpur">Kanpur</option>
                                            <option value="Kolkata">Kolkata</option>
                                            <option value="Lucknow">Lucknow</option>
                                            <option value="Ludhiana">Ludhiana</option>
                                            <option value="Meerut">Meerut</option>
                                            <option value="Mohali">Mohali</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Panchkula">Panchkula</option>
                                            <option value="Pune">Pune</option>
                                            <option value="UP-NCR">UP-NCR</option>
                                            <option value="Vadodara">Vadodara</option>
                                            <option value="Zirakpur">Zirakpur</option>
                                        </select>
                                    </div>
                                    <div className="w-1/2">
                                        <input
                                            type="text"
                                            placeholder="state*"
                                            className="w-full bg-gray-200 p-2 rounded-xs"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <select className='w-[100%] p-2 bg-gray-200 mt-4 text-gray-400 rounded-xs'>
                                        <option value="">highest education*</option>
                                        <option value="">10th</option>
                                        <option value="">12th</option>
                                        <option value="">Graduate</option>

                                    </select>

                                </div>
                                <div className="flex gap-2 w-full mt-4">
                                    <button className='bg-black px-12 py-3 mt-2 text-white  rounded-xs cursor-pointer w-1/2' type='submit'>Register</button>
                                    <div className="flex items-center gap-3 h-[50px] border rounded-xs px-4 shadow-md  bg-white mt-2 w-1/2">
                                        <input
                                            type="checkbox"
                                            id="robot-check"
                                            checked={checked}

                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                        />
                                        <label htmlFor="robot-check" className="text-gray-800 cursor-pointer select-none text-[12px]">
                                            I'm not a robot
                                        </label>

                                        {checked && (
                                            <ShieldCheck className="text-green-500" size={20} />
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <WareHouseForm/>
                <div>
                    <div className='  flex justify-center mt-3 px-4'>
                        <div className='w-[100%] my-10 lg:w-[80%] xl:w-[80%]'>
                            <h2 className=' text-2xl py-2  lg:p-0 sm:text-[24px] lg:text-[28px] font-normal '>Join India’s most loved grocery shopping platform</h2>
                            <p className=' leading-[24px] mt-4 lg:p-0 font-okra text-[17px]'>Become a warehouse partner and get best in class pay, plus benefits like nutritious meals, transportation facility, provident fund – in addition to salary, medical insurance coverage and 14 days paid leaves for Covid</p>
                        </div>

                    </div>
                    <div className=' flex  justify-center  my-[30px]'>
                        <div className=' flex lg:flex-row flex-col justify-center items-center lg:w-[80%] w-full mx-4'>
                            <div className=' lg:w-1/2 w-full flex justify-center '>
                                <img src="https://blinkit.com/careers/sites/default/files/2021-07/warehouse_0.png" alt="" className=' lg:h-[350px] h-[320px] w-full sm:max-w-full sm:h-[400px]' />

                            </div>
                            <div className=' flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:w-1/2 w-full px-4'>
                                <div className=' lg:h-[170px] h-[100px] lg:flex lg:flex-col flex  items-center  lg:justify-center lg:items-center gap-5 shadow-[0px_0px_17.9767px_rgba(0,0,0,0.08)] rounded-lg w-full'>
                                    <img src="https://blinkit.com/careers/sites/default/files/2021-12/warehouse-icon-salary_1.png" alt="" className=' h-[50px] w-[50px] rounded-full ' />
                                    <h2 className=' font-bold text-[18px]'>₹25,000 salary</h2>
                                </div>
                                <div className=' lg:h-[170px] h-[100px] lg:flex lg:flex-col flex items-center  lg:justify-center lg:items-center gap-5 shadow-[0px_0px_17.9767px_rgba(0,0,0,0.08)] rounded-lg'>
                                    <img src="https://blinkit.com/careers/sites/default/files/2021-12/warehouse-icon-shift_1.png" alt="" className=' h-[50px] w-[50px] rounded-full ' />
                                    <h2 className=' font-bold text-[18px]'>9 hour shift</h2>
                                </div>
                                <div className=' lg:h-[170px] h-[100px] lg:flex lg:flex-col flex items-center  lg:justify-center lg:items-center gap-5 shadow-[0px_0px_17.9767px_rgba(0,0,0,0.08)] rounded-lg'>
                                    <img src="https://blinkit.com/careers/sites/default/files/2021-12/warehouse-icon-transportation_1.png" alt="" className=' h-[50px] w-[50px] rounded-full ' />
                                    <h2 className=' font-bold text-[18px]'>Transportation</h2>
                                </div>
                                <div className=' lg:h-[170px] h-[100px] lg:flex lg:flex-col flex items-center  lg:justify-center lg:items-center shadow-[0px_0px_17.9767px_rgba(0,0,0,0.08)] rounded-lg'>
                                    <img src="https://blinkit.com/careers/sites/default/files/2021-12/warehouse-icon-medical_1.png" alt="" className=' h-[50px] w-[50px] rounded-full ' />
                                    <h2 className=' font-bold text-[18px]'>Medical Insurance</h2>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>




                <div className="flex justify-center my-[30px]">
                    <div className="w-[80%] relative">
                        <h2 className="font-bold text-[28px] mb-6">Partner testimonials</h2>

                        <Swiper
                            loop={true}
                            onSwiper={(swiper) => (swiperInstanceRef.current = swiper)}
                            modules={[Navigation, Autoplay, Pagination]}
                            grabCursor={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,

                                },
                                480: {
                                    slidesPerView: 1,

                                },
                                768: {
                                    slidesPerView: 1,

                                }
                            }}
                        >
                            {categoryImg.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center bg-gray-600 rounded-md px-4">
                                        <div className="flex flex-col lg:flex-row justify-between items-center p-6 w-full max-w-6xl gap-6">


                                            <div className="lg:w-[60%] w-full text-center lg:text-left">
                                                <p className="text-white text-lg sm:text-xl md:text-2xl">
                                                    {item.text}
                                                </p>
                                                <p className="font-medium text-xl sm:text-2xl md:text-3xl mt-6 text-white">
                                                    {item.name}
                                                </p>
                                            </div>


                                            <div className="w-full lg:w-[40%] flex justify-center">
                                                <img
                                                    src={item.img}
                                                    alt="testimonial"
                                                    className="h-[200px] sm:h-[250px] w-auto rounded-t-3xl object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button
                            className="absolute bottom-[120px] -left-[45px] z-10 bg-[#275c5e] hover:bg-[#458d92] text-white px-4 py-2 rounded-full cursor-pointer"
                            onClick={() => swiperInstanceRef.current?.slidePrev()}
                        >
                            ❮
                        </button>


                        <button
                            className="absolute bottom-[120px] -right-[45px] z-10 bg-[#275c5e] hover:bg-[#458d92] text-white px-4 py-2 rounded-full cursor-pointer"
                            onClick={() => swiperInstanceRef.current?.slideNext()}
                        >
                            ❯
                        </button>
                    </div>
                </div>





            <div>
                <WareHouseFAQ/>
            </div>

            </div>




            <Footer />

        </>
    )
}

export default WareHouse

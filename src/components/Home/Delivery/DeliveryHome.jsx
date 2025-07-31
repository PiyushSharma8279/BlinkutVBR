import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import "./delivery.css"
import FAQ from './FAQs/FAQ';
import DeliveryForm from './Form/DeliveryForm';
import { IoLogoGooglePlaystore } from "react-icons/io5"
import alok from '../../../assets/alok.png'
import shishir from '../../../assets/shishir.png'
import rahul from '../../../assets/rahul.png'



function DeliveryHome() {
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

    
    //#275c5e
    //#458d92


    return (
        <>
            <div>
                <div>
                    <div className='bg-gradient-to-b  bg-[#275c5e] to-[#458d92]  h-155 mt-14 flex flex-col justify-center px-3  md:max-h-140 md:flex md:flex-row md:justify-evenly lg:justify-evenly lg:max-h-140 lg:flex lg:flex-row xl:max-h-250  2xl:max-h-300'>
                        <div className='h-140   sm:h-170 md:max-h-110 md:max-w-[60%]  2xl:max-h-400 xl:max-h-400'>
                            <img src="https://blinkit.com/careers/sites/default/files/2023-05/ezgif.com-webp-to-png.png" alt="" className=' h-100  md:max-h-90 lg:max-h-100 sm:h-120 2xl:max-h-400 xl:max-h-400 ' />
                            <h1 className='text-3xl font-extrabold text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl'>
                                Earn upto ₹ 50,000 with Blinkut Delivery. JOIN NOW!
                            </h1>
                            <h2 className='  text-white text-xl'>
                                JOINING BONUS of upto ₹ 4,000 | Upto ₹ 10 lacs medical insurance
                            </h2>
                        </div>
                        <form className=' md:block md:bg-none  md:max-w-[40%]  xl:max-h-300px lg:block'>
                            <div className='w-[100%] h-96  bg-white rounded-2xl mt-30  hidden lg:block  lg:bg-white '>
                                <div className=' flex-col justify-betwee m-6 py-5   md:hidden lg:block'>
                                    <div>
                                        <h1 className=' font-bold text-xl p-1 lg:text-2xl'>Become a Blinkut rider</h1>
                                    </div>
                                    <div>
                                        <p className='p-1'>To deliver orders for Blinkit, please fill this form</p>
                                    </div>
                                    <div className="flex gap-2 w-full">
                                        <div className="w-1/2">
                                            <input
                                                type="text"
                                                placeholder="name*"
                                                className="w-full bg-gray-200 p-2 rounded-xs"
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <input
                                                type="text"
                                                placeholder="phone*"
                                                className="w-full bg-gray-200 p-2 rounded-xs"
                                            />
                                            <p className="text-gray-800 text-xs">10 character(s) remaining</p>
                                        </div>
                                    </div>

                                    <div>
                                        <select className='w-[100%] p-2 bg-gray-200 my-2 text-gray-400'>
                                            <option value="" selected="selected" className=' text-gray-400'>select the city</option>
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
                                    <div>
                                        <button className='bg-black px-12 py-3 text-white  rounded-xl cursor-pointer' type='submit'>join to earn</button>
                                    </div>
                                    <div className=' w-[100%] flex justify-center cursor-pointer' >
                                        <div className="flex flex-row googleBtn w-40  ">
                                            <div className="flex flex-row blackBtn">
                                                <IoLogoGooglePlaystore className="icons" />
                                                <div className="flex flex-col txtCont">
                                                    <p className="t1">GET IT ON</p>
                                                    <p className="t2">Google Play</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <DeliveryForm />
                    </div>
                    <div>
                        <div className='  flex justify-center mt-3'>
                            <div className='w-[100%] my-5 lg:w-[80%] xl:w-[80%]'>
                                <h2 className=' text-2xl py-2 p-2 lg:p-0 sm:text-[24px] lg:text-[28px] font-normal '>Join India’s most loved quick commerce platform</h2>
                                <p className=' leading-[24px] p-2 lg:p-0 font-okra text-[17px]'>Become a delivery partner on your own schedule and get best in class pay, among other other benefits. We are looking for dedicated people who take pride in serving fellow Indians.</p>
                            </div>

                        </div>
                        <div className='flex flex-col p-2 lg:p-0 lg:flex-row justify-center gap-2.5 my-10 '>
                            <div className=' w-[100%] my-5 lg:w-[80%] xl:w-[80%] flex flex-col lg:flex-row gap-2.5'>
                                <div className='lg:w-[25%] h-80  shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl'>
                                    <div className=' flex justify-center'>
                                        <img src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-earnings.png" alt="" className='w-28 m-5' />
                                    </div>
                                    <div>
                                        <h2 className=' text-[18px] font-okra text-center m-4 font-bold'>Monthly earnings</h2>
                                        <p className='text-center text-[18px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Earn upto ₹50,000 with incentives and other benefits</p>
                                    </div>
                                </div>
                                <div className=' h-80 lg:w-[25%] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl'>
                                    <div className=' flex justify-center'>
                                        <img src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-two-weeks-payout.png" alt="" className='w-28 m-5' />
                                    </div>
                                    <div>
                                        <h2 className=' text-[18px] font-okra text-center m-4 font-bold'>Monthly earnings</h2>
                                        <p className='text-center text-[18px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Earn upto ₹50,000 with incentives and other benefits</p>
                                    </div>
                                </div>
                                <div className=' h-80 lg:w-[25%] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl'>
                                    <div className=' flex justify-center'>
                                        <img src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-two-weeks-payout.png" alt="" className='w-28 m-5' />
                                    </div>
                                    <div>
                                        <h2 className=' text-[18px] font-okra text-center m-4 font-bold'>Monthly earnings</h2>
                                        <p className='text-center text-[18px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Earn upto ₹50,000 with incentives and other benefits</p>
                                    </div>
                                </div>
                                <div className=' h-80 lg:w-[25%] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-2xl'>
                                    <div className=' flex justify-center'>
                                        <img src="https://blinkit.com/careers/sites/default/files/2023-02/icon-two-weeks-payout.png" alt="" className='w-28 m-5' />
                                    </div>
                                    <div>
                                        <h2 className=' text-[18px] font-okra text-center m-4 font-bold'>Monthly earnings</h2>
                                        <p className='text-center text-[18px] text-[#1F1F1F] font-Okra,Helvetica,sans-serif px-4'>Earn upto ₹50,000 with incentives and other benefits</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
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
                </div>

                <FAQ />
            </div>
        </>
    )

}

export default DeliveryHome;

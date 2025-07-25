import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./delivery.css"
import FAQ from './FAQs/FAQ';

function DeliveryHome() {

    const categoryImg = [
        {
            img: "https://blinkit.com/careers/sites/default/files/2023-02/Group%2023335.png"

        },
        {
            img: "https://blinkit.com/careers/sites/default/files/2023-02/Group%2023343.png"

        },
        {
            img: "https://blinkit.com/careers/sites/default/files/2023-02/Group%2023344.png"

        }
    ]

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };





    return (
        <>
            <div className='w-[100%] h-auto'>
                <div className='bg-gradient-to-b  bg-amber-300 to-green-700 w-[100%] h-150 mt-14 flex justify-around'>
                    <div className='w-[45%] h-64'>
                        <img src="https://blinkit.com/careers/sites/default/files/2023-05/ezgif.com-webp-to-png.png" alt="" />
                        <h1 className=' text-4xl font-extrabold text-white'>
                            Earn upto ₹ 50,000 with Blinkut Delivery. JOIN NOW!
                        </h1>
                        <h2 className='  text-white text-lg'>
                            JOINING BONUS of upto ₹ 4,000 | Upto ₹ 10 lacs medical insurance
                        </h2>
                    </div>
                    <div className='w-[35%] bg-white h-96 rounded-2xl mt-30 '>
                        <div className=' flex-col justify-between m-6 h-80'>
                            <div>
                                <h1 className=' font-bold text-2xl p-1'>Become a Blinkut rider</h1>
                            </div>
                            <div>
                                <p className=' p-1'>To deliver orders for Blinkit, please fill this form</p>
                            </div>
                            <div className='flex justify-around gap-2'>
                                <div>
                                    <input type="text" placeholder='name*' className=' bg-gray-200 p-2 rounded-xs' />
                                </div>
                                <div>
                                    <input type="text" placeholder='phone*' className=' bg-gray-200 p-2 rounded-xs' />
                                    <p className=' text-gray-400'>10 character(s) remaining</p>

                                </div>
                            </div>
                            <div>
                                <select className='w-[96%] p-2 bg-gray-200 m-2 text-gray-400'>
                                    <option value="" selected="selected" className=' text-gra'>select the city</option>
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
                                <button className='bg-black px-12 py-3 text-white ml-2 rounded-xl' type='submit'>join to earn</button>
                            </div>
                            <div className=' w-[100%] flex justify-center' >
                                <img src="https://blinkit.com/careers/sites/default/files/2023-02/google_play.png" alt="" className='w-[50%]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='  flex justify-center mt-5'>
                        <div className='w-[80%]'>
                            <div>
                                <h2 className=' text-3xl py-5'>Join India’s most loved quick commerce platform</h2>
                            </div>
                            <div>
                                <p>Become a delivery partner on your own schedule and get best in class pay, among other other benefits. We are looking for dedicated people who take pride in serving fellow Indians.</p>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className='flex justify-center gap-2.5 mt-10'>
                            <div className='w-60 h-80  shadow-2xl rounded-2xl'>
                                <div className=' flex justify-center'>
                                    <img src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-earnings.png" alt="" className='w-28 m-5' />
                                </div>
                                <div>
                                    <h2 className=' text-xl text-center m-4 font-extrabold'>Monthly earnings</h2>
                                    <p className='text-center text-xl'>Earn upto ₹50,000 with incentives and other benefits</p>
                                </div>
                            </div>
                            <div className='w-60 h-80  shadow-2xl'>
                                <div className=' flex justify-center'>
                                    <img src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-two-weeks-payout.png" alt="" className='w-28 m-5' />
                                </div>
                                <div>
                                    <h2 className=' text-xl text-center m-4 font-extrabold'>Monthly earnings</h2>
                                    <p className='text-center text-xl'>Earn upto ₹50,000 with incentives and other benefits</p>
                                </div>
                            </div>
                            <div className='w-60 h-80  shadow-2xl'>
                                <div className=' flex justify-center'>
                                    <img src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-two-weeks-payout.png" alt="" className='w-28 m-5' />
                                </div>
                                <div>
                                    <h2 className=' text-xl text-center m-4 font-extrabold'>Monthly earnings</h2>
                                    <p className='text-center text-xl'>Earn upto ₹50,000 with incentives and other benefits</p>
                                </div>
                            </div>
                            <div className='w-60 h-80  shadow-2xl'>
                                <div className=' flex justify-center'>
                                    <img src="https://blinkit.com/careers/sites/default/files/2023-02/icon-two-weeks-payout.png" alt="" className='w-28 m-5' />
                                </div>
                                <div>
                                    <h2 className=' text-xl text-center m-4 font-extrabold'>Monthly earnings</h2>
                                    <p className='text-center text-xl'>Earn upto ₹50,000 with incentives and other benefits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden w-3/4 m-auto  mt-10 px-4">
                    <h2 className="font-extrabold text-2xl mb-6 ">Partner testimonials</h2>



                    <button
                        className="custom-prev"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        ❮
                    </button>




                    <Slider {...settings}>
                        {categoryImg.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <img
                                    src={item.img}
                                    alt=""
                                    className=" rounded-lg"
                                />
                            </div>
                        ))}
                    </Slider>

                    <button
                        className="custom-next"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        ❯
                    </button>
                </div>
            </div>

            <FAQ />
        </>
    )

}

export default DeliveryHome;

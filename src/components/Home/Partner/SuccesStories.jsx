import React from 'react'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./partner.css";
import alok from '../../../assets/alok.png'
import shishir from '../../../assets/shishir.png'
import rahul from '../../../assets/rahul.png'

function SuccesStories() {

     const swiperInstanceRef = useRef(null);
    
        const categoryImg = [
            {
                img: alok,
                name: "Alok",
                text: "Direct, JP Broadline",
                
    
            },
            {
                img: shishir,
               text: "Direct, JP Broadline",
                name: "Rahul"
    
    
            },
            {
                img: rahul,
                text: "Direct, JP Broadline",
                name: "shishir"
    
    
            },
             {
                img: rahul,
                text: "Direct, JP Broadline",
                name: "shishir"
    
    
            }
        ]
    
    return (
        <>
        <div className="flex justify-center py-6">
                    <div className="w-[80%] relative max-w-[1200px]">
                        <h2 className="font-medium text-[28px] mb-6">Success Stories</h2>

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
                                    slidesPerView: 2,

                                },
                                768: {
                                    slidesPerView: 2,

                                },
                                1024 :{
                                    slidesPerView: 3
                                }
                            }}
                        >
                            {categoryImg.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className=" bg-gray-600 rounded-md pl-4">
                                        <div className="flex flex-col lg:flex-row justify-between items-center">
                                            <div className=" text-center lg:text-left">
                                                <p className="text-white text-lg sm:text-xl md:text-2xl">
                                                    {item.name}
                                                </p>
                                                <p className=" text-[12px]  text-gray-300">
                                                    {item.text}
                                                </p>
                                            </div>


                                            <div className="">
                                                <img
                                                    src={item.img}
                                                    alt="testimonial"
                                                    className=" h-[150px] rounded-t-3xl w-[100%] object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>  

                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button
                            className="absolute lg:bottom-[60px] bottom-[80px] lg:-left-[50px] -left-[40px] z-10 bg-[#275c5e] hover:bg-[#458d92] text-white lg:px-4 lg:py-2 px-2 py-1 rounded-full cursor-pointer mx-2"
                            onClick={() => swiperInstanceRef.current?.slidePrev()}
                        >
                            ❮
                        </button>


                        <button
                            className="absolute lg:bottom-[60px] bottom-[80px] lg:-right-[50px] -right-[40px] z-10 bg-[#275c5e] hover:bg-[#458d92] text-white lg:px-4 lg:py-2 px-2 py-1 rounded-full cursor-pointer mx-2"
                            onClick={() => swiperInstanceRef.current?.slideNext()}
                        >
                            ❯
                        </button>
                    </div>
                </div>
        </>
    )
}

export default SuccesStories

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./partner.css";
import { useState, useRef } from "react";
import alok from '../../../assets/alok.png'
import shishir from '../../../assets/shishir.png'
import rahul from '../../../assets/rahul.png'
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import SuccesStories from "./SuccesStories";
import bgImage from '../../../assets/Partners-bg.webp'
import { CheckCircle, ShieldCheck } from "lucide-react";





function PartnerHome() {
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
            <div className="bg-[#e9eef1]">
                <div className="w-full bg-gradient-to-b from-[#275c5e] to-[#458d92] mt-13 flex justify-center">
                    <div className=" max-w-[1200px] w-full">
                        <img
                            src="https://blinkit.com/careers/sites/default/files/2024-05/partner-masthead-desktop.png"
                            alt=""
                            className="w-full object-cover"
                        />
                        <div className="flex justify-center px-4 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:pb-5 text-white font-bold max-w-5xl mt-6">
                                Shape the future of instant commerce
                            </h2>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center px-4">
                    <div className="w-[80%] max-w-6xl my-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
                            Come build with us
                        </h2>
                        <p className="text-gray-900 font-medium text-base sm:text-lg leading-relaxed">
                            We believe that our tech stack and operational backbone can empower thousands of local entrepreneurs to serve the needs of millions of Indians...
                        </p>
                    </div>
                </div>


                <div className="flex justify-center px-4">
                    <div className="w-[80%] max-w-6xl my-10">
                        <h2 className="text-2xl sm:text-3xl font-medium mb-6">Opportunities to grow with Blinkit</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Partner Store",
                                    text: "Run mini-warehouses (partner stores) for Blinkit",
                                    img: "https://blinkit.com/careers/sites/default/files/2024-02/partner-express%20%282%29_0.png",
                                },
                                {
                                    title: "Rent your property",
                                    text: "Your property can become our next store!",
                                    img: "https://blinkit.com/careers/sites/default/files/2024-02/Isolation_Mode_0.png",
                                },
                                {
                                    title: "Seller",
                                    text: "List your products on Blinkit and reach your customers in minutes",
                                    img: "https://blinkit.com/careers/sites/default/files/2021-12/partner-local.png",
                                },
                                {
                                    title: "Deliver",
                                    text: "Deliver items from a Blinkit partner store to customers",
                                    img: "https://blinkit.com/careers/sites/default/files/2021-12/partner-deliver.png",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl bg-gradient-to-b from-[#275c5e] to-[#458d92] p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-white"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="mt-2 text-sm sm:text-base">{item.text}</p>
                                        <a href="#" className="underline mt-2 inline-block text-sm">
                                            Know more
                                        </a>
                                    </div>
                                    <div>
                                        <img src={item.img} alt={item.title} className="h-40 sm:h-48 rounded-b-xl object-contain" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="flex justify-center py-6">
                    <div className="w-[80%] relative max-w-[1200px]">
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
                            className="absolute lg:bottom-[120px] bottom-[160px] -left-[50px] z-10 bg-[#275c5e] hover:bg-[#458d92] text-white lg:px-4 lg:py-2 px-2 py-1 rounded-full cursor-pointer mx-2"
                            onClick={() => swiperInstanceRef.current?.slidePrev()}
                        >
                            ❮
                        </button>


                        <button
                            className="absolute lg:bottom-[120px] bottom-[160px] -right-[50px] z-10 bg-[#275c5e] hover:bg-[#458d92] text-white lg:px-4 lg:py-2 px-2 py-1 rounded-full cursor-pointer mx-2"
                            onClick={() => swiperInstanceRef.current?.slideNext()}
                        >
                            ❯
                        </button>
                    </div>
                </div>
                <div>
                    <SuccesStories />
                </div>
            </div>
            


                <div className="w-[full]  relative flex justify-center">
                    <div className=" w-[80%] flex justify-center ">



                        <div
                            className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${bgImage})` }}
                        ></div>


                        <div className="relative z-10 bg-white/80 lg:bg-transparent">
                            <div className="flex flex-col lg:flex-row justify-center gap-10 w-full min-h-[460px] items-center px-4 py-8 max-w-[1200px]">


                                <div className="w-full lg:w-[50%]">
                                    <h1 className="text-black text-[28px] lg:text-[40px] font-bold">
                                        Got a cool brand and want to list it on VBR?
                                    </h1>
                                    <p className="text-[16px] lg:text-[18px] py-4">
                                        Write to us at <span className="font-bold cursor-pointer">sellwithus@vbr.com</span> — you can also drop us an email at <span className="font-bold cursor-pointer">info@vbr.com</span> to know more about us.
                                    </p>
                                </div>


                                <div className="w-full lg:w-[50%]">
                                    <div className="bg-[#fcf7f7] rounded-xs p-6 shadow-md">
                                        <form className="flex flex-col gap-4">
                                            <input type="text" placeholder="name*" className="bg-gray-200 p-2 rounded w-full" />
                                            <input type="text" placeholder="phone number*" className="bg-gray-200 p-2 rounded w-full" />
                                            <input type="text" placeholder="email id*" className="bg-gray-200 p-2 rounded w-full" />
                                            <input type="text" placeholder="city*" className="bg-gray-200 p-2 rounded w-full" />
                                            <input type="text" placeholder="state*" className="bg-gray-200 p-2 rounded w-full" />

                                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                                <button className="bg-black px-6 py-3 text-white rounded w-full sm:w-1/2" type="submit">
                                                    Contact me
                                                </button>

                                                <div className="flex items-center gap-2 border rounded px-4 shadow-sm bg-white w-full sm:w-1/2 h-[50px]">
                                                    <input
                                                        type="checkbox"
                                                        id="robot-check"
                                                        checked={checked}
                                                        onChange={() => setChecked(!checked)}
                                                        className="w-5 h-5 cursor-pointer"
                                                    />
                                                    <label htmlFor="robot-check" className="text-sm text-gray-800 cursor-pointer">
                                                        I'm not a robot
                                                    </label>
                                                    {checked && <ShieldCheck className="text-green-500" size={20} />}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
         





            <Footer />
        </>
    )
}

export default PartnerHome
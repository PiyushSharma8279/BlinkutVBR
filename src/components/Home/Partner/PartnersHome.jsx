import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./partner.css";
import { useRef } from "react";
import alok from '../../../assets/alok.png'
import shishir from '../../../assets/shishir.png'
import rahul from '../../../assets/rahul.png'




function PartnerHome() {
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
            <div>
                <div className="w-full bg-gradient-to-b from-[#275c5e] to-[#458d92] mt-14">
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
                                    slidesPerView: 2,

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
                            className="absolute bottom-[120px] -left-[45px] z-10 bg-[#275c5e] hover:bg-[#458d92] text-white px-4 py-2 rounded-full"
                            onClick={() => swiperInstanceRef.current?.slidePrev()}
                        >
                            ❮
                        </button>


                        <button
                            className="absolute bottom-[120px] -right-[45px] z-10 bg-[#275c5e] hover:bg-[#458d92] text-white px-4 py-2 rounded-full"
                            onClick={() => swiperInstanceRef.current?.slideNext()}
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PartnerHome
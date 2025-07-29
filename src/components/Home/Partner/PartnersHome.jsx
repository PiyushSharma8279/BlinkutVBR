import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function PartnerHome() {

     const categoryImg = [
        {
            img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            text: "First Person Data"

        },
        {
            img: "https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
            text: "Second Person Data"


        },
        {
            img: "https://t4.ftcdn.net/jpg/01/51/99/39/240_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg",
            text: "Third Person Data"


        }
    ]

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1.7
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1.3
                }
            }

        ]
    };

    return (
        <>
            <div>
                <div className=" w-[100%] h-120 bg-gradient-to-b  bg-[#275c5e] to-[#458d92]  mt-14">
                    <img src="https://blinkit.com/careers/sites/default/files/2024-05/partner-masthead-desktop.png" alt="" />
                    <div className="flex justify-center">
                        <h2 className=" text-5xl align-middle text-white font-bold ">Shape the future of instant commerce</h2>
                    </div>
                </div>
                <div className=" flex justify-center ">
                    <div className=" w-[80%] h-40 my-10 ">
                        <h2 className=" text-4xl my-3 font-medium">Come build with us</h2>
                        <p className="my-3 text-gray-900 font-medium">We believe that our tech stack and operational backbone can empower thousands of local entrepreneurs to serve the needs of millions of Indians. Our vision of a marketplace where anyone can open their storefront on Blinkit, will enable us to deliver
                            anything from groceries, to medicines, to beauty and health care products or even electronic items within minutes. For this we are looking for passionate entrepreneurs who want an opportunity to join the instant-commerce revolution in India. If this is exciting partner with us!</p>
                    </div>
                </div>
                <div className=" flex justify-center ">
                    <div className=" w-[80%] h-140 my-10 ">
                        <h2 className=" text-3xl my-5 font-medium">Opportunities to grow with Blinkit</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className=" h-60 w-[100%] rounded-2xl bg-gradient-to-b  bg-[#275c5e] to-[#458d92]   ">
                                <div className=" mt-10 flex justify-between">
                                    <div className="h-50  m-4 text-white">
                                        <h3 className=" text-2xl font-bold ">Partner Store</h3>
                                        <p className=" mt-2">Run mini-warehouses
                                            (partner stores) for Blinkit</p>
                                        <a  className=" underline">Know more</a>
                                    </div>
                                    <div>
                                        <img src="https://blinkit.com/careers/sites/default/files/2024-02/partner-express%20%282%29_0.png" alt="" className="  rounded-b-xl h-49 " />
                                    </div>
                                </div>

                            </div>
                            <div className=" h-60 w-[100%]  rounded-2xl bg-gradient-to-b  bg-[#275c5e] to-[#458d92] ">
                                 <div className=" mt-10 flex justify-between">
                                    <div className="h-50 m-4 text-white">
                                        <h3 className=" text-2xl font-bold ">Rent your property</h3>
                                        <p className=" mt-2">Your property can become
                                           our next store!t</p>
                                        <a  className=" underline">Know more</a>
                                    </div>
                                    <div>
                                        <img src="https://blinkit.com/careers/sites/default/files/2024-02/Isolation_Mode_0.png" alt="" className="  rounded-b-xl h-49 " />
                                    </div>
                                </div>
                            </div>
                            <div className=" h-60 w-[100%] rounded-2xl bg-gradient-to-b  bg-[#275c5e] to-[#458d92] ">
                                 <div className=" mt-10 flex justify-between">
                                    <div className="h-50 m-4 text-white">
                                        <h3 className=" text-2xl font-bold ">Seller</h3>
                                        <p className=" mt-2">List your products on Blinkit and reach your customers in minutes</p>
                                        <a  className=" underline">Know more</a>
                                    </div>
                                    <div>
                                        <img src="https://blinkit.com/careers/sites/default/files/2021-12/partner-local.png" alt="" className="  rounded-b-xl h-49 " />
                                    </div>
                                </div>
                            </div>
                            <div className=" h-60 w-[100%] rounded-2xl bg-gradient-to-b  bg-[#275c5e] to-[#458d92] ">
                                 <div className=" mt-10 flex justify-between">
                                    <div className="h-50 m-4 text-white">
                                        <h3 className=" text-2xl font-bold ">Deliver</h3>
                                        <p className=" mt-2">Deliver items from a Blinkit
                                            partner store to customers</p>
                                        <a  className=" underline">Know more</a>
                                    </div>
                                    <div>
                                        <img src="https://blinkit.com/careers/sites/default/files/2021-12/partner-deliver.png" alt="" className="  rounded-b-xl h-49 " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className=' flex justify-center'>
                    
                    
                    
                                            <div className="w-[80%]">
                                                <h2 className="font-bold text-[28px] font-okra mb-6 ">Partner testimonials</h2>
                    
                                                {/* <button
                                            className="custom-prev" 
                                            onClick={() => swiperRef.current.swiper.slidePrev()}
                                         >
                                            ❮
                                         </button>  */}
                                                <Slider {...settings}>
                                                    {categoryImg.map((item, index) => (
                                                        <div key={index} className="flex  justify-center  gap-4  bg-gray-600 ">
                                                            <div className='h-[200px] w-[100%] lg:flex-row flex flex-col justify-between items-center p-6'>
                                                                <div>
                                                                    <p className=' text-white text-xs'>{item.text}</p>
                    
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src={item.img}
                                                                        alt=""
                                                                        className=" rounded-full h-[50px] w-[50px]"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </Slider>
                    
                                                {/* <button
                                            className="custom-next"
                                            onClick={() => swiperRef.current.swiper.slideNext()}
                                         >
                                            ❯
                                         </button>  */}
                                            </div>
                                        </div>
                

            </div>

        </>
    )
}

export default PartnerHome

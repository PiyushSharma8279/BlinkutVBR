import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Resources() {
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
                  <div className="flex justify-center px-4">
                    <div className="w-[80%] max-w-6xl my-10">
                        <h2 className="text-2xl sm:text-3xl font-medium mb-6">Leadership and Legal Compliance</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Annual Return",
                                    img: "https://blinkit.com/careers/sites/default/files/2024-02/partner-express%20%282%29_0.png",
                                },
                                {
                                    title: "Notice of GM",
                                    img: "https://blinkit.com/careers/sites/default/files/2024-02/Isolation_Mode_0.png",
                                },
                                {
                                    title: "Resignation of Directors",
                                    img: "https://blinkit.com/careers/sites/default/files/2021-12/partner-local.png",
                                },
                                {
                                    title: "Policies",
                                    img: "https://blinkit.com/careers/sites/default/files/2021-12/partner-deliver.png",
                                },
                            ].map((item, index) => (
                                <a href='#'
                                    key={index}
                                    className="rounded-2xl bg-gradient-to-b from-[#275c5e] to-[#458d92] p-6 flex flex-col sm:flex-row-reverse justify-between items-center gap-4 text-white cursor-pointer"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold">{item.title}</h3>
                                        <p className="underline mt-2 inline-block text-sm">
                                            Explore
                                        </p>
                                    </div>
                                    <div>
                                        <img src={item.img} alt={item.title} className="h-40 sm:h-48 rounded-b-xl object-contain" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
        <Footer/>
        
        
        </>
    )
}

export default Resources

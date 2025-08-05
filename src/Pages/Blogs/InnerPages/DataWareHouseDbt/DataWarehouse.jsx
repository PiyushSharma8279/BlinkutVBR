import React, { useEffect, useState } from 'react';
import Footer from '../../../../components/footer/Footer';
import dataWarehouse from "../../../../assets/data warehouse journey dbt.webp";
import { useParams } from 'react-router-dom';

function DataWarehouse() {
    const [scrollWidth, setScrollWidth] = useState(0);

   

    const data = [
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-05/Frame%20228_0.png?itok=vIBlIjf3",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months..."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-03/in-focus_Sumanth%20Reddy_web.png?itok=lsH2zGOs",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers..."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-03/in-focus_sancheeta-lambda.png?itok=4plNYuO1",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months..."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-02/Web.png?itok=a0Mh9da7",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers..."
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollWidth(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   const { slug } = useParams();
 const slugify = (title) => {
        return title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    
    const item = data.find(p => slugify(p.title) === slug);

    return (
        <>
            <div className="fixed  left-0 w-full h-[4px] bg-transparent z-50">
                <div
                    className="h-full bg-green-500 transition-all duration-75"
                    style={{ width: `${scrollWidth}%` }}
                />
            </div>
            <div className="flex justify-center mt-[53px] bg-gradient-to-b from-[#275c5e] to-[#458d92]">
                <div className='w-full max-w-[1270px]'>
                    <div className="w-full">
                        <img src={dataWarehouse} alt="" className="w-full object-cover hidden sm:block" />
                        <img
                            src="https://blinkit.com/blog/sites/default/files/styles/banner_mobile/public/2024-07/mobile%20cover%20banner.png?itok=9lR6Qnt1"
                            alt=""
                            className='block sm:hidden h-170'
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                <div className='max-w-[1250px] w-[80%]'>
                    <p className='text-sm py-4 text-[#666]'>Team Blinkit | July 16, 2024 | 6 mins read</p>
                    <h1 className='text-3xl py-2 text-[#1f1f1f]'>Data Warehouse Journey With dbt</h1>
                    <div className='my-10'>
                        <p>The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands...</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold py-2'>The Challenges</h3>
                        <p>Legacy data pipeline build had quite a few daunting tasks...</p>
                    </div>
                    <div className='my-10'>
                        <h3 className='text-2xl font-extrabold py-2'>Foundation</h3>
                        <p className='pb-4'>Legacy data pipeline build had quite a few daunting tasks...</p>
                        <img src="https://blinkit.com/blog/sites/default/files/inline-images/Frame%206_2.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold py-4'>dbt</h3>
                        <p>dbt (data build tool) is a workflow ecosystem that helps build transformational data pipelines...</p>
                        <img src="https://blinkit.com/blog/sites/default/files/inline-images/Frame%209_0.png" alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold py-2'>Advantages</h3>
                        <p>Legacy data pipeline build had quite a few daunting tasks...</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold py-2'>Learning</h3>
                        <p>Legacy data pipeline build had quite a few daunting tasks...</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold py-2'>Next</h3>
                        <p>Legacy data pipeline build had quite a few daunting tasks...</p>
                    </div>
                    <div className='text-2xl font-extrabold py-2 mt-4'>More for you to read</div>
                    <div className="flex justify-center px-4 my-10">
                        <div className="w-full flex flex-wrap justify-center gap-8">
                            {data.map((item, index) => (
                                <div key={index} className="w-full sm:w-[90%] md:w-[48%]">
                                    <div className="overflow-hidden relative w-full h-[300px] rounded-lg">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                                        />
                                    </div>
                                    <p className="text-sm py-4 text-[#666]">{item.info}</p>
                                    <a href={`/blog/${slugify(item.title)}`} className="text-xl py-2 font-semibold text-[#1f1f1f] cursor-pointer">
                                        {item.title}
                                    </a>
                                    <p className="text-base py-4 text-[#333]">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default DataWarehouse;

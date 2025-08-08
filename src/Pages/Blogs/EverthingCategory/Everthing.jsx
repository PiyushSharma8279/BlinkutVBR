import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function Everthing() {
   

    const data = [
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-07/data%20warehouse%20journey%20dbt.png?itok=3AlcU6Es",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-07/blog-blinkit-web_3.png?itok=GGWCJbbO",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-03/Blog%20Header-1920x553%20%281%29.png?itok=p0lCJiot",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-05/Print_web%20%281%29.jpg?itok=ysidjLTI",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-05/Frame%20228_0.png?itok=vIBlIjf3",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-03/in-focus_Sumanth%20Reddy_web.png?itok=lsH2zGOs",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-03/in-focus_sancheeta-lambda.png?itok=4plNYuO1",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-02/Web.png?itok=a0Mh9da7",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-07/data%20warehouse%20journey%20dbt.png?itok=3AlcU6Es",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-07/blog-blinkit-web_3.png?itok=GGWCJbbO",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-03/Blog%20Header-1920x553%20%281%29.png?itok=p0lCJiot",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-05/Print_web%20%281%29.jpg?itok=ysidjLTI",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-05/Frame%20228_0.png?itok=vIBlIjf3",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-03/in-focus_Sumanth%20Reddy_web.png?itok=lsH2zGOs",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-03/in-focus_sancheeta-lambda.png?itok=4plNYuO1",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-02/Web.png?itok=a0Mh9da7",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-07/data%20warehouse%20journey%20dbt.png?itok=3AlcU6Es",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-07/blog-blinkit-web_3.png?itok=GGWCJbbO",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2024-03/Blog%20Header-1920x553%20%281%29.png?itok=p0lCJiot",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-05/Print_web%20%281%29.jpg?itok=ysidjLTI",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-05/Frame%20228_0.png?itok=vIBlIjf3",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-03/in-focus_Sumanth%20Reddy_web.png?itok=lsH2zGOs",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-03/in-focus_sancheeta-lambda.png?itok=4plNYuO1",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "Data Warehouse Journey With dbt",
            content: "The data team has grown tremendously at Blinkit in the past 12 months; with increasing demands of optimisations, growth and efficiencies from business our an"
        },
        {
            img: "https://blinkit.com/blog/sites/default/files/styles/banner_thumbnail/public/2023-02/Web.png?itok=a0Mh9da7",
            info: "Team Blinkit | July 16, 2024 | 6 mins read",
            title: "VBR at WWDC 24",
            content: "Nitesh Jemni is the first UI/UX designer of Grofers. He is currently working as the UI/UX Design Lead."
        },

    ]

    const [filteredData, setFilteredData] = useState(data);

    const filterByTechnology = () => {
        const result = data.filter(item => item.title === "VBR at WWDC 24");
        setFilteredData(result);
    };
    const filterByCulture = () => {
        const result = data.filter(item => item.title === "Data Warehouse Journey With dbt");
        setFilteredData(result);
    };

    const resetFilter = () => {
        setFilteredData(data);
    };
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
            
            <div className="flex justify-center px-4">
                <div className="w-full lg:w-[70%] max-w-[1200px]">
                    <div className="flex flex-wrap justify-evenly  text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] my-6 text-center">
                        <a className="cursor-pointer hover:underline decoration-blue-400 underline-offset-4 transition-all" onClick={resetFilter}>Everything</a>
                        <a className="cursor-pointer hover:underline decoration-blue-400 underline-offset-4 transition-all" onClick={filterByTechnology}>Technology</a>
                        <a className="cursor-pointer hover:underline decoration-blue-400 underline-offset-4 transition-all" onClick={filterByCulture}>Culture</a>
                        <a className="cursor-pointer hover:underline decoration-blue-400 underline-offset-4 transition-all" onClick={filterByTechnology}>Humans of VBR</a>
                        <a className="cursor-pointer hover:underline decoration-blue-400 underline-offset-4 transition-all" onClick={filterByCulture}>Newsroom</a>
                        <a className="cursor-pointer hover:underline decoration-blue-400 underline-offset-4 transition-all" onClick={filterByTechnology}>Sustainability</a>
                    </div>
                </div>
            </div>

           
            <div   className="flex justify-center px-4 my-10">
                <div  className="w-full lg:w-[70%] max-w-[1200px] flex flex-wrap justify-center gap-8">
                    {filteredData.map((item, index) => (
                        <a key={index} href={`/blog/${slugify(item.title)}`} className="w-full sm:w-[90%] md:w-[48%]">
                            <div className="overflow-hidden relative w-full h-[300px] rounded-lg">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                                />
                            </div>
                            <p className="text-sm py-4 text-[#666]">{item.info}</p>
                            <div className="text-xl py-2 font-semibold text-[#1f1f1f] cursor-pointer">
                                {item.title}
                            </div>
                            <p className="text-base py-4 text-[#333]">{item.content}</p>
                        </a>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Everthing;
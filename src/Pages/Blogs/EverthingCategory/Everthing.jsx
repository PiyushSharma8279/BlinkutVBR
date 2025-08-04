import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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
            content: "When I told Tim Cook about the 10 minute iPhone delivery by Blinkit his reaction was, “that’s crazy”, and all I could think"
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

  return (
    <>
      <div>
        <div className='flex justify-evenly text-[22px] my-[20px] gap-5'>
          <a className='cursor-pointer hover:underline decoration-blue-400 underline-offset-15' onClick={resetFilter}>Everything</a>
          <a className='cursor-pointer hover:underline decoration-blue-400 underline-offset-15' onClick={filterByTechnology}>Technology</a>
          <a className='cursor-pointer hover:underline decoration-blue-400 underline-offset-15' onClick={filterByCulture}>Culture</a>
          <a className='cursor-pointer hover:underline decoration-blue-400 underline-offset-15' onClick={filterByTechnology}>Humans of VBR</a>
          <a className='cursor-pointer hover:underline decoration-blue-400 underline-offset-15' onClick={filterByCulture}>Newsroom</a>
          <a className='cursor-pointer hover:underline decoration-blue-400 underline-offset-15' onClick={filterByTechnology}>Sustainability</a>
        </div>
      </div>

      <div className='flex flex-wrap w-full'>
        {filteredData.map((item, index) => (
          <div className='w-1/2 my-[40px]' key={index}>
            <div className='overflow-hidden relative w-full h-[300px]'>
              <img
                src={item.img}
                alt={item.title}
                className='h-full object-cover scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'
              />
            </div>
            <p className='text-[.75rem] py-[20px] text-[#666]'>{item.info}</p>
            <h2 className='text-[1.5rem] py-[10px] font-normal text-[#1f1f1f] cursor-pointer'>{item.title}</h2>
            <p className='text-[1rem] py-[20px] text-[#333333]'>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Everthing;
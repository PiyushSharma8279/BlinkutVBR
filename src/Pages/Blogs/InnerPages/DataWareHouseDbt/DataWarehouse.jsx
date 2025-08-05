import React from 'react'
import Footer from '../../../../components/footer/Footer'
import dataWarehouse from "../../../../assets/data warehouse journey dbt.webp"

function DataWarehouse() {
    return (
        <>
        <div className=' flex justify-center'>
            <div className=' w-full max-w-[1200px] '>
                <img src={dataWarehouse} alt="" />

            </div>


        </div>




        <Footer/>
        
        </>
    )
}

export default DataWarehouse

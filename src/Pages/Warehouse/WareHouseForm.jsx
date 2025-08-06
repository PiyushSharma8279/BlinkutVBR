import React from 'react'
import { useState } from 'react';


function WareHouseForm() {
     const [checked, setChecked] = useState(false);
    return (
        <>

            <div className=' h-120  bg-white rounded-2xl lg:hidden xl:hidden  '>
                 <form className=' flex-col justify-between  h-80'>
                        <div className='w-[98%] h-96  bg-white rounded-2xl   lg:hidden lg:bg-white '>
                            <div className='px-3 py-5'>
                                <div>
                                    <h1 className=' font-bold text-xl  lg:text-2xl'>Come bring orders to life</h1>
                                </div>
                                <div>
                                    <p className='pb-3 pt-1'>Earn more with a job in our warehouse</p>
                                </div>
                                <div className=" flex flex-col gap-2 w-full">
                                    <div className="lg:w-1/2 w-full">
                                        <input
                                            type="text"
                                            placeholder="your full name"
                                            className="w-full bg-gray-200 p-2 rounded-xs"
                                        />
                                    </div>
                                    <div className="lg:w-1/2 w-full">
                                        <input
                                            type="text"
                                            placeholder="phone number"
                                            className="w-full bg-gray-200 p-2 rounded-xs"
                                        />
                                    </div>

                                </div>
                                <div className="flex flex-col gap-2 w-full mt-4">
                                    <div className="lg:w-1/2 w-full">
                                        <select className='w-[100%] p-2 bg-gray-200  text-gray-400 rounded-xs'>
                                            <option value="" selected="selected" className=' text-gray-400'>city</option>
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
                                    <div className=" w-full">
                                        <input
                                            type="text"
                                            placeholder="state*"
                                            className="w-full bg-gray-200 p-2 rounded-xs"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <select className='w-[100%] p-2 bg-gray-200 mt-4 text-gray-400 rounded-xs'>
                                        <option value="">highest education*</option>
                                        <option value="">10th</option>
                                        <option value="">12th</option>
                                        <option value="">Graduate</option>

                                    </select>

                                </div>
                                <div className="flex-col gap-2 w-full mt-4">
                                    <button className='bg-black px-12 py-3 mt-2 text-white  rounded-xs cursor-pointer w-full' type='submit'>Register</button>
                                    <div className="flex items-center gap-3 h-[50px] border rounded-xs px-4 shadow-md  bg-white mt-2 w-1/2">
                                        <input
                                            type="checkbox"
                                            id="robot-check"
                                            checked={checked}

                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                        />
                                        <label htmlFor="robot-check" className="text-gray-800 cursor-pointer select-none text-[12px]">
                                            I'm not a robot
                                        </label>

                                        {checked && (
                                            <ShieldCheck className="text-green-500" size={20} />
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
            </div>



        </>
    )
}

export default WareHouseForm

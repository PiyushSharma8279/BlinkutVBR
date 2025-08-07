import React from 'react'
import { IoLogoGooglePlaystore } from "react-icons/io5"

function DeliveryForm() {
    return (
        <>

            <div className=' h-96  bg-white rounded-2xl lg:hidden xl:hidden  '>
                <form className=' flex-col justify-between m-6 h-80'>
                    <div>
                        <h1 className=' font-bold text-xl p-1 lg:text-2xl'>Become a Blinkut rider</h1>
                    </div>
                    <div>
                        <p className=' p-1'>To deliver orders for Blinkit, please fill this form</p>
                    </div>
                    <div className='flex flex-col justify-around gap-4'>
                        <div>
                            <input type="text" placeholder='name*' className=' bg-gray-200 p-2 rounded-xs w-[100%]' />
                        </div>
                        <div>
                            <input type="text" placeholder='phone*' className=' bg-gray-200 p-2 rounded-xs w-[100%]' />
                            <p className=' text-gray-800  text-xs'>10 character(s) remaining</p>

                        </div>
                    </div>
                    <div>
                        <select className='w-[100%] p-2 bg-gray-200 my-2  text-gray-400'>
                            <option value="" selected="selected" className=' text-gra'>select the city</option>
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

                    <button type='submit' className='bg-black px-12 w-[100%] py-3 text-white cursor-pointer rounded-xl' >join to earn</button>

                    <div className=' flex justify-center mt-2'>
                        <div className="flex flex-row justify-center googleBtn">
                            <IoLogoGooglePlaystore className="play-btn" />
                            <div className="flex flex-col items-center txtCont">
                                <p className="t1">GET IT ON</p>
                                <p className="t2">Google Play</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>



        </>
    )
}

export default DeliveryForm

import React from 'react'
import { X } from 'lucide-react';

function Popup({AfterSingup}) {
    return (
        <>
            <div className=' fixed  inset-0   flex flex-col justify-center items-center z-10 '> 
                
                <div className=' flex flex-col gap-10 text-black items-center bg-white rounded-xl pt-2 lg:w-[500px] sm:w-[400px] md:[500px] w-[300px] mt-10'>
                    <button className='place-self-end cursor-pointer ' onClick={AfterSingup}><X size={30}/></button> 
                    
                    <div className=' flex flex-col gap-7 mx-4'>
                        <h1 className='lg:text-5xl text-center font-bold text-3xl'>Seller hub</h1>
                        <h2 className=' text-2xl text-center font-medium'>Log in</h2>
                        <form>
                            <input
                                type="email"
                                placeholder=' Enter email ID *'
                                required
                                className='w-full px-4 pr-30 py-3  text-black border-gray-300 rounded-md bg- bg-gray-200'
                            />
                            <button className='w-full px-4 py-3  text-black rounded-xl bg- bg-gray-500 mt-4 cursor-pointer'> Send OTP</button>
                        </form>

                    </div>
                    <p className='  w-full font-medium text-center bg-gray-200 py-2 rounded-b-xl text-[14px] md:text-[16px] lg:text-[18px] '>By continuing, I agree to <span className='text-green-400'>Terms & Conditions</span></p>
                </div>

            </div>
        </>
    )
}

export default Popup

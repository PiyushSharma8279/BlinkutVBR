import React from 'react'
import Footer from '../../components/footer/Footer'
import { FaHeart } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <div className="relative">
                <div
                    className=" lg:block absolute inset-0 bg-cover bg-center bg-no-repeat h-[460px] z-[-1] "
                    style={{
                        backgroundImage: `url(https://blinkit.com/careers/sites/default/files/2021-12/contact-masthead.png)`,
                    }}
                ></div>


                <div className="relative mt-13 z-10 ">
                    <div className="min-h-[460px] lg:flex lg:flex-row flex-col lg:justify-evenly p-8">
                        <h1 className="lg:text-[40px] text-[30px] font-bold lg:mt-20   lg:w-[300px] w-full ">
                            We would <FaHeart className="inline -mt-1" color="red" /> to hear from you
                            </h1>
                            <div className=' lg:w-[450px] w-full h-[120px] lg:mt-20 font-bold lg:bg-white lg:p-8 rounded-xl'>
                                For any queries or assistance, feel free to reach out to us at info@vbr.com

                            </div>
                    </div>
                    
                    <div className=' flex justify-center my-10 '>
                    <div className=' w-[80%] '>
                        <h2 className=' font-bold'>Beware - Do not share bank details such as account number, UPI pin, CVV, OTP, or 
                            card details with unknown people posing to be Blinkit. A Blinkit representative will 
                            never ask for this information.
                            </h2>
                            <h2 className=' py-6'>
                               <span className=' font-bold'> Blinkit does not have any official customer care phone line.</span> Beware of fake numbers! For any issues,
                                 please use our in-app support only, where we are available.
                            </h2>
                    </div>
                    </div>


                    <Footer />
                </div>
            </div>
            


        </>
    )
}

export default Contact

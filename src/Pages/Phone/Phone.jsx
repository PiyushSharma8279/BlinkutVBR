import React from 'react';
import Footer from '../../components/footer/Footer';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { RiAppleFill } from 'react-icons/ri';

function Phone() {
  return (
    <>
      <div className="bg-[#e9eef1] flex justify-center py-20">
        <div className="w-[80%] flex flex-col lg:flex-row items-center justify-around gap-10">
          
          <div className="hidden lg:block">
            <img
              src="https://blinkit.com/careers/sites/default/files/2024-05/blinkit.png"
              alt="Blinkit App"
              className="h-[550px]"
            />
          </div>

          
          <div className="w-full lg:w-[50%]">
            <h2 className="font-normal text-3xl sm:text-4xl  text-[rgb(28,28,28)]">
              Get the VBR app now
            </h2>
            <p className="text-[rgb(54,54,54)] text-base  mt-2">
              We will send you a link, open it on your phone to download the app
            </p>

           
            <div className="flex flex-col sm:flex-row  gap-3 mt-5">
              <input
                type="email"
                placeholder=" email"
                className="p-3 border border-gray-400 rounded bg-white w-full sm:w-[250px]"
              />
              <button className="bg-green-600 text-white px-5 py-3 rounded-xl">
                Share App Link
              </button>
            </div>

           
            <div className="mt-6">
              <p className="text-gray-700">Download app from</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-3">
               
                <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg cursor-pointer w-fit">
                  <RiAppleFill size={30} />
                  <div className="ml-2 leading-tight">
                    <p className="text-xs">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </div>

               
                <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg cursor-pointer w-fit">
                  <IoLogoGooglePlaystore size={26} />
                  <div className="ml-2 leading-tight">
                    <p className="text-xs">GET IT ON</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Phone;

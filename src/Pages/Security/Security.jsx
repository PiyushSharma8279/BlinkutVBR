import React from 'react';
import Footer from '../../components/footer/Footer';

function Security() {
  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="lg:w-[80%] w-full relative">
         
          <div
            className="relative w-full h-[460px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://blinkit.com/careers/sites/default/files/2023-05/bg-hero-security_0.jpg)`,
            }}
          >
            
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
              <h1 className="text-4xl font-bold text-white text-center">Security @ VBR</h1>
            </div>
          </div>

          
          
        </div>
      </div>

      <div className=' flex justify-center my-13'>
        <div className=' w-[80%]'>
        <h2 className=' font-bold text-2xl py-2'>Help keep VBR safe for the community by disclosing security issues to us</h2>
        <p className=' py-3'>We take security seriously at VBR. If you are a security researcher or expert, and believe you’ve 
            identified security-related issues with VBR's website or apps, we would appreciate you disclosing it
             to us responsibly.</p>
             <p>Our team is committed to addressing all security issues in a responsible and timely manner, and ask the
                 security community to give us the opportunity to do so before disclosing them publicly. Please submit 
                 a bug to us on our HackerOne page, along with a detailed description of the issue and steps to reproduce
                  it, if any. We trust the security community to make every effort to protect our users data and privacy.

</p>
<button className=' bg-green-600 px-6 py-3 my-4 text-white text-xl font-bold rounded-xl'>Submit a bug report</button>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Security;

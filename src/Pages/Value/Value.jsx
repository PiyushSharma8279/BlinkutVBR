import React from 'react'
import Footer from '../../components/footer/Footer'

function Value() {
    return (
        <>
         <div className=' flex justify-center align-middle lg:my-25 my-10 h-auto bg-#[e9eef1] '>
                <div className=' lg:w-[80%]  w-[90%]'>
                    <h2 className='lg:text-4xl text-3xl lg:font-bold font-bold mt-10 mb-6'>
                        What we value
                    </h2>
                    <h3 className=' font-medium lg:text-3xl  text-2xl lg:mt-10 mt:8 mb-2 lg:mb-4'>
                        Unwavering accountability
                    </h3>
                    <p>When you pick a problem statement, ensuring the outcome (not just the output) is your
                         responsibility. The buck always stops at you.</p>
                    <h3 className=' font-medium lg:text-3xl  text-2xl lg:mt-10 mt:8 mb-2 lg:mb-4'>
                        Leaders are great communicators
                    </h3>
                    <p>You are effortlessly able to prioritise between the urgent and the important. Are passionate about everything you work on, without 
                        getting attached to your projects/ tasks.
                    </p>
                    <h3 className=' font-medium lg:text-3xl  text-2xl lg:mt-10 mt:8 mb-2 lg:mb-4'>
                        Intellectual honesty
                    </h3>
                    <p>You are self-aware and are not afraid of being vulnerable with others. When you hit
                         personal ceilings, you quickly seek help and build new perspectives.</p>
                    <h3 className=' font-medium lg:text-3xl  text-2xl lg:mt-10 mt:8 mb-2 lg:mb-4'>
                        High integrity
                    </h3>
                    <p>You are known for your authenticity and transparency. You quickly become 
                        aware of your personal biases and work to offset them.</p>
                   

                </div>
            </div>
          <Footer/>

        
        </>
    )
}

export default Value

import React from 'react'
import "./Footer.css";
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { RiAppleFill } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FooterText from './FooterText';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <FooterText />
            <div className=' bg-[#f5faf8] flex justify-center'>

            
            <div className='flex flex-col justify-around content lg:flex-row w-[80%] max-w-[1200px] '>
                <div className=' flex justify-between mx-8 lg:mx-0 lg:gap-10 '>
                    <div className='flex flex-col gap-2 innCont '>
                        <h2 className=' font-bold'>Company</h2>
                        <div>
                            <a href="/about">About</a>
                        </div>
                        <div>
                            <a href="/careers">Careers</a>
                        </div>

                    
                          <a href="/blog">Blog</a>
                    
                        <div>
                            <a href="/press">Press</a>
                        </div>
                        <div>
                            <a href="/lead">Lead</a>
                        </div>
                        <div>
                            <a href="/values">Values</a>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-2 innCont'>
                            <h2 className=' font-bold'>For Consumers</h2>
                            <div>
                                <a href="/about">Privacy</a>
                            </div>
                            <div>
                                <a href="/careers">Terms</a>
                            </div>

                            <div>
                                <a href="/faq">FAQs</a>
                            </div>
                            <div>
                                <a href="/press">Security</a>
                            </div>
                            
                            <a href="/lead">Mobile</a>
                           
                            <div>
                                <a href="/values">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 innCont m-6'>
                    <h2 className=' font-bold'>For Partners</h2>
                    <div>
                        <a href="/about">Franchise</a>
                    </div>
                    <div>
                        <a href="/seller">Seller</a>
                    </div>

                    <div>
                        <a href="/warehouse">Warehouse</a>
                    </div>
                    
                     <a href="" >Deliver</a>
                    
                    
                        {/* <a href="/partner">Partner</a> */}
                       
                     <a href="/partner">Partner</a>
                    
                </div>
                <div className='innCont m-6'>
                    <h2 className=' font-bold'>Follow us</h2>
                    <div className='follow-Cont cursor-pointer '>
                        <FaInstagram className='logos ' />
                        <FaTwitter className=' logos' />
                        <FaFacebook className=' logos' />
                        <FaLinkedin className='logos' />

                    </div>

                </div>
                <div className='innCont '>
                    <h2 className=' font-bold '>Download App</h2>
                    <div className=' flex lg:flex-row gap-6'>
                        <div className="flex flex-row googleBtn w-40 cursor-pointer ">
                            <div className="flex flex-row googleBtn  max-w-[200px] w-full max-h-[50px]  ">
                                            <div className="flex flex-row blackBtn">
                                                <IoLogoGooglePlaystore className="icons max-h-[50px] max-w-[200px]" />
                                                <div className="flex flex-col txtCont max-h-[50px]">
                                                    <p className="t1 max-h-[20px] ">GET IT ON</p>
                                                    <p className="t2 max-h-[20px]">Google Play</p>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        <div className="flex flex-row googleBtn appleBtn w-40 cursor-pointer">
                            <RiAppleFill className="icons" />
                            <div className="flex flex-col txtCont">
                                <p className="t1">Download on the</p>
                                <p className="t2">App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <h2 className=' text-center bg-gray-400'>Copyright by creativewebworld. All Rights Reserved.</h2>

        </>
    )
}

export default Footer

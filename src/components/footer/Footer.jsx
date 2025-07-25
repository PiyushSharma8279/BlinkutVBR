import React from 'react'
import "./Footer.css";
import { IoLogoGooglePlaystore } from "react-icons/io5"
import {RiAppleFill} from "react-icons/ri"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FooterText from './FooterText';

function Footer() {
    return (
        <>
        <FooterText/>
            <div className='flex justify-around content'>
                <div className='flex flex-col gap-2 innCont '>
                    <h2 className=' font-bold'>Company</h2>
                    <div>
                        <a href="/about">About</a>
                    </div>
                    <div>
                        <a href="/careers">Careers</a>
                    </div>

                    <div>
                        <a href="/blog">Blog</a>
                    </div>
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
                            <a href="/blog">FAQs</a>
                        </div>
                        <div>
                            <a href="/press">Security</a>
                        </div>
                        <div>
                            <a href="/lead">Mobile</a>
                        </div>
                        <div>
                            <a href="/values">Contact</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 innCont'>
                    <h2 className=' font-bold'>For Partners</h2>
                    <div>
                        <a href="/about">Franchise</a>
                    </div>
                    <div>
                        <a href="/careers">Seller</a>
                    </div>

                    <div>
                        <a href="/blog">Warehouse</a>
                    </div>
                    <div>
                        <a href="/deliver">Deliver</a>
                    </div>
                    <div>
                        <a href="/partner">Partner</a>
                    </div>
                </div>
                <div className='innCont'>
                    <h2 className=' font-bold'>Follow us</h2>
                    <div className='follow-Cont'>
                        <FaInstagram  className='logos'/>
                        <FaTwitter className=' logos'/>
                        <FaFacebook className=' logos'/>
                        <FaLinkedin className='logos'/>

                    </div>

                </div>
                <div className='innCont'>
                    <h2 className=' font-bold '>Download App</h2>
                    <div className="flex flex-row googleBtn ">
                        <div className="flex flex-row blackBtn">
                            <IoLogoGooglePlaystore className="icons" />
                            <div className="flex flex-col txtCont">
                                <p className="t1">GET IT ON</p>
                                <p className="t2">Google Play</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row googleBtn appleBtn">
                        <RiAppleFill className="icons" />
                        <div className="flex flex-col txtCont">
                            <p className="t1">Download on the</p>
                            <p className="t2">App Store</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=' text-center bg-gray-400'>Copyright by creativewebworld. All Rights Reserved.</h2>

        </>
    )
}

export default Footer

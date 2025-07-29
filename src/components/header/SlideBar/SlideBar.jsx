import React from 'react'
import { useState } from 'react';
import SidePanel from './SidePanel';
import "./slidebar.css"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function SlideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const items = [
        <>
        <a href="/home">Home</a>
        </>,
         <>
        <a href="/about">About</a>
        </>,
         <>
        <a href="/career">Career</a>
        </>,
         <>
        <a href="/partner">Partner</a>
        </>,
         <>
        <a href="/blog">Blog</a>
        </>,
        <>
            <a href="/lead">Lead</a>
        </>,
        <>
            <a href="/value">Value</a>
        </>,
        <>
            <a href="/press">Press</a>
        </>,
        <>
            <a href="/security">Security</a>
        </>,
        <>
            <a href="/privacy">Privacy</a>
        </>,
        <>
            <a href="/value">Terms</a>
        </>,
        <>
            <a href="/value">FAQs</a>
        </>,
        <>
            <a href="/value">Mobile</a>
        </>,
        <>
            <a href="/value">Contact</a>
        </>,
        <>
            <a href="/value">Franchise</a>
        </>,
        <>
            <a href="/value">Seller</a>
        </>,
        <>
            <a href="/value">Warehouse</a>
        </>,
        <>
            <a href="/value">Deliver</a>
        </>,
        <>
            <a href="/value">Resources</a>
        </>,
        <>
            <h2>
                Follow us
            </h2>
            <div className=' flex gap-3 mt-5'>
                <FaInstagram className='logos' />
                <FaTwitter className=' logos' />
                <FaFacebook className=' logos' />
                <FaLinkedin className='logos' />
            </div>
        </>
    ];
    const togglePanel = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div>
                <button className='mb-3'>
                    <div className='cursor-pointer open-panel-btn' onClick={togglePanel}>
                        <span className='block w-5 h-0.5 bg-white'></span>
                        <span className='block w-5 h-0.5 bg-white mt-1 '></span>
                        <span className='block w-5 h-0.5 bg-white mt-1 '></span>
                    </div>
                </button>
                <SidePanel isOpen={isOpen} onClose={togglePanel} items={items} />
            </div>

        </>
    )
}

export default SlideBar

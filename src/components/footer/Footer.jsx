import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { RiAppleFill } from 'react-icons/ri';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import FooterText from './FooterText';

function Footer() {
  return (
    <>
      <FooterText />

      {/* Footer Section */}
      <div className="bg-[#f5faf8] flex justify-center py-10 px-4">
        <div className="w-[80%] max-w-[1200px] flex flex-col lg:flex-row flex-wrap justify-between gap-y-10">

          {/* Column 1: Company */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold mb-1">Company</h2>
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
            <a href="/press">Press</a>
            <a href="/lead">Lead</a>
            <a href="/values">Values</a>
          </div>

          {/* Column 2: For Consumers */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold mb-1">For Consumers</h2>
            <a href="/about">Privacy</a>
            <a href="/careers">Terms</a>
            <a href="/faq">FAQs</a>
            <a href="/press">Security</a>
            <a href="/lead">Mobile</a>
            <a href="/values">Contact</a>
          </div>

          {/* Column 3: For Partners */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold mb-1">For Partners</h2>
            <a href="/about">Franchise</a>
            <a href="/seller">Seller</a>
            <a href="/warehouse">Warehouse</a>
            <a href="/">Deliver</a>
            <a href="/partner">Partner</a>
          </div>

          {/* Column 4: Follow Us */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold mb-1">Follow Us</h2>
            <div className="flex gap-4 text-xl text-gray-700 cursor-pointer">
              <FaInstagram />
              <FaTwitter />
              <FaFacebook />
              <FaLinkedin />
            </div>
          </div>

          {/* Column 5: Download App */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Download App</h2>
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Apple Store */}
              <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg w-fit cursor-pointer hover:opacity-90">
                <RiAppleFill className="text-2xl" />
                <div className="ml-3 text-left leading-tight">
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </div>

              {/* Google Play */}
              <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg w-fit cursor-pointer hover:opacity-90">
                <IoLogoGooglePlaystore className="text-xl" />
                <div className="ml-3 text-left leading-tight">
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center bg-gray-400 text-white py-3 text-sm">
        © Copyright by creativewebworld. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;

import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";
import LocationComponent from "../Location/LocationComponent";
import NumberComponent from "../NumberComponent/NumberComponent";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div 
          data-aos="zoom-out"
          data-aos-duration="500"
          className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Eatery Zone
            </h1>
            <p className="">
            Reach out to us for inquiries! Call or visit us at our Location. We're here to assist you!
            </p>
            <br />
            <div className="flex items-center gap-3">
            <LocationComponent />
            </div>
            <div className="flex items-center gap-3 mt-3">
            <NumberComponent />
              <p>Mobile No.</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/kulkarnishrey/" target="_blank">
                <FaInstagram className="hover:scale-125 duration-200 cursor-pointer text-3xl" />
              </a>
              <a href="https://github.com/SHREY2803" target="_blank">
                <FaGithub className=" hover:scale-125 duration-200 cursor-pointer text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/shrey-kulkarni-80b176218/" target="_blank">
                <FaLinkedin className=" hover:scale-125 duration-200 cursor-pointer text-3xl" />
              </a>
            </div>
          </div>
          <div 
          data-aos="zoom-out"
          data-aos-duration="500"
          className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Other Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Support</li>
                  <li className="cursor-pointer">Contact Us</li>
                  <li className="cursor-pointer">Help</li>
                  
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Support 
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Customer Support</li>
                  <li className="cursor-pointer">Refund Support</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
          className="text-center py-10 border-t-2 border-gray-300/50 text-xs sm:text-lg">
          &copy;Copyright 2024 All Rights Reserved || Shrey Kulkarni
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
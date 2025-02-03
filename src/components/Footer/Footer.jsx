import React, { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";
import LocationComponent from "../Location/LocationComponent";
import NumberComponent from "../NumberComponent/NumberComponent";

const Footer = () => {
  return (
    <>
      <span id="contact"></span>
      <div className="bg-gray-100 dark:bg-gray-950">
        <section className="max-w-[1200px] mx-auto">
          <div className="grid py-5 md:grid-cols-3">
            <div className="px-4 py-8 ">
              <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left">
                <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                Eatery Zone
              </h1>
              <p className="">
                Reach out to us for inquiries! Call or visit us at Atladara,
                Vadodara. We're here to assist you!{" "}
              </p>
              <br />
              <div className="flex items-center gap-3">
                <LocationComponent className="duration-200 hover:scale-105" />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <NumberComponent />
                <p>Shrey Kulkarni</p>
              </div>
              {/* Social Handle */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.instagram.com/kulkarnishrey/"
                  target="_blank"
                >
                  <FaInstagram className="text-3xl duration-200 hover:scale-105" />
                </a>
                <a href="https://github.com/SHREY2803" target="_blank">
                  <FaGithub className="text-3xl duration-200 hover:scale-105" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shrey-kulkarni-80b176218/"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl duration-200 hover:scale-105" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10 ">
              <div className="">
                <div className="px-4 py-8 ">
                  <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
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
                <div className="px-4 py-8 ">
                  <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                    Other Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer">Email</li>
                    <li className="cursor-pointer">Advertisement</li>
                    <li className="cursor-pointer">Careers</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="px-4 py-8 ">
                  <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                    Help and Support
                  </h1>
                  {/* <ul className="list-disc list-inside"> */}
                  <ul className="flex flex-col gap-3">
                    <li className="cursor-pointer">Customer Care</li>
                    <li className="cursor-pointer">Refund Issues</li>
                    <li className="cursor-pointer">Queries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-10 text-xs text-center border-t-2 border-gray-300/50 md:text-xl">
              &copy;Copyright 2024 All Rights Reserved || Made By Shrey Kulkarni
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;

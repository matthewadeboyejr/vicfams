import Image from "next/image";
import React from "react";
import NavBar from "../general/NavBar";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { GetQuote } from "../general/Btn";

const Hero = () => {
  return (
    <section className="bg-white  px-4 md:px-12 header-overlay  relative">
      <NavBar />
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 pt-10  ">
        {/* Text Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
            Trusted Help for Spotless Spaces & Fresh Laundry for Hire
          </h1>
          <p className="text-lg text-white mb-6">
            Serving Airbnb Hosts, Hotels, Offices & Residentials with Quality
            Bedding, Deep Cleaning & More.
          </p>
          {/* CTA Buttons */}
          <div className="flex">
            <GetQuote />
            <button className="items-center flex gap-2 px-6 py-3 rounded-xl hover:bg-blue-500 transition text-white">
              <MdOutlineWifiCalling3 />
              <p className="font-bold">+447487331247</p>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full  ">
          <div className="relative w-full h-auto">
            <Image
              className="rounded-2xl sm:rounded-3xl lg:rounded-4xl animate-gentle-bounce"
              src="/slider-img2.png"
              alt="Cleaning and Laundry illustration"
              width={600}
              height={450}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import {
  MdOutlineApartment,
  MdOutlineHomeWork,
  MdOutlineHotel,
  MdPeopleOutline,
} from "react-icons/md";
import { FaBuilding, FaHome } from "react-icons/fa";

const audiences = [
  {
    title: "Airbnb Hosts",
    description:
      "Fast, reliable linen supply & cleaning to keep your listings 5-star ready.",
    icon: <FaHome className="text-blue-500 text-3xl" />,
  },
  {
    title: "Hotels & Short-Stay Apartments",
    description:
      "Professional linen rental and cleaning services to maintain your standards.",
    icon: <MdOutlineHotel className="text-blue-500 text-3xl" />,
  },
  {
    title: "Corporate Offices",
    description:
      "Maintain a spotless workspace with scheduled deep cleaning services.",
    icon: <FaBuilding className="text-blue-500 text-3xl" />,
  },
  {
    title: "Residential Homes",
    description:
      "One-time or recurring home cleaning & laundry to make your life easier.",
    icon: <MdOutlineHomeWork className="text-blue-500 text-3xl" />,
  },
  {
    title: "Student Apartments",
    description:
      "Affordable and consistent cleaning and laundry for shared housing.",
    icon: <MdPeopleOutline className="text-blue-600 text-3xl" />,
  },
];

const About = () => {
  return (
    <section className="bg-white px-4 md:px-12 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 overflow-clip pt-10">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-auto">
            <Image
              className="rounded-2xl sm:rounded-3xl lg:rounded-4xl animate-gentle-bounce"
              src="/about-thumb.png"
              alt="Cleaning and Laundry illustration"
              width={600}
              height={450}
              layout="responsive"
              priority
            />
          </div>
        </div>

        {/* Text Content & Who We Serve */}
        <div className="md:w-1/2 w-full text-left text-black">
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <div className="uppercase font-semibold text-blue-500 px-4 py-2 rounded-xl hover:bg-gray-200 transition w-fit">
              ABOUT US
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Let Us Handle the Mess You Enjoy the Clean
          </h2>
          <p className="text-lg mb-6">
            Our mission is to offer professional, affordable, and eco-friendly
            cleaning solutions to busy households and small businesses. We solve
            host problems by providing cleaning and bedding services designed
            for them.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-10">
            <button className="uppercase bg-yellow-300 font-semibold text-blue-500 px-4 py-3 rounded-full hover:bg-gray-200 transition w-fit">
              Request a Quote
            </button>
          </div>

          {/* Who We Serve */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Who We Serve
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {audiences.map((aud, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3"
                >
                  <div>{aud.icon}</div>
                  <div>
                    <h4 className="font-semibold text-blue-500">{aud.title}</h4>
                    <p className="text-sm text-gray-600">{aud.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

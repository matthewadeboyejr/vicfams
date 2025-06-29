"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "anticipate",
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "backOut",
    },
  }),
};

const About = () => {
  return (
    <section className="bg-white px-4 md:px-12 py-20">
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-10 overflow-clip pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Image */}
        <motion.div className="md:w-1/2 w-full" variants={imageVariants}>
          <motion.div
            className="relative w-full h-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              className="rounded-2xl sm:rounded-3xl lg:rounded-4xl"
              src="/about-thumb.png"
              alt="Cleaning and Laundry illustration"
              width={600}
              height={450}
              layout="responsive"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content & Who We Serve */}
        <motion.div
          className="md:w-1/2 w-full text-left text-black"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start"
            variants={itemVariants}
          >
            <div className="uppercase font-semibold text-blue-500 px-4 py-2 rounded-xl hover:bg-gray-200 transition w-fit">
              ABOUT US
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            variants={itemVariants}
          >
            Let Us Handle the Mess You Enjoy the Clean
          </motion.h2>

          <motion.p className="text-lg mb-6" variants={itemVariants}>
            Our mission is to offer professional, affordable, and eco-friendly
            cleaning solutions to busy households and small businesses. We solve
            host problems by providing cleaning and bedding services designed
            for them.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start mb-10"
            variants={itemVariants}
          >
            <motion.button
              className="uppercase bg-yellow-300 font-semibold text-blue-500 px-4 py-3 rounded-full hover:bg-gray-200 transition w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.button>
          </motion.div>

          {/* Who We Serve */}
          <motion.div className="mb-6" variants={containerVariants}>
            <motion.h3
              className="text-2xl font-bold text-blue-500 mb-4"
              variants={itemVariants}
            >
              Who We Serve
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {audiences.map((aud, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-shadow"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -5 }}
                >
                  <div>{aud.icon}</div>
                  <div>
                    <h4 className="font-semibold text-blue-500">{aud.title}</h4>
                    <p className="text-sm text-gray-600">{aud.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

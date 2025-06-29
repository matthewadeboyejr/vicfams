"use client";
import Image from "next/image";
import React from "react";
import NavBar from "../general/NavBar";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { GetQuote } from "../general/Btn";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="bg-white px-4 md:px-12 header-overlay relative">
      <NavBar />
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-10 pt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Text Content */}
        <motion.div className="md:w-1/2 text-left" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white"
            variants={itemVariants}
          >
            Trusted Cleaning & Laundry Services for Hire
          </motion.h1>
          <motion.p className="text-lg text-white mb-6" variants={itemVariants}>
            Serving Airbnb Hosts, Hotels, Offices & Residentials with Quality
            Bedding, Deep Cleaning & More.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div className="flex" variants={itemVariants}>
            <GetQuote />
            <button className="items-center flex gap-2 px-6 py-3 rounded-xl hover:bg-blue-500 transition text-white">
              <MdOutlineWifiCalling3 />
              <p className="font-bold">+447487331247</p>
            </button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div className="md:w-1/2 w-full" variants={imageVariants}>
          <div className="relative w-full h-auto">
            <motion.div
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                className="rounded-2xl sm:rounded-3xl lg:rounded-4xl"
                src="/slider-img2.png"
                alt="Cleaning and Laundry illustration"
                width={600}
                height={450}
                layout="responsive"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GetQuote } from "./Btn";

// Navigation items data
const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact-us" },
  { name: "About Us", href: "/about-us" },
];

const contact = [
  {
    means: "Call Us",
    detail: "+447487331247",
    icon: <MdOutlineWifiCalling3 />,
  },
  {
    means: "Email Us",
    detail: "Enquiry@vicfams.com",
    icon: <IoMailOpenOutline />,
  },
  {
    means: "Address",
    detail: "14 Wheeler Close, Dartford, DA1 5UL",
    icon: <TiLocationOutline />,
  },
];

const socials = [
  { link: "#", icon: <FaFacebookF /> },
  { link: "#", icon: <AiFillInstagram /> },
  { link: "#", icon: <FaTwitter /> },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-500 py-3 px-5 rounded-b-4xl hidden md:block">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="w-24">
            <Image
              src="/logo.png"
              alt="Vicfams Logo"
              width={100}
              height={100}
              className="w-full h-auto"
              priority
            />
          </Link>

          {/* Contact Info */}
          <ul className="flex gap-6">
            {contact.map((item) => (
              <li
                key={item.means}
                className="flex items-center gap-3 text-white"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex flex-col">
                  <span className="font-semibold">{item.means}</span>
                  <span className="text-sm">{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <ul className="flex gap-2">
            {socials.map((item, index) => (
              <li
                key={index}
                className="text-white border border-white rounded-full p-2 hover:bg-white hover:text-blue-500 transition"
              >
                <a href={item.link} aria-label="Social link">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-sm py-4 px-5 rounded-b-4xl hidden md:flex justify-between items-center mx-10">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-800 font-semibold hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <GetQuote />
      </nav>
      {/* Mobile NavBar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-2xl  rounded-b-4xl">
        <Link href="/" className="w-28">
          <Image
            src="/logomobile.png"
            alt="Vicfams Logo"
            width={100}
            height={100}
            className="w-full h-auto"
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-gray-600"
        >
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-8 pt-20 flex flex-col gap-10">
          {/* Nav Links */}
          <ul className="flex flex-col gap-6 text-center text-xl font-semibold text-black">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Book Button */}
          <div className="text-center">
            <GetQuote />
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contact.map((item) => (
              <div key={item.means} className="flex items-center gap-4">
                <span className="text-2xl text-blue-500">{item.icon}</span>
                <div>
                  <p className="font-semibold">{item.means}</p>
                  <p className="text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4 justify-center">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="border border-blue-500 rounded-full p-2 text-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

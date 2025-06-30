"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Quick Links",
      links: [
        { href: "/contact-us", label: "Get a Quote" },
        { href: "/services", label: "Our Services" },
        { href: "/contact-us", label: "Contact Us" },
      ],
    },
    {
      title: "Resources",
      links: [
        //{ href: "/faq", label: "FAQs" },
        //{ href: "/blog", label: "Cleaning Tips" },
        { href: "/#testimonials", label: "Customer Reviews" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about-us", label: "About Vicfams" },
        // { href: "/careers", label: "Join Our Team" },
        //{ href: "/privacy-policy", label: "Privacy Policy" },
      ],
    },
  ];

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-black  w-full md:p-20 p-8 space-y-20">
      {/* Top Section */}
      <div className="flex md:flex-row flex-col md:items-start gap-16">
        {/* Left - Branding + Contact */}
        <div className="space-y-5 ">
          <h2 className="font-bold text-4xl sm:text-5xl text-yellow-300 leading-tight">
            Clean Spaces, Happy Faces — That’s the Vicfams Promise.
          </h2>

          <div className="flex gap-4 text-white text-xl">
            <Link href="https://www.linkedin.com" target="_blank">
              <IoLogoLinkedin />
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <IoLogoFacebook />
            </Link>
          </div>

          <div className="text-white space-y-2 text-sm">
            <p>📍 Address: 2 Barnaby Court, Invicta Road. DA2 6AY</p>
            <p>🕒 Hours: Mon - Sat, 8:00 AM - 6:00 PM</p>
            <p>📞 Phone: +447487331247</p>
            <p>📩 Email: Enquiry@vicfams.com</p>
          </div>
        </div>

        {/* Right - Navigation */}
        <div className="w-full hidden md:flex justify-between">
          {sections.map((section) => (
            <div key={section.title} className="text-white text-sm space-y-2">
              <p className="font-semibold">{section.title}</p>
              <ul className="space-y-3 font-medium">
                {section.links.map((link) => (
                  <li key={link.label} className="opacity-90 hover:opacity-100">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="text-white w-full space-y-2 md:hidden">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border-b border-white/20 last:border-none"
            >
              <div
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between py-4 cursor-pointer font-semibold text-lg"
              >
                <span>{section.title}</span>
                <IoChevronDownSharp
                  className={`transition-transform duration-300 ${
                    openSection === section.title ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === section.title
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-3 pb-4">
                  {section.links.map((link) => (
                    <li
                      key={link.label}
                      className="opacity-90 text-base hover:opacity-100"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Logo + Note */}
      <div className="flex flex-col md:flex-row justify-between border-t border-white/10 pt-4 gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
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
          <span className="text-xs text-[#F2F2F2]/80">
            © {new Date().getFullYear()} Vicfams Enterprise. All rights
            reserved.
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#F2F2F2]/80">Made with love ❤️</span>
          <a
            href="mailto:matthewconsult@gmail.com"
            className="text-lg text-[#F2F2F2]/80 hover:underline animate-pulse"
          >
            Contact Developer
          </a>
        </div>
      </div>
    </footer>
  );
}

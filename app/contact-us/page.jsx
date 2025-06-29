"use client";

import NavBar from "@/components/general/NavBar";
import ContactUs from "@/components/home/ContactUs";
import React, { useEffect, useState } from "react";

const page = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [btnOne, setBtnOne] = useState("Copy");
  const [btnTwo, setBtnTwo] = useState("Copy");
  const [btnThree, setBtnThree] = useState("Copy");
  function copyToClipboard(btn, text) {
    navigator.clipboard.writeText(text).then(
      function () {
        if (btn === 1) {
          setBtnOne("Copied!");
        } else if (btn === 2) {
          setBtnTwo("Copied!");
        } else if (btn == 3) {
          setBtnThree("Copied!");
        }
        setTimeout(() => {
          setBtnOne("Copy");
          setBtnTwo("Copy");
          setBtnThree("Copy");
        }, 3000);
      },
      function () {
        console.error("Failed to copy to clipboard.");
      }
    );
  }
  return (
    <div>
      <NavBar />
      <ContactUs />

      <div className="pt-[80px] space-y-5 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-10 ">
        <div className="bg-[#8DE449] md:hidden rounded p-5 space-y-20 ">
          <div className="space-y-5">
            <h3 className="font-bold text-3xl lg:text-5xl">Try on Whatsapp</h3>
            <p className="lg:text-lg">
              Chat live with a trusted consultant from the comfort of your
              WhatsApp
            </p>
          </div>

          <a
            href="https://wa.link/8f8tqt"
            target="_blank"
            rel="noreferrer"
            className="py-3 px-5 text-xl rounded-[100px] bg-[#303030] text-white block w-fit"
          >
            WhatsApp us
          </a>
        </div>
        <div className="bg-blue-50 rounded p-6 md:p-10 space-y-20 ">
          <div className="space-y-5">
            <h3 className="font-bold text-3xl lg:text-5xl">Chat with us</h3>
            <p className="lg:text-lg">
              Connect with a real person anytime – our friendly support team is
              available 24/7. In case we miss you, expect a prompt response
              shortly.
            </p>
          </div>
          <button className="py-3 px-5 text-xl rounded-[100px] bg-[#303030] text-white">
            Chat now
          </button>
        </div>
        <div className="bg-[#8DE449] hidden md:block rounded p-6 md:p-10 space-y-28 ">
          <div className="space-y-5">
            <h3 className="font-bold text-3xl lg:text-5xl">Try on Whatsapp</h3>
            <p className="lg:text-lg">
              Chat live with a trusted consultant from the comfort of your
              WhatsApp
            </p>
          </div>
          <button>
            <a
              href="https://wa.link/qcngyj"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-5 text-xl rounded-[100px] bg-[#303030] text-white"
            >
              WhatsApp us
            </a>
          </button>
        </div>
        <div className="row-span-2 bg-blue-500 text-white text-xl rounded p-6 md:p-10 space-y-10 ">
          <h3 className="font-bold text-3xl lg:text-5xl">More options</h3>
          <div className="w-full h-1 border-t border-[#ffffff75]"></div>

          <div className="flex justify-between items-center">
            <p>Enquiry@vicfams.com</p>
            <button
              onClick={() => copyToClipboard(1, "Enquiry@vicfams.com")}
              className="py-3 px-5 text-xl rounded-[100px] bg-yellow-300 font-semibold text-[#303030]"
            >
              {btnOne}
            </button>
          </div>
          <div className="w-full h-1 border-t border-[#ffffff75]"></div>
          <div className="flex justify-between items-center">
            <p>+447487331247</p>
            <button
              onClick={() => copyToClipboard(2, "+447487331247")}
              className="py-3 px-5 text-xl rounded-[100px] bg-yellow-300 font-semibold text-[#303030]"
            >
              {btnTwo}
            </button>
          </div>
          <div className="w-full h-1 border-t border-[#ffffff75]"></div>
          <div className="flex justify-between items-center">
            <p>14 Wheeler Close, Dartford, DA1 5UL</p>
            <button
              onClick={() =>
                copyToClipboard(3, "14 Wheeler Close, Dartford, DA1 5UL")
              }
              className="py-3 px-5 text-xl rounded-[100px] bg-yellow-300 font-semibold text-[#303030]"
            >
              {btnThree}
            </button>
          </div>
          <div className="w-full h-1 border-t border-[#ffffff75]"></div>
          <p>
            {/* 38, Strouts Way, Sheffield S2 2DD */}
            {/*           
            <br className="md:hidden" /> The Balance, Sheffield,
            <br className="md:hidden" /> South Yorkshire, United Kingdom, S1 2GU */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

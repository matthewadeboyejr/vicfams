import NavBar from "@/components/general/NavBar";
import About from "@/components/home/About";
import ContactUs from "@/components/home/ContactUs";
import OurServices from "@/components/home/OurServices";
import Testimonials from "@/components/home/Testimonials";
import React from "react";

const service = () => {
  return (
    <div>
      <NavBar />
      <OurServices />
      <Testimonials />
    </div>
  );
};

export default service;

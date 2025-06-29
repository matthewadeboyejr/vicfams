"use client";
import About from "@/components/home/About";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import OurServices from "@/components/home/OurServices";
import Testimonials from "@/components/home/Testimonials";
import Why from "@/components/home/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <div className="bg-blue-50">
        <Image
          className="rounded-2xl sm:rounded-3xl lg:rounded-4xl animate-gentle-bounce"
          src="/service-main-bg-shape.png"
          alt="Cleaning and Laundry illustration"
          width={600}
          height={450}
          layout="responsive"
          priority
        />
      </div>
      <OurServices />
      <Why />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

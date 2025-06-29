import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaClock, FaRecycle, FaSmile } from "react-icons/fa";

const reasons = [
  {
    icon: <FaCheckCircle className="text-blue-600 text-xl" />,
    title: "Trusted & Vetted Professionals",
    description:
      "Our team consists of thoroughly vetted experts who take pride in their work.",
  },
  {
    icon: <FaClock className="text-blue-600 text-xl" />,
    title: "Reliable & On-Time",
    description:
      "Punctual and consistent service to keep your schedule running smoothly.",
  },
  {
    icon: <FaRecycle className="text-blue-600 text-xl" />,
    title: "Eco-Friendly Practices",
    description:
      "We use safe, sustainable products that are good for you and the planet.",
  },
  {
    icon: <FaSmile className="text-blue-600 text-xl" />,
    title: "Satisfaction Guaranteed",
    description:
      "We’re not happy until you’re happy — our goal is to exceed expectations.",
  },
];

const WhyChooseVicfams = () => {
  return (
    <section className="bg-white px-4 md:px-12 py-20">
      {/* Top Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500">
          Why Choose Vicfams?
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          We combine professionalism, reliability, and a human touch to give you
          the peace of mind you deserve — at home or in your business space.
        </p>
      </div>

      {/* Content Row */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-auto">
            <Image
              className="rounded-2xl sm:rounded-3xl lg:rounded-4xl animate-gentle-bounce"
              src="/choose-us-thumb.png"
              alt="Why Choose Vicfams"
              width={600}
              height={450}
              layout="responsive"
              priority
            />
          </div>
        </div>

        {/* Right: Reason Cards */}
        <div className="md:w-1/2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3"
              >
                <div className="mt-1">{reason.icon}</div>
                <div>
                  <h4 className="font-semibold text-blue-800">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVicfams;

import Image from "next/image";
import {
  MdHotel,
  MdCleaningServices,
  MdOutlineBedroomParent,
  MdOutlineWifiCalling3,
} from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { FaBroom, FaHandsWash } from "react-icons/fa";
import { GetQuote } from "../general/Btn";

const services = [
  {
    title: "Bedding Rentals for Hosts",
    description:
      "Fitted sheets, pillowcases, quilt covers, towels & linens — fresh, clean, and ready to use.",
    icon: <MdHotel className="text-4xl text-blue-500" />,
    img: "/bed.jpg",
  },
  {
    title: "Professional Cleaning",
    description:
      "Expert cleaning services for Airbnb, offices, serviced apartments, and residences.",
    icon: <MdCleaningServices className="text-4xl text-blue-500" />,
    img: "/cleaning.png",
  },
  {
    title: "End of Tenancy Cleaning",
    description:
      "Deep cleaning before moving in or after moving out — spotless, every time.",
    icon: <GiVacuumCleaner className="text-4xl text-blue-500" />,
    img: "/deep.png",
  },
  {
    title: "Accommodation Setup",
    description:
      "Clean, hygienic bedding setup tailored for short-stay accommodations & rentals.",
    icon: <MdOutlineBedroomParent className="text-4xl text-blue-500" />,
    img: "/setup.png",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Maintain your office and commercial environment with thorough and regular cleaning.",
    icon: <FaBroom className="text-4xl text-blue-500" />,
    img: "/commercial.jpg",
  },
  {
    title: "Laundry Services",
    description:
      "Reliable pickup and delivery of laundered items for hosts, rentals & more.",
    icon: <FaHandsWash className="text-4xl text-blue-500" />,
    img: "/DRYCLEANING.jpg",
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-blue-50">
      <div className="text-center mb-12 px-4 py-10">
        <h2 className="text-4xl font-bold text-blue-500">Our Services</h2>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
          Quality-focused solutions for Airbnb hosts, hotels, homes, and offices
          — all under one reliable team.
        </p>
      </div>

      <div className="flex flex-wrap w-full">
        {services.map((service, index) => (
          <div key={index} className="flex w-full lg:w-1/2">
            {/* Conditional layout */}
            {index % 2 === 0 ? (
              <>
                {/* Image Left */}
                <div className="w-1/2 h-[300px]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text Right */}
                <div className="w-1/2 bg-blue-50 text-black p-6 flex flex-col justify-center">
                  <div className="mb-3 ">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              </>
            ) : (
              <>
                {/* Text Left */}
                <div className="w-1/2 bg-blue-50 text-black p-6 flex flex-col justify-center">
                  <div className="mb-3 ">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm">{service.description}</p>
                </div>
                {/* Image Right */}
                <div className="w-1/2 h-[300px]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center py-10">
        <GetQuote />
      </div>
    </section>
  );
};

export default OurServices;

import Link from "next/link";
import React from "react";

const Btn = ({ action, title }) => {
  return (
    <button
      onClick={action}
      className="bg-primary-color px-6 py-3 sm:px-6 sm:py-4 rounded-full text-white hover:bg-[#0a2477] transition-colors duration-300 text-sm sm:text-base font-medium"
    >
      {title}
    </button>
  );
};

export default Btn;

export const GetQuote = () => {
  return (
    <Link
      href="/contact-us"
      className="bg-yellow-300 px-6 py-3 text-blue-800 font-semibold rounded-full hover:bg-blue-800 hover:text-yellow-400 transition"
    >
      Get Quote
    </Link>
  );
};

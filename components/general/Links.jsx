import Link from "next/link";
import React from "react";

const Links = ({ action, title }) => {
  return (
    <Link
      href={action}
      className="bg-yellow-500 px-6 py-3 sm:px-6 sm:py-4 rounded-full text-blue-800 hover:bg-blue-800 hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base font-semibold"
    >
      {title}
    </Link>
  );
};

export default Links;

"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const reviews = [
    {
      quote:
        "Vicfams has completely changed how I manage my Airbnb turnover. Their bedding is always spotless, and the cleaning is top-notch. I never have to worry about guest complaints anymore!",
      author: "Rachel T.",
      role: "Airbnb Host",
      rating: 5,
    },
    {
      quote:
        "Professional, punctual, and reliable — exactly what my office space needed. The team goes above and beyond to make our environment feel fresh and welcoming every week.",
      author: "James O.",
      role: "Office Manager",
      rating: 5,
    },
    {
      quote:
        "As a short-let apartment manager, Vicfams has been a lifesaver. Their linen rental is affordable and their cleaning service is always on point. Highly recommended!",
      author: "Linda A.",
      role: "Property Manager",
      rating: 4,
    },
    {
      quote:
        "I hired Vicfams for an end-of-tenancy deep clean, and they left the place looking better than when I moved in. They were thorough, fast, and friendly.",
      author: "Chinedu E.",
      role: "Tenant",
      rating: 5,
    },
    {
      quote:
        "The laundry pickup and drop-off service is so convenient. My linens always come back fresh, folded, and ready to go. It’s one less thing I have to worry about.",
      author: "Amaka U.",
      role: "Host",
      rating: 5,
    },
    {
      quote:
        "Their staff is courteous and hardworking. From cleaning to linen delivery, everything is handled with care. I’ve tried a few services before, but Vicfams stands out!",
      author: "Tosin B.",
      role: "Homeowner",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const autoScroll = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
      }, 6000);
    };
    autoScroll();
    return () => clearInterval(intervalRef.current);
  }, [reviews.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 6000);
  };

  const visibleReviews = reviews.slice(activeIndex * 3, activeIndex * 3 + 3);

  return (
    <section className="bg-blue-50 py-20 px-4 md:px-12 rounded-4xl header-overlay">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="uppercase text-white font-semibold">Testimonials</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto mt-4">
          Honest feedback from those we've served — from Airbnb hosts to
          homeowners, businesses, and beyond.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={`${activeIndex}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <FaQuoteLeft className="text-3xl text-blue-600" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">{review.quote}</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-blue-900">{review.author}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {[...Array(Math.ceil(reviews.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

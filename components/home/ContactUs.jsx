"use client";

import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const businessTemplateID = process.env.NEXT_PUBLIC_BUSINESS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const clientTemplateID = process.env.NEXT_PUBLIC_CLIENT_TEMPLATE_ID;

  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`);
    if (hour < 17) timeSlots.push(`${hour}:30`);
  }

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      service: e.target.service.value,
      date: formattedDate,
      time: selectedTime,
      booked_date: new Date().toLocaleString(),
      message: e.target.message.value,
      timestamp: Date.now(),
    };

    try {
      await emailjs.send(serviceID, businessTemplateID, formData, publicKey);
      await emailjs.send(serviceID, clientTemplateID, formData, publicKey);
      setSubmitStatus("success");
      formRef.current.reset();
      setDate(new Date());
      setSelectedTime("");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <section className=" py-20 md:px-12  px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Intro Section */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase text-blue-500 font-semibold tracking-wide">
                Let's Help You
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-snug">
                Get a Quick Quote& <br />
                We will get back to you
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mt-2" />
            </div>

            <p className="text-gray-700 text-lg">
              Whether you're managing a rental, preparing for a move, or need
              regular laundry pickup — we’re here to take care of it. Use the
              form to schedule your preferred date and time.
            </p>

            <div className="flex items-start gap-4">
              <div className="text-yellow-400 text-3xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold text-blue-700">
                  Personalized Service
                </h4>
                <p className="text-sm text-gray-600">
                  Every booking request is handled by our local team with care.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className=" p-4  bg-gray-50">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-8 text-gray-700"
            >
              {/* Floating Input Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent"
                  />
                  <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all">
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent"
                  />
                  <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option value="Airbnb Bedding Rental">
                    Airbnb Bedding Rental
                  </option>
                  <option value="Professional Cleaning">
                    Professional Cleaning
                  </option>
                  <option value="End of Tenancy Cleaning">
                    End of Tenancy Cleaning
                  </option>
                  <option value="Laundry Pickup & Drop">
                    Laundry Pickup & Drop
                  </option>
                  <option value="Commercial Cleaning">
                    Commercial Cleaning
                  </option>
                </select>
                <label className="absolute left-4 top-2 text-gray-500 text-sm">
                  Service Needed
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="flex items-center justify-between w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <span className="text-gray-700">
                      {date.toLocaleDateString()}
                    </span>
                    <FaCalendarAlt className="text-blue-400" />
                  </div>
                  {showCalendar && (
                    <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4">
                      <Calendar
                        onChange={handleDateChange}
                        value={date}
                        minDate={new Date()}
                      />
                    </div>
                  )}
                  <label className="absolute left-4 top-2 text-gray-500 text-sm">
                    Preferred Date
                  </label>
                </div>

                <div className="relative">
                  <select
                    name="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                    className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {parseInt(time) >= 12
                          ? `${
                              parseInt(time) === 12 ? 12 : parseInt(time) - 12
                            }:${time.split(":")[1]} PM`
                          : `${time} AM`}
                      </option>
                    ))}
                  </select>
                  <label className="absolute left-4 top-2 text-gray-500 text-sm">
                    Preferred Time
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows="4"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-transparent"
                />
                <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all">
                  Your Message (Optional)
                </label>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg">
                  Thanks! We've received your request and will get back to you
                  shortly.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-300 hover:bg-blue-700 hover:text-white text-blue-700 font-semibold py-3 px-6 rounded-full transition"
              >
                {isSubmitting ? "Submitting..." : "Get Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

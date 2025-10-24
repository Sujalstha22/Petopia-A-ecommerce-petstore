import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaw,
  FaClock,
} from "react-icons/fa";
import petImage from "../assets/pet-silhouette.png";
// import petImage2 from "../assets/contact-cat.png";

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Paw Pattern */}
      <div className="absolute inset-0 opacity-10 paw-pattern"></div>

      <div className="container mx-auto relative z-10 px-6 md:px-16 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <section className="relative h-100 bg-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-lg overflow-hidden">
            {/* Text Content */}
            <div
              className="absolute -z-0 w-30 h-30 md:w-30 md:h-30 bg-gradient-to-br from-orange-400 to-orange-200 flex items-end justify-center rounded-[50%_40%_55%_45%] 
                  clip-path-[polygon(30%_0%,_70%_0%,_100%_40%,_80%_100%,_20%_100%,_0%_40%)]  -top-10 right-200"
            ></div>
            <div
              className="absolute -z-0 w-30 h-30 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-orange-200 flex items-end justify-center rounded-[50%_40%_55%_45%] 
                  clip-path-[polygon(30%_0%,_70%_0%,_100%_40%,_80%_100%,_20%_100%,_0%_40%)]  -bottom-10 left-70"
            ></div>
            {/* <div className="absolute w-30 h-30 md:w-120 md:h-120 top-60 right-120">
              <img src={petImage2} alt="cat-silloute" />
            </div> */}
            <div className="text-left ml-10 md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-gray-700 text-3xl md:text-4xl font-bold mb-4">
                If animals could talk, <br /> they’d talk about us!
              </h2>
              <p className="text-gray-600 mb-6">
                From nutritious food to fun toys, we have everything your furry
                friend needs to stay happy and healthy.
              </p>
              <button className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                Shop Now
              </button>
            </div>

            {/* Image */}
            <div className=" absolute -bottom-10 right-30 :w-1/2 flex justify-center">
              <div
                className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-orange-400 to-orange-200 flex items-end justify-center rounded-[50%_40%_55%_45%] 
                  clip-path-[polygon(30%_0%,_70%_0%,_100%_40%,_80%_100%,_20%_100%,_0%_40%)]"
              >
                <img
                  src={petImage}
                  alt="Pet Silhouette"
                  className="absolute bottom-0 w-80 h-80 md:w-96 md:h-96 object-contain"
                />
                {/* Optional paw prints background */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <span className="absolute top-4 left-4 text-white text-2xl">
                    🐾
                  </span>
                  <span className="absolute bottom-6 right-6 text-white text-2xl">
                    🐾
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-[#f7f7f7] shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-[Staatliches] text-gray-800 mb-6 flex items-center gap-2">
              <FaPaw className="text-[#ff914d]" /> Send Us a Message
            </h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#fffaf5] border border-[#ffd6b5] rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff914d]"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#fffaf5] border border-[#ffd6b5] rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff914d]"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Message</label>
                <textarea
                  placeholder="Type your message..."
                  rows="4"
                  className="w-full bg-[#fffaf5] border border-[#ffd6b5] rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff914d]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#ff914d] hover:bg-[#ff7b2e] hover:scale-105 hover:shadow-lg transition duration-300 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <FaPaw className="animate-pulse" /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center rounded-2xl p-8 text-gray-600 text-base md:text-lg">
            <h2 className="font-[Staatliches] text-4xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <FaPaw className="text-[#ff914d]" /> Get in Touch
            </h2>
            <p className="mb-6 text-sm md:text-base">
              We’d love to hear from fellow pet lovers! Whether you have
              questions about our products, need advice for your furry friend,
              or want to share your pet stories, our team is here to help. Get
              in touch, and we’ll respond as quickly as a wagging tail.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-[#ff914d] text-2xl" />
              <p>
                <strong>Petopia HQ, Bakhundol, Lalitpur, Nepal</strong>
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-[#ff914d] text-2xl" />
              <p>
                <strong>+977-9801234567</strong>
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-[#ff914d] text-2xl" />
              <p>
                <strong>support@petopia.com</strong>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaClock className="text-[#ff914d] text-2xl" />
              <p>
                <strong>
                  Mon – Fri: 9:00 AM – 8:00 PM <br />
                  Sat – Sun: 10:00 AM – 6:00 PM
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 overflow-hidden shadow-md rounded-2xl">
          <iframe
            className="w-full h-80 rounded-2xl"
            title="Petopia Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.684094760282!2d85.32205887497396!3d27.695276676197437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fdb12f9ac3%3A0x53682a3e3a4b7073!2sLalitpur%20Metropolitan%20City!5e0!3m2!1sen!2snp!4v1696782922210!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .paw-pattern {
          background-image: radial-gradient(rgba(255, 145, 77, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow { animation: bounceSlow 3s infinite ease-in-out; }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow { animation: floatSlow 5s infinite ease-in-out; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float 3.5s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default Contact;

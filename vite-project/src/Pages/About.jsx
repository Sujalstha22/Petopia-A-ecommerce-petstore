import React from "react";
import { motion } from "framer-motion";
import pets from "../assets/pets.jpeg";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import paw from "../assets/paw.png";
import petImage from "../assets/pet-silhouette.png";
const About = () => {
  return (
    <div className=" min-h-screen overflow-hidden">
      {/* Floating Paw Background Animation */}
      <motion.img
        src={paw}
        alt="paw"
        className="absolute top-10 left-10 w-12 opacity-20"
        animate={{ y: [0, 15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={paw}
        alt="paw"
        className="absolute bottom-10 right-10 w-12 opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          className="text-5xl font-staatliches text-[#7f1d1d] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About PetoPia
        </motion.h1>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At <span className="text-[#7f1d1d] font-semibold">PetoPia</span>, we
          believe every pet deserves love, care, and the best products to live a
          happy life. From tasty treats to comfy beds — we bring everything your
          furry friends need, under one paw-some roof.
        </motion.p>
      </section>

      {/* Our Story Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-10 md:px-20 py-10">
        <motion.img
          src={pets}
          alt="Pets together"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-staatliches text-[#7f1d1d] mb-3">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Peto Pia began as a small dream shared by animal lovers who wanted
            to make pet care simple, fun, and accessible. What started in a cozy
            home garage has grown into a trusted brand loved by pet parents
            everywhere. We’re proud to be your go-to destination for all things
            furry, feathery, and fin-tastic!
          </p>
        </motion.div>
      </section>

      <div className="container relative z-10 px-6 md:px-16 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <section className="relative h-100 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between rounded-xl ">
            {/* Text Content */}
            <div className="absolute -z-0 w-30 h-30 md:w-30 md:h-30 -top-10 right-200"></div>
            <div className="text-left ml-10 md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-black text-5xl md:text-5xl font-bold mb-4">
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
            <div className=" absolute bottom-0 right-30 :w-1/2 flex justify-center">
              <div
                className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-orange-400 to-orange-200 flex items-end justify-center rounded-[50%_40%_55%_45%] 
                  clip-path-[polygon(30%_0%,_70%_0%,_100%_40%,_80%_100%,_20%_100%,_0%_40%)]"
              >
                <div
                  className=" w-35 h-35 md:w-72 md:h-72 bg-gradient-to-br from-orange-200 to-orange-500 flex items-end justify-center rounded-[50%_40%_55%_45%] 
                  clip-path-[polygon(30%_0%,_70%_0%,_100%_40%,_80%_100%,_20%_100%,_0%_40%)]"
                >
                  {" "}
                </div>
                <img
                  src={petImage}
                  alt="Pet Silhouette"
                  className="absolute -bottom-10 w-90 h-90 md:w-120 md:h-120 object-contain"
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
        {/* Our Mission Section */}
        <section className="text-center py-16 bg-[#7f1d1d] text-white">
          <motion.h2
            className="text-3xl font-staatliches mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We aim to create a happier world for pets by providing top-quality
            products, supporting adoption initiatives, and spreading awareness
            on proper pet care — because pets aren’t just animals, they’re
            family.
          </motion.p>
        </section>

        {/* Meet Our Team */}
        <section className="py-16 px-10 md:px-20 text-center">
          <motion.h2
            className="text-3xl font-staatliches text-[#7f1d1d] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Sagar", img: team1, role: "Founder" },
              { name: "Bibhushan", img: team2, role: "Pet Nutritionist" },
              { name: "Sujal", img: pets, role: "Product Manager" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-2"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-staatliches text-[#7f1d1d]">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Paw Animation */}
        <motion.div
          className="flex justify-center py-10"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={paw} alt="paw" className="w-10 opacity-40" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

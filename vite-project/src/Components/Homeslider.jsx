import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Style.css";
import package1 from "../assets/PuppyPackage.jpg";
import package2 from "../assets/Paw-some2.png";
import package3 from "../assets/Paw-some3.png";

const Homeslider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-7xl mx-auto">
            {/* Left side - image */}
            <div className="flex-shrink-0 w-1/2 p-6 flex justify-center items-center">
              <img
                src={package1}
                alt="Puppy Package"
                className="rounded-lg max-h-100 object-contain"
              />
            </div>

            {/* Right side - text content */}
            <div className="w-1/2 p-6 flex flex-col justify-center text-left">
              <h1 className="text-3xl text-black font-bold mb-4 font-[Staatliches]">
                Paw-some Package-I
              </h1>
              <p className="text-gray-700 mb-4">
                Paw-some Package for your new pups! 🎁🐶 <br />
                We have put together a list of all the necessary items that a
                new puppy parent requires. What's inside the puppy package?
                Let's have a look.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Red dog chew toy with tassel</li>
                <li>Blue and purple dog balls</li>
                <li> Packet of “Monster Munch” dog treats</li>
                <li>Dog collar and leash (brown + grey) </li>
                <li>Dog bed (blue)</li>
              </ul>

              <button className="w-40 bg-gray-900 text-white px-6 py-2 rounded-lg font-[Staatliches] font-semibold hover:bg-gray-500 transition">
                ORDER NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-7xl mx-auto">
            {/* Left side - image */}
            <div className="flex-shrink-0 w-1/2 p-6 flex justify-center items-center">
              <img
                src={package2}
                alt="Puppy Package"
                className="rounded-lg max-h-100 object-cover"
              />
            </div>

            {/* Right side - text content */}
            <div className="w-1/2 p-6 flex flex-col justify-center text-left">
              <h1 className="text-3xl text-black font-bold mb-4 font-[Staatliches]">
                Paw-Some Package-II
              </h1>
              <p className="text-gray-700 mb-4">
                Everything your furry friend needs to stay happy, healthy, and
                full of tail wags! Perfect for new pet parents or as a special
                treat for your pup.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Crunchy Paw Treats</li>
                <li>Cozy Pup Blanket</li>
                <li> Squeaky Bone Toy </li>
                <li>No-Tangle Leash </li>
                <li>Hydra-Pup Bottle</li>
              </ul>

              <button className="w-40 bg-gray-900 text-white px-6 py-2 rounded-lg font-[Staatliches] font-semibold hover:bg-gray-500 transition">
                ORDER NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-7xl mx-auto">
            {/* Left side - image */}
            <div className="flex-shrink-0 w-1/2 p-6 flex justify-center items-center">
              <img
                src={package3}
                alt="Puppy Package"
                className="rounded-lg max-h-100 object-cover"
              />
            </div>

            {/* Right side - text content */}
            <div className="w-1/2 p-6 flex flex-col justify-center text-left">
              <h1 className="text-3xl text-black font-bold mb-4 font-[Staatliches]">
                Paw-Some Package-III
              </h1>
              <p className="text-gray-700 mb-4">
                The perfect starter kit for your furry buddy! 🎁🐶 This Pawsome
                Package includes all the fun and essential items to keep your
                pet happy, playful, and cared for.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Food/Water Bowl</li>
                <li>Cat Leash</li>
                <li>MIce Toy </li>
                <li>Wollen ball </li>
                <li>Chicky treats</li>
              </ul>

              <button className="w-40 bg-gray-900 text-white px-6 py-2 rounded-lg font-[Staatliches] font-semibold hover:bg-gray-500 transition">
                ORDER NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Homeslider;

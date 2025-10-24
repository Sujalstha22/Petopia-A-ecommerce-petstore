import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import p1 from "../../assets/product.jpg";
import p2 from "../../assets/product-alt.jpg";
import p3 from "../../assets/product-alt-1.jpg";

const ProductZoom = () => {
  const images = [p1, p2, p3, p2, p1];
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
      {/* === Thumbnails (Vertical Swiper) === */}
      <div className="w-full md:w-[20%] md:h-[450px] flex md:flex-col">
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          className="thumbnail-swiper h-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => setMainImg(img)}
                className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                  mainImg === img
                    ? "border-orange-500"
                    : "border-transparent hover:border-orange-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="object-cover w-full h-[100px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Main Zoom Image === */}
      <div className="zoomContainer w-full md:w-[75%] aspect-square overflow-hidden rounded-xl border border-orange-100 shadow-sm bg-white">
        <InnerImageZoom
          key={mainImg}
          src={mainImg}
          zoomType="hover"
          zoomScale={1}
          alt="Product image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductZoom;

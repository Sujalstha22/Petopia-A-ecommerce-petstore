import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Rating from "@mui/material/Rating";
import { Button, IconButton } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { FaPaw } from "react-icons/fa";
import ProductZoom from "../Components/ProductZoom";
import ProductSlider from "../Components/productSlider/ProductSlider";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([
    {
      name: "Sujal Shrestha",
      rating: 5,
      comment: "My dog loves this food! Very nutritious and tasty.",
      date: "2025-10-18",
    },
    {
      name: "Priya Khatri",
      rating: 4,
      comment: "Good quality, but wish it came in smaller packs for trial.",
      date: "2025-10-15",
    },
  ]);

  const handleQuantityChange = (type) => {
    if (type === "inc") setQuantity((prev) => prev + 1);
    if (type === "dec" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment || newReview.rating === 0) return;
    setReviews((prev) => [
      { ...newReview, date: new Date().toISOString().split("T")[0] },
      ...prev,
    ]);
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  const averageRating =
    reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length || 0;

  return (
    <>
      {/* === Breadcrumbs === */}
      <div className="px-2 ml-4">
        <div className="container ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              to="/"
              className="flex items-center gap-1 text-gray-700 font-[Poppins] hover:text-orange-600"
            >
              <HomeIcon sx={{ fontSize: 18 }} />
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 font-[Poppins] hover:text-orange-600"
            >
              Shop
            </Link>
            <span className="text-orange-600 font-[Poppins]">Dog Food</span>
          </Breadcrumbs>
        </div>
      </div>

      {/* === Product Section === */}
      <section className="py-10 mt-0 ml-10">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-10 px-4">
          {/* === Left: Product Image Zoom === */}
          <div className="w-full md:w-[40%] rounded-2xl shadow-md p-4">
            <ProductZoom />
          </div>

          {/* === Right: Product Info === */}
          <div className="w-full md:w-[55%] rounded-2xl bg-white p-8 relative overflow-hidden">
            <div className="absolute top-5 right-10 text-orange-100 text-7xl rotate-12">
              <FaPaw />
            </div>

            <h2 className="text-3xl font-bold font-[Poppins] text-gray-900 mb-2">
              Premium Chicken Dog Food
            </h2>
            <p className="text-gray-500 mb-3 font-[Poppins]">
              Healthy, delicious & vet-approved nutrition for happy tails 🐕
            </p>

            <div className="flex items-center gap-2 mb-4">
              <Rating value={averageRating} precision={0.1} readOnly />
              <p className="text-sm text-gray-500">
                ({reviews.length} review{reviews.length > 1 ? "s" : ""})
              </p>
            </div>

            <p className="text-3xl font-semibold text-orange-600 mb-2">
              NPR 1,499
            </p>
            <p className="text-sm text-gray-400 mb-5">Inclusive of all taxes</p>

            <p className="text-gray-700 leading-relaxed mb-6 font-[Poppins]">
              Give your furry friend the nutrition they deserve! This **Premium
              Chicken Dog Food** is made with real chicken, wholesome grains,
              and natural vitamins for strong bones, shiny fur, and boundless
              energy. Ideal for adult dogs of all breeds.
            </p>

            <ul className="list-disc ml-6 text-gray-700 mb-6 font-[Poppins] text-[15px]">
              <li>Rich in protein & essential fatty acids</li>
              <li>Promotes healthy digestion</li>
              <li>No artificial colors or preservatives</li>
              <li>Perfect for daily meals or treats</li>
            </ul>

            {/* === Quantity Selector === */}
            <div className="flex items-center gap-3 mb-6">
              <p className="font-semibold text-gray-800 font-[Poppins]">
                Quantity:
              </p>
              <div className="flex items-center border border-orange-300 rounded-md overflow-hidden">
                <button
                  className="px-3 py-1 bg-orange-100 hover:bg-orange-200 text-orange-600 font-bold"
                  onClick={() => handleQuantityChange("dec")}
                >
                  -
                </button>
                <span className="px-4 py-1 bg-white text-gray-800">
                  {quantity}
                </span>
                <button
                  className="px-3 py-1 bg-orange-100 hover:bg-orange-200 text-orange-600 font-bold"
                  onClick={() => handleQuantityChange("inc")}
                >
                  +
                </button>
              </div>
            </div>

            {/* === Action Buttons === */}
            <div className="flex items-center gap-4">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ea580c",
                  "&:hover": { backgroundColor: "#c2410c" },
                  borderRadius: "30px",
                  padding: "10px 24px",
                  fontFamily: "Poppins",
                  textTransform: "none",
                }}
              >
                🐾 Add to Cart
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#ea580c",
                  color: "#ea580c",
                  "&:hover": { backgroundColor: "#fff5ec" },
                  borderRadius: "30px",
                  padding: "10px 24px",
                  fontFamily: "Poppins",
                  textTransform: "none",
                }}
              >
                Buy Now
              </Button>

              <IconButton>
                <CiHeart
                  size={26}
                  className="text-gray-600 hover:text-red-500 transition-all"
                />
              </IconButton>
            </div>
          </div>
        </div>
      </section>

      {/* === Product Details Section === */}
      <section className="py-2 bg-white mt-0 m-10 rounded-2xl">
        <div className="container mx-auto px-4 p-8">
          <h3 className="text-2xl font-semibold font-[Poppins] text-orange-700 mb-3">
            🦴 Product Details
          </h3>
          <p className="text-gray-700 leading-relaxed font-[Poppins] mb-4">
            This **Premium Chicken Dog Food** is formulated by veterinary
            experts to ensure your pet receives complete and balanced nutrition.
            It’s enriched with Omega 3 & 6 for a glossy coat and prebiotics to
            support gut health.
          </p>

          <div className="grid md:grid-cols-2 gap-6 font-[Poppins] text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>Brand: Paws & Whiskers</li>
              <li>Weight: 5kg pack</li>
              <li>Suitable for: Adult Dogs</li>
              <li>Flavor: Chicken & Rice</li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>Rich in protein (26%)</li>
              <li>Added calcium for stronger bones</li>
              <li>Store in a cool, dry place</li>
              <li>Best before: 12 months from Mfg.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Reviews Section === */}
      <section className="p-5 mt-0 m-10 rounded-md w-[75%] bg-white relative">
        <div className="container mx-auto px-4 p-8">
          <h3 className="text-2xl font-semibold font-[Poppins] text-orange-700 mb-4">
            🐾 Customer Reviews
          </h3>

          {/* Average Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Rating value={averageRating} precision={0.1} readOnly />
            <span className="text-gray-500">
              ({reviews.length} review{reviews.length > 1 ? "s" : ""})
            </span>
          </div>

          {/* Review List */}
          <div className="relative mb-8">
            <div className="max-h-72 overflow-y-auto pr-2 scroll-smooth">
              {reviews.map((rev, idx) => (
                <div key={idx} className="border-b pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-800">{rev.name}</h4>
                    <Rating
                      value={rev.rating}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                  </div>
                  <span className="text-gray-400 text-sm">{rev.date}</span>
                  <p className="text-gray-700 mt-2">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Review Form */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Leave a Review
            </h4>
            <form className="flex flex-col gap-4" onSubmit={handleReviewSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
              />
              <textarea
                rows="4"
                placeholder="Your Review"
                className="w-full border border-gray-300 text-gray-800 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
              ></textarea>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Rating:</span>
                <Rating
                  value={newReview.rating}
                  onChange={(e, val) =>
                    setNewReview({ ...newReview, rating: val })
                  }
                  precision={0.5}
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mt-2 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* === Related Products Section === */}
      <section className="m-10">
        <h2 className="text-2xl font-semibold font-[Poppins] text-orange-700 mb-4">
          You May also like
        </h2>
        <ProductSlider items={5} />
      </section>
    </>
  );
};

export default ProductDetails;

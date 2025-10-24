import React from "react";
import { Link } from "react-router-dom";
import p1 from "../../assets/product.jpg"; // main image
import p2 from "../../assets/product-alt.jpg"; // alternate hover image
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: grey[900],
  },
}));

const ProductItemList = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <div className="productitem group w-full rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
      <Link
        to="/"
        className="flex flex-row relative items-center w-full h-full  sm:p-4"
      >
        {/* Image Wrapper */}
        <div className="imgWrapper relative w-[200px] h-[200px] flex-shrink-0 overflow-hidden rounded-md">
          {/* Main Image */}
          <img
            src={p1}
            alt="Himalayan Healthy Pet Food"
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

          {/* Alternate Image (shows on hover) */}
          <img
            src={p2}
            alt="Alternate product view"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Action Button */}
          <div className="actions absolute top-2 right-2 opacity-0 transform translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <IconButton
              sx={{
                color: "#7f1d1d",
                transition: "0.3s",
                "&:hover": {
                  color: "#b91c1c",
                  backgroundColor: "rgba(185,28,28,0.1)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <CiHeart size={22} />
            </IconButton>
          </div>
        </div>

        {/* Info Section */}
        <div className="info flex-1 min-w-0 pl-4">
          <h6 className="text-sm text-gray-600 mb-1">Himalayan</h6>
          <h3 className="poppins-regular text-lg font-medium mb-1 line-clamp-2">
            Himalayan Healthy Pet Food 3-Kg Puppy
          </h3>

          <Rating
            name="half-rating"
            defaultValue={4.5}
            precision={0.5}
            size="small"
            readOnly
          />

          <div className="flex items-center gap-3 mt-2">
            <span className="poppins-regular-italic oldPrice line-through text-gray-500 text-sm">
              Rs. 1200
            </span>
            <span className="poppins-bold newPrice text-primary font-bold text-[15px]">
              Rs. 980
            </span>
          </div>

          <p className="text-gray-600 text-sm mt-3 line-clamp-2">
            Premium quality pet food made from natural Himalayan ingredients for
            your puppy’s health and growth.
          </p>
          <div className="m-3">
            <Tooltip>
              <ColorButton
                onClick={() => setLoading(true)}
                loading={loading}
                size="small"
              >
                <ShoppingCartIcon /> Add to Cart
              </ColorButton>
            </Tooltip>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItemList;

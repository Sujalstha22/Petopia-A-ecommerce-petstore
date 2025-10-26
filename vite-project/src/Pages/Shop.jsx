import React, { useState } from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";
import ProductItem from "../Components/ProductItem/ProductItem";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsFillGridFill } from "react-icons/bs";
import { GrUnorderedList } from "react-icons/gr";
import ProductItemList from "../Components/ProductItem/ProductItemList";
import Sidebar from "../Components/Sidebar/Index";
import "./style.css";

import { styled } from "@mui/material";
const Shop = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="p-5 ml-5">
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
          }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 1 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
          }}
          color="inherit"
          href="/shop"
        >
          Shop
        </Link>
      </Breadcrumbs>

      {/* Main Section */}
      <section className="py-3">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-1/5 min-w-[200px] sticky top-0s">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="main-content flex-1 w-[80%]">
            <div className="bg-white w-full mb-4 p-2 rounded-md flex items-center justify-between">
              <div className="clo1 flex items-center gap-0 itemViewActions">
                <Button
                  className={`!w-[40px] !h-[40px] rounded-full} ${
                    itemView === "grid" && "active"
                  }`}
                  onClick={() => {
                    setItemView("grid");
                  }}
                >
                  {" "}
                  <BsFillGridFill />{" "}
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] rounded-full} ${
                    itemView === "list" && "active"
                  }`}
                  onClick={() => {
                    setItemView("list");
                  }}
                >
                  {" "}
                  <GrUnorderedList />{" "}
                </Button>
                <p className="!poppins-regular text-[rgba(0,0,0,0.7)]">
                  There are 7 products
                </p>
              </div>
              <div className="col2 flex items-center justify-end mr-5 gap-3">
                <p className="poppins-semibold  text-black p-2 ">SortBy:</p>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="poppins-bold !bg-gray-100 !text-[13px] !text-black !font-bold !border-2 border-black "
                >
                  Price Low to high
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                  <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                  <MenuItem onClick={handleClose}>Price high to low </MenuItem>
                </Menu>
              </div>
            </div>
            {/* <h2 className="text-2xl font-semibold text-black mb-3">
              Shop by Tails
            </h2> */}
            <div
              className={
                itemView === "grid"
                  ? "grid grid-cols-4 gap-4"
                  : "flex flex-col gap-4 w-full"
              }
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemList />
                  <ProductItemList />
                  <ProductItemList />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

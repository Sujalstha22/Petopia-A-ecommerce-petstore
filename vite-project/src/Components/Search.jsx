import React from "react";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-white rounded-[25px] relative p-2">
      <input
        type="text"
        placeholder="Search for products.."
        className="w-full h-[35px] focus:outline-none bg-inherit p-4 text-[15px] text-black"
      />
      <Button className="!absolute top-[8px] right-[8px] z-50  h-[35px] !rounded-full !min-w-[35px]">
        <FaSearch className="text-black" />
      </Button>
    </div>
  );
};

export default Search;

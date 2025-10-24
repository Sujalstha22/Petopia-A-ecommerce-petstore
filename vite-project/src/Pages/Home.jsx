import * as React from "react";
import dog from "../assets/circle2.jpg";
import dog1 from "../assets/circle.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/circle.png";
import SbP_dog from "../assets/dog.jpg";
import SbP_fish from "../assets/FISH.png";
import SbP_cat from "../assets/CAT.png";
import SbP_bird from "../assets/SBPbird.jpg";
import Testimonial from "../assets/testimonials.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../index.css";
import { styled } from "@mui/material";
import Homeslider from "../Components/Homeslider";
import Adslider from "../Components/Adslider";
import ProductSlider from "../Components/productSlider/ProductSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomButton = styled(Button)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textTransform: "none",
    padding: "16px",
    color: "black",
    "& h1": {
      marginTop: "10px",
      fontSize: "25px",
    },
  }));
  return (
    <div className="bg-orange-100">
      <div className="relative  px-4 py-10">
        <div className="absolute top-10 right-30 z-0">
          <img
            src={dog1}
            alt="pet 1"
            className="rounded-full float-right border-4 border-white w-55 h-55 object-cover"
          />
        </div>
        <div className="absolute top-70 left-40 z-0">
          <img
            src={dog2}
            className="rounded-full border-[6px] border-blue-300 w-55 h-55 object-cover"
          />
        </div>
        <div className="absolute top-0 left-90 z-0">
          <img
            src={dog}
            className="rounded-full border-[6px] border-red-300 w-40 h-40 object-cover"
          />
        </div>

        <div className="absolute top-100 right-70 z-0">
          <img
            src={dog3}
            className="rounded-full border-[6px] border-purple-300 w-40 h-40 object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-extrabold text-red-900 leading-tight mb-6">
            Where Every <br /> Pet's Joy Begins!
          </h1>

          <p className=" poppins-regular text-xl max-w-2xl mx-auto text-blue-900 mb-8 leading-relaxed">
            We know your pets are cherished members of your family. That’s why
            we provide loving, personalized pet sitting services tailored to
            their needs.
          </p>

          <button className="bg-orange-400 text-xl font-[Staatliches] text-black font-semibold cursor-pointer px-6 py-3 rounded-md shadow-sm hover:text-white hover:bg-orange-500 transition-colors duration-300">
            BROWSE PRODUCTS
          </button>
        </div>
      </div>
      <div>
        <Adslider />
      </div>
      <div>
        <h1 className="text-center text-orange-900 text-6xl py-10">
          Shop by pet
        </h1>
        <div>
          <Stack
            direction="row"
            spacing={5}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              "& .MuiAvatar-root": {
                width: "200px",
                height: "200px",
              },
            }}
          >
            <CustomButton>
              <Avatar alt="SbP_dog" src={SbP_dog} />
              <h1>DOG</h1>
            </CustomButton>

            <CustomButton>
              <Avatar alt="SbP_cat" src={SbP_cat} />
              <h1>CAT</h1>
            </CustomButton>
            <CustomButton>
              <Avatar alt="SbP_Fish" src={SbP_fish} />
              <h1>Fish</h1>
            </CustomButton>
            <CustomButton>
              <Avatar alt="Sbp_Bird" src={SbP_bird} />
              <h1>Bird</h1>
            </CustomButton>
          </Stack>
        </div>
      </div>
      <div className="flex bg-red-900 px-80px py-64px flex-col align-center items-center-safe ">
        <h1 className="text-5xl text-center mt-15 mb-10">Explore Packages</h1>
        <Homeslider />
        <button className="bg-white w-54 text-xl justify-center font-[Staatliches] text-black font-semibold cursor-pointer px-6 py-3 m-5 rounded-md shadow-sm ">
          SEE ALL PACKAGES
        </button>
      </div>
      <div>
        <h1 className="text-center text-orange-900 text-6xl py-10">
          Happy Tails at Petopia
        </h1>
        <img src={Testimonial} className="w-7xl mx-30" />
      </div>
      {/* petopia picks section */}
      <section className="bg-red-900 mt-10 p-10 items-center-safe">
        <div className="container flex justify-between">
          <h1 className="text-5xl text-center"> Petopia Picks </h1>
          <div className="categorySlider">
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 480 },
                bgcolor: "#82181a",
                "& .MuiTab-root": { color: "white" }, // Default
                "& .Mui-selected": { color: "yellow !important" }, // Active tab (optional)
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Dog" />
                <Tab label="Cat" />
                <Tab label="Fish" />
                <Tab label="Bird" />
              </Tabs>
            </Box>
          </div>
        </div>

        <ProductSlider items={5} />
      </section>
    </div>
  );
};

export default Home;

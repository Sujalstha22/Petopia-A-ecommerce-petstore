import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { FaPaw } from "react-icons/fa";
import "./Style.css";
import { Link } from "react-router-dom";
const BpIcon = styled("span")(({ theme }) => ({
  marginLeft: 5,
  borderRadius: "50%",
  width: 10,
  height: 10,
  backgroundColor: "#f5f8fa",
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
    ...theme.applyStyles("dark", {
      backgroundColor: "#30404d",
    }),
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
const SidebarCategories = () => {
  return (
    <div className="sidebar-box w-[250px]">
      <h2 className="mb-3">
        <FaPaw className="text-red-800" /> Shop by Tails
      </h2>

      {/* Pet Food */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className="flex items-center">Pet Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="space-y-2">
            <Link
              to="/dogfood"
              className="flex items-center gap-2 cursor-pointer hover:text-red-700"
            >
              Dog Food
            </Link>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-700">
              Cat Food
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-700">
              Bird Food
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      {/* Accessories */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className="flex items-center">Accessories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-700">
              Leashes
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-700">
              Toys
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-700">
              Bowls
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      {/* Healthcare */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className="flex items-center">Healthcare</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-700">
              Supplements
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-700">
              Medicines
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-red-700">
              Grooming
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <div>
        <div className="flex items-left">
          <h2 className="mt-3 mb-3 ">
            <FaPaw className="text-red-800" /> Avaibility
          </h2>{" "}
        </div>
        <FormControl>
          <RadioGroup
            defaultValue="Available"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
          >
            <FormControlLabel
              className="label"
              value="Available"
              control={<BpRadio />}
              label="Available"
            />
            <FormControlLabel
              className="label"
              value="Out of Stock"
              control={<BpRadio />}
              label="Out of Stock"
            />
            <FormControlLabel
              className="label"
              value="All"
              control={<BpRadio />}
              label="All"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default SidebarCategories;

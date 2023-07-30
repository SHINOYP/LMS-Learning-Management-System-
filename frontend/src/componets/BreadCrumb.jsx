import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs(props) {
  return (
    <div
      role="presentation"
      className="m-4  text-font-black "
      onClick={handleClick}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          to="/Dashboard"
          className="hover:text-black hover:font-black"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Dashboard
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          to="/Courses"
          className="hover:text-black hover:font-black"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Courses
        </Link>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Course Details
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

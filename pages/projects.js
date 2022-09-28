import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer, NavBar, Projects } from "../components";
import { FaArrowLeft } from "react-icons/fa";
// import { ResponsiveNavbar } from "../components/Navbar";
import { FaStar, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import projects from "../data/projects";
import usersInfo from "../data/usersInfo";

const Projectss = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-[80%] mx-auto">
        <Projects />
      </div>

      <Footer />
    </>
  );
};
export default Projectss;

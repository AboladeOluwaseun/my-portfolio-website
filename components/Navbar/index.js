import React, { useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from "react-icons";
import socials from "../../data/socials";
import Image from "next/image";
import logo from "../../public/images/avatar/logo.png";
import { motion } from "framer-motion";
import {
  childVariant,
  imageVariant,
  LinksVariant,
  containerVariant,
} from "./motion";
import ResponsiveNav from "./ResponsiveNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksArray = [
    { name: "Home", address: "/" },
    { name: "About", address: "/#about" },
    { name: "Projects", address: "/projects" },
    { name: "Contact", address: "#contact" },
    { name: "Blogs", address: "#blog" },
  ];

  const links = linksArray.map((link, index) => {
    return (
      <motion.li
        key={index}
        className={`transition-all ease-in-out duration-[500ms] relative hover:text-yellow hover:font-extrabold cursor-pointer text-[1rem] after:content-[""] after:absolute after:left-0 after:bottom-[-25%] after:w-[0%] after:h-[3px] after:rounded-[20px] after:bg-yellow after:transition-all after:duration-[500ms] after:ease-in-out hover:after:w-[100%]  `}
      >
        <Link href={link.address}>{link.name}</Link>
      </motion.li>
    );
  });

  const filteredSocials = socials.filter((social) => {
    if (
      social.name === "twitter" ||
      social.name === "github" ||
      social.name === "linkedIn"
    ) {
      return social;
    }
  });

  const socialIcons = filteredSocials.map((social, index) => {
    return (
      <Link href={social.link} key={index}>
        <motion.a
          whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
          whileHover={{ scale: 1.4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 400 }}
          className="relative"
          target="_blank"
          title={social.name}
          href={social.link}
        >
          <p className="absolute hidden hover:visible text-white-100">
            {social.name}
          </p>
          <Image src={social.image} width={25} height={25} alt={social.name} />
        </motion.a>
      </Link>
    );
  });

  return (
    <>
      <div
        className={`flex items-center justify-between py-10 max-w-[90%] mx-auto`}
      >
        <motion.div
          variants={imageVariant}
          whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
          initial="hidden"
          animate="visible"
        >
          <Image width={150} height={30} src={logo} />
        </motion.div>

        <motion.ul
          variants={LinksVariant}
          whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
          initial="hidden"
          animate="visible"
          className={`hidden lmd:flex  items-center space-x-8`}
        >
          {links}
        </motion.ul>

        <motion.ul
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className={"flex space-x-2"}
        >
          {socialIcons}
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className="lmd:hidden"
          >
            <IconContext.Provider
              value={{
                color: "#f9af20",
                size: "2rem",
                style: { marginTop: -5, cursor: "pointer" },
              }}
            >
              <BiMenuAltRight />
            </IconContext.Provider>
          </div>
          <ResponsiveNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.ul>
      </div>
    </>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from "react-icons";
import usersInfo from "../../data/usersInfo.json";
import { socials } from "../../data/socials.json";
import Image from "next/image";
import logo from "../../public/images/avatar/logo.png";

function NavBar() {
  const links = [
    { name: "Home", address: "/" },
    { name: "About", address: "/about" },
    { name: "Projects", address: "/projects" },
    { name: "Contact", address: "#contact" },
  ];

  const nav = links.map((link) => {
    return (
      <li
        className={`transition-all ease-in-out duration-[500ms] relative hover:text-yellow hover:font-extrabold cursor-pointer text-[1.2rem] after:content-[""] after:absolute after:left-0 after:bottom-[-25%] after:w-[0%] after:h-[3px] after:rounded-[20px] after:bg-yellow after:transition-all after:duration-[500ms] after:ease-in-out hover:after:w-[100%]  `}
      >
        <Link href={link.address}>{link.name}</Link>
      </li>
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
  console.log(filteredSocials);
  const navSocials = filteredSocials.map((social, index) => {
    return (
      <Link href={social.link} key={index}>
        <a className="relative" target="_blank" title={social.name}>
          <p className="absolute hidden hover:visible text-white-100">
            {social.name}
          </p>
          <Image src={social.image} width={25} height={25} alt={social.name} />
        </a>
      </Link>
    );
  });
  return (
    <React.Fragment>
      <div
        className={`flex items-center justify-between py-10 max-w-[90%] mx-auto`}
      >
        <Image width={150} height={30} src={logo} />

        <ul className={`hidden lmd:flex  items-center space-x-8`}>{nav}</ul>

        <ul className={"flex space-x-2"}>
          {navSocials}
          <div className="lmd:hidden">
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
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavBar;

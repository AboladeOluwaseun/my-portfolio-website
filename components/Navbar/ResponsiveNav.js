import React from "react";
import socials from "../../data/socials";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseFill } from "react-icons/ri";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const parent = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        easing: "easeInOut",
        duration: 0.3,
      },
    },
  };
  const child = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  const Links = [
    { name: "Home", address: "/" },
    { name: "About", address: "/#about" },
    { name: "Projects", address: "/projects" },
    { name: "Contact", address: "#contact" },
  ];

  const links = Links.map((link, index) => {
    return (
      <Link href={link.address} key={index}>
        <a className="w-[100%]" onClick={() => setIsOpen(false)}>
          <motion.li className="py-4 px-8 hover:text-[#19191b] hover:bg-yellow hover:transition-all hover:ease-in-out hover:delay-200 hover:duration-[500ms]">
            {link.name}
          </motion.li>
        </a>
      </Link>
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

  const navSocials = filteredSocials.map((social, index) => {
    return (
      <Link href={social.link} key={index}>
        <motion.a
          whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
          whileHover={{ scale: 1.4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 400 }}
          className="relative mr-2"
          target="_blank"
          title={social.name}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className=" inline-flex absolute top-0 right-0 bottom-0 w-[100%] h-[100vh] z-[1] cursor-pointer origin-right bg-mobile-overlay "
            key="ovly"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1, visibility: "visible" }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setIsOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="absolute right-0 top-0 z-[1] h-[100vh] w-[300px] pt-5 origin-right bg-[#19191b]"
          >
            <motion.div
              variants={child}
              className="w-[100%] cursor-pointer pr-8 text-[28px] text-yellow relative left-[16rem]"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseFill />
            </motion.div>
            <motion.ul className="flex flex-col items-start">
              {links}
              <div className="flex py-0 px-8 mt-3">{navSocials}</div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;

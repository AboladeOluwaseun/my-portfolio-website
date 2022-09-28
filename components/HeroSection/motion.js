export const containerVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stifness: 120,
      when: "beforeChildren",
    },
  },
};

export const imageVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
      type: "spring",
      damping: 14,
      mass: 2,
      stiffness: 90,
    },
  },
};

export const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
};

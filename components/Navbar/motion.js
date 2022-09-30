export const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 2.5 },
  },
};
export const LinksVariant = {
  hidden: {
    y: "-100",
  },
  visible: {
    y: 0,
    transition: { duration: 2.5 },
  },
};

export const imageVariant = {
  hidden: {
    y: "-100",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      type: "spring",
      stiffness: 120,
    },
  },
};

export const childVariant = {
  hidden: {
    y: "-100",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    hover: {
      scale: 1.1,
    },
  },
};

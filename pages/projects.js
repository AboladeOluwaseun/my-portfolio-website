import React from "react";

import { Footer, NavBar, Projects } from "../components";

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

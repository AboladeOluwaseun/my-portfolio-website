import React from "react";

import { NavBar, DomHead, Footer } from "..";

function Layout({ children }) {
  return (
    <div className=" overflow-y-hidden bg-form-background">
      <DomHead />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

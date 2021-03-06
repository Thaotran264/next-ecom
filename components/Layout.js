import React from "react";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";
import Navbar from "./Navbar";
import Notify from "./Notify";
import ScrollTopButton from "./ScrollTopButton";

const Layout = ({ children }) => {
  return (
    <div className='position-relative' style={{ backgroundColor: "#E5E5E5" }}>
      <NavbarComponent />
      <Notify />
      {children}
      <ScrollTopButton />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

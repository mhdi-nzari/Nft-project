import React from "react";
import Routers from "@/routes/Routers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  )
};

export default Layout;

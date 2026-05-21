import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header";
import Footer from "../Components/footer";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;

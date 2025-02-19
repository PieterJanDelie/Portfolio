import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react"

const DefaultLayout = ({ children, header = true, footer = true }) => {
  return (
    <div>
      {header && <Header />}
      <Analytics />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      {footer && <Footer />}
    </div>
  );
};

export default DefaultLayout;

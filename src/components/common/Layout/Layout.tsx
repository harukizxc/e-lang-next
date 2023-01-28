import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main className="fit"> {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import Footer from "@/components/Layout/Footer";
import NavBar from "@/components/Layout/NavBar";
import React from "react";

const HomePage = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="h-screen">
        
        {children}
      
      
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

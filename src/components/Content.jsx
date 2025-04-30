import React from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const Content = ({text}) => {
  return (
    <div className="lg:h-[calc(100vh-88px)] sm:h-[calc(100vh-68px)] overflow-y-auto p-5">
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About text={text} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Content;

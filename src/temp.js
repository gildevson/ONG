import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Programa from "./pages/Programa/Programa";
import Contact from "./pages/Contact/Contact";
import Donate from "./pages/Donate/Donate";
import Projects from "./pages/Projects/Projects";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Programa" element={<Programa />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/project" element={<Projects />} />
  
    </Routes>
  );
};

export default AppRoutes;

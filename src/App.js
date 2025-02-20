import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Contact from "./pages/Contact/Contact";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton"; // 🔹 Importa o botão do WhatsApp


function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton /> {/* 🔹 Adiciona o botão sempre visível */}

    </Router>
  );
}

export default App;

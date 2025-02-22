import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/header';
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Carousel /> {/* 🔹 Certifique-se de que o carrossel está aqui */}
      </div>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;

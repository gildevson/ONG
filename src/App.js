import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./temp"; // Verifique se o caminho está correto
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import HistorySection from "./components/HistorySection/HistorySection";

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <AppRoutes /> {/* Exibe as rotas */}
        <HistorySection /> {/* 🔥 Seção da História após as rotas */}
      </div>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;

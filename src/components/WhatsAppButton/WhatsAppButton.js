import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css"; // Importa o CSS para estilização

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999" // 🔹 Substitua pelo seu número do WhatsApp
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;

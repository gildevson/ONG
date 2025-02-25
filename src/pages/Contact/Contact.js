import React from "react";
import { FaPaperPlane, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa"; // Ícones sociais
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      
      
      <div className="contact-container">
        
        {/* 🔹 Formulário de Contato */}
        <div className="contact-form">
        <h2 className="contact-title">📩 Entre em Contato</h2> {/* 🔥 Título adicionado */}
          <input type="text" placeholder="Nome" className="contact-input" />
          <input type="email" placeholder="E-mail" className="contact-input" />
          <input type="tel" placeholder="Telefone" className="contact-input" />
          <textarea placeholder="Digite sua mensagem..." className="contact-textarea"></textarea>

          <div className="contact-checkbox">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">
              Estou ciente de que ao enviar meus dados estou autorizando o tratamento dos meus dados pessoais para finalidades exclusivas da ONG.
            </label>
          </div>

          <button className="contact-button">
            Enviar mensagem <FaPaperPlane />
          </button>

          {/* 🔹 Links das Redes Sociais */}
          <div className="contact-social">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube /> YouTube
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* 🔹 Mapa do Google */}
        <div className="contact-map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.233819847236!2d-46.63619428446966!3d-23.52314676587464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583bd2494c79%3A0x2cfc92dceebcf7f9!2sONG%20Viver!5e0!3m2!1sen!2sbr!4v1643284935670!5m2!1sen!2sbr"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { FaPaperPlane, FaYoutube,FaInstagram } from "react-icons/fa"; // Ícones sociais
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
            <a href="https://facebook.com/infleunciandogerações" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube /> YouTube
            </a>
            
            <a href="https://www.instagram.com/influenciandogeracoes_/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* 🔹 Mapa do Google */}
        <div className="contact-map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.414478529305!2d-49.149155799999996!3d-25.4578319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf1db310a2781%3A0x85e95d67b7aa0a16!2sR.%20Argemiro%20Rodrigues%20de%20Paula%2C%20332%20-%20Jardim%20dos%20Eucaliptos%2C%20Piraquara%20-%20PR%2C%2083311-080!5e0!3m2!1spt-BR!2sbr!4v1741969528797!5m2!1spt-BR!2sbr"
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

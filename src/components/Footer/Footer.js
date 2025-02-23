import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaHandHoldingHeart } from "react-icons/fa"; // Alterado para FaHandHoldingHeart
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Sobre a ONG */}
        <div className="footer-section">
          <h3>Sobre a ONG</h3>
          <ul>
            <li><a href="/about">Quem Somos</a></li>
            <li><a href="/mission">Nossa Missão</a></li>
            <li><a href="/projects">Projetos</a></li>
            <li><a href="/transparency">Transparência</a></li>
            <li><a href="/volunteer">Seja Voluntário</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Rua Esperança, 123, São Paulo, Brasil</p>
          <p>📞 +55 11 98765-4321</p>
          <p>✉️ contato@minhaong.org</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Horário de Atendimento */}
        <div className="footer-section">
          <h3>Horário de Atendimento</h3>
          <p>Segunda a Sexta: 08h - 18h</p>
          <p>Sábado: 08h - 12h</p>
          <p>Domingo: Fechado</p>
        </div>

        {/* Doe Agora */}
        <div className="footer-section">
          <h3>Ajude Nossa Causa</h3>
          <p>Seu apoio faz a diferença! Contribua para nossos projetos sociais.</p>
          <a href="/donate" className="donate-button">
            <FaHandHoldingHeart /> Doe Agora
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 influenciando geracoes - Todos os Direitos Reservados.</p>
        <ul className="footer-links">
          <li><a href="/">Início</a></li>
          <li><a href="/cookies">Política de Cookies</a></li>
          <li><a href="/help">Ajuda</a></li>
          <li><a href="/faqs">Perguntas Frequentes</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

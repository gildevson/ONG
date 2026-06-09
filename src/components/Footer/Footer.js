import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaHandHoldingHeart } from "react-icons/fa";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading"; // ajuste o caminho conforme necessário

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" }); 
      setLoading(false);
    }, 1500); // 1.5 segundos de carregamento
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <footer className="footer">

      {/* Brand */}
      <div className="footer-brand">
        <img
          src="/LogoInfluenciando.png"
          alt="Instituto Influenciando Gerações"
          className="footer-logo"
        />
        <p className="footer-tagline">Transformando vidas, construindo futuros</p>
      </div>

      <div className="footer-container">

        {/* Sobre a ONG */}
        <div className="footer-section">
          <h3>Sobre o Instituto</h3>
          <ul>
            <li><button onClick={() => handleRedirect("/about")} className="link-button">Quem Somos</button></li>
            <li><button onClick={() => handleRedirect("/Programa")} className="link-button">Nossa Ações</button></li>
            <li><button onClick={() => handleRedirect("/project")} className="link-button">Projetos</button></li>
            <li><button onClick={() => handleRedirect("/donate")} className="link-button">Seja Voluntário</button></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Endereço: Rua Argemiro Rodrigues de Paula, 332- Guarituba Piraquara - PR, Brasil</p>
          <p>📞 +55 41 98505‑0555</p>
          <p>✉️ influenciandoumageracao.jd@gmail.com</p>
          <div className="social-icons">
            <a href="https://facebook.com/infleunciandogerações" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@Influenciandogeracoes_" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/influenciandogeracoes_/" target="_blank" rel="noopener noreferrer">
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
          <button onClick={() => handleRedirect("/donate")} className="donate-button">
            <FaHandHoldingHeart /> Doe Agora
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 influenciando geracoes - Todos os Direitos Reservados.</p>
        <ul className="footer-links">
          <li><button onClick={() => handleRedirect("/")} className="link-button">Início</button></li>
          <li><button onClick={() => handleRedirect("/cookies")} className="link-button">Política de Cookies</button></li>
      
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

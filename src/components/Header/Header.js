import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading"; // Importa o componente de carregamento
import "./header.css"; // Arquivo CSS do Header

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

  const handleNavigation = (path) => {
    setLoading(true); // Ativa o efeito de carregamento
    setTimeout(() => {
      navigate(path); // Redireciona para a página clicada
      window.scrollTo({ top: 0, behavior: "smooth" }); 
      setLoading(false);
      setMenuOpen(false); // Fecha o menu após a navegação
    }, 1000); // Simula carregamento de 1 segundo
  };

  return (
    <>
      {loading && <Loading />} {/* Mostra a tela de carregamento */}

      <nav className="navbar">
        <div className="container">
          {/* Logo da ONG */}
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Minha ONG" className="logo-img" />
          </Link>

          {/* Ícone do Menu Hambúrguer */}
          <div
            className="menu-icon"
            onClick={(e) => {
              e.stopPropagation(); 
              setMenuOpen(!menuOpen);
            }}
            role="button"
            aria-label="Abrir menu"
            tabIndex={0}
          >
            {menuOpen ? "✖" : "☰"}
          </div>

          {/* Lista de Links do Menu */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><button onClick={() => handleNavigation("/")}>Início</button></li>
            <li><button onClick={() => handleNavigation("/Programa")}>Ações Realizadas</button></li>
            <li><button onClick={() => handleNavigation("/about")}>Sobre</button></li>
            <li><button onClick={() => handleNavigation("/project")}>Projetos</button></li>
            <li><button onClick={() => handleNavigation("/donate")}>Doar</button></li>
            <li><button onClick={() => handleNavigation("/contact")}>Contato</button></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

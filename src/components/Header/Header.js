import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Certifique-se que o nome do arquivo está correto

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
            e.stopPropagation(); // Impede o fechamento imediato ao clicar
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
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Início</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
          <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Doar</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

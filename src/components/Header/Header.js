import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Loading from "../Loading";
import "./header.css";

const navItems = [
  { label: "Início",           path: "/"         },
  { label: "Ações Realizadas", path: "/Programa"  },
  { label: "Sobre",            path: "/about"     },
  { label: "Projetos",         path: "/project"   },
  { label: "Doar",             path: "/donate"    },
  { label: "Contato",          path: "/contact"   },
];

const Header = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  const handleNavigation = (path) => {
    setMenuOpen(false);
    if (location.pathname === path) return;
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {loading && <Loading />}

      <nav className="navbar">
        <div className="container">

          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/LogoInfluenciando.png" alt="Instituto Influenciando Gerações" className="logo-img" />
          </Link>

          {/* Hambúrguer */}
          <div
            className="menu-icon"
            onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
            role="button"
            aria-label="Abrir menu"
            tabIndex={0}
          >
            {menuOpen ? "✕" : "☰"}
          </div>

          {/* Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              const isDoar   = path === "/donate";
              return (
                <li key={path} className={isDoar ? "btn-doar" : ""}>
                  <button
                    onClick={() => handleNavigation(path)}
                    className={isActive ? "active" : ""}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Header;

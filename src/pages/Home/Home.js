import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

// Importando a imagem única
import image1 from "../../assets/image1.jpg";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="instituto-section">
        
        {/* 🔹 Seção de Texto */}
        <div className="instituto-text">
          <h2 className="instituto-title">
            <span>INSTITUTO</span> <strong>INFLUENCIANDO GERAÇÕES</strong>
          </h2>
          <p>
            O <strong>Instituto Influenciando Gerações</strong> é uma organização sem fins lucrativos dedicada a defender e proteger os direitos das crianças e dos jovens de Piraquara, além de buscar proporcionar oportunidade e inclusão por meio da educação, da cultura e do esporte e de iniciativas sociais.
          </p>
          <p>
            Acreditamos que <strong>pequenas ações podem gerar grandes mudanças e salvar vidas!</strong> Venha fazer parte dessa transformação.
          </p>
          <a href="Projects" className="instituto-button">
            Saiba Mais <FaArrowRight />
          </a>
        </div>

        {/* 🔹 Imagem posicionada corretamente */}
        <div className="imagem-container">
          <img src={image1} alt="Instituto Influenciando Gerações" className="instituto-image" />
        </div>

      </div>
    </div>
  );
};

export default Home;

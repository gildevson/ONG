import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./Home.css"; // Arquivo de estilo atualizado
import aboutImage from "../../assets/image1.jpg"; // Imagem adicionada
import { FaArrowRight } from "react-icons/fa"; // Ícone para o botão

const Home = () => {
  return (
    <>
      {/* 🔹 Nome do Instituto acima do carrossel */}
      <div className="instituto-header">
        <h1 className="instituto-title">Instituto Influenciando Gerações</h1>
        <p className="instituto-subtitle">
          Impactando vidas através da educação, do esporte e da solidariedade.
        </p>
      </div>

      {/* 🔹 Carrossel abaixo do nome do instituto */}
      <Carousel />

      {/* 🔹 Seção Informativa sobre o Instituto */}
      <div className="home-wrapper2">
        <div className="instituto-section">
          <div className="instituto-text">
            <h2>Transformando Vidas Através da Educação e Solidariedade</h2>
            <p>
              O <strong>Instituto Influenciando Gerações</strong> é uma organização sem fins lucrativos 
              dedicada a proporcionar oportunidades para crianças, jovens e famílias, promovendo inclusão 
              por meio da educação, esporte e iniciativas sociais.
            </p>
            <p>
              Acreditamos que <strong>pequenas ações geram grandes mudanças!</strong> Venha fazer parte dessa transformação.
            </p>
            <a href="/sobre" className="instituto-button">
              Saiba Mais <FaArrowRight />
            </a>
          </div>
          <img src={aboutImage} alt="Sobre o Instituto" className="instituto-image" />
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "./Home.css"; // Arquivo de estilo atualizado
import aboutImage from "../../assets/image1.jpg"; // Imagem adicionada
import { FaArrowRight } from "react-icons/fa"; // Ícone para o botão

const Home = () => {
  return (
    <>
      {/* 🔹 Seção Informativa sobre o Instituto */}
      <div className="home-wrapper">
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
          <div className="instituto-image-container">
            <img src={aboutImage} alt="Sobre o Instituto" className="instituto-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./Home.css"; // Arquivo de estilo atualizado

const Home = () => {
  return (
    <>
      <Carousel /> {/* Agora está fora de qualquer estilização */}
      <div className="home-wrapper2">
        <div className="content-section2">
          <h1 className="content-title2">INSTITUTO INFLUENCIANDO GERAÇÕES</h1>
          <p className="content-description2">
            Trabalhamos para transformar vidas através de projetos sociais.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

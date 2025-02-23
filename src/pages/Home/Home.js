import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./Home.css"; // Arquivo de estilo para a página Home

const Home = () => {
  return (
    <div className="home-container">
      <Carousel />
      <div className="home-content">
        <h1 className="home-title">INSTITUTO INFLUENCIANDO GERAÇÕES</h1>
        <p className="home-description">
          Trabalhamos para transformar vidas através de projetos sociais.
        </p>
      </div>
    </div>
  );
};

export default Home;

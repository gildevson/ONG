import React from "react";
import Slider from "react-slick"; // Importando o React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

// Importando imagens para o carrossel
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

const Home = () => {
  // Configuração do carrossel
  const settings = {
    dots: true,           // Mostrar indicadores
    infinite: true,       // Loop infinito
    speed: 600,           // Velocidade da transição mais fluida
    slidesToShow: 1,      // Mostrar 1 imagem por vez
    slidesToScroll: 1,    // Passar 1 por vez
    autoplay: true,       // Rodar automaticamente
    autoplaySpeed: 3500,  // Tempo de cada slide
    arrows: false         // Oculta setas de navegação
  };

  return (
    <div className="home-wrapper">
      <div className="instituto-section">
        
        {/* 🔹 Seção de Texto */}
        <div className="instituto-text">
          <h2 className="instituto-title">
            <span>INSTITUTO</span> <strong>INFLUENCIANDO GERAÇÕES</strong>
          </h2>
          <p>
            O <strong>Transformando Vidas Através da Educação e Solidariedade - Instituto Influenciando Gerações</strong> é uma organização sem fins lucrativos
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

        {/* 🔹 Carrossel de Imagens */}
        <div className="carrossel-container">
          <Slider {...settings}>
            <div>
              <img src={image1} alt="Imagem 1" className="instituto-image" />
            </div>
            <div>
              <img src={image2} alt="Imagem 2" className="instituto-image" />
            </div>
            <div>
              <img src={image3} alt="Imagem 3" className="instituto-image" />
            </div>
            <div>
              <img src={image4} alt="Imagem 4" className="instituto-image" />
            </div>
            <div>
              <img src={image5} alt="Imagem 6" className="instituto-image" />
            </div>
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default Home;

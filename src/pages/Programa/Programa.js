import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programa.css";
import pascoa from "../images/pascoa.jpeg";
import pascoa01 from "../images/pascoa01.jpeg";
import pascoa02 from "../images/pascoa02.jpeg";
import pascoa03 from "../images/pascoa03.jpeg";
import natal from "../images/natal.jpeg";
import natalOne from "../images/natal02.jpeg";
import natalSeg from "../images/natal03.jpeg";
import natalTerc from "../images/natal04.jpeg";

const News = ({ title, date, content, category, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="news-card">
      <Slider {...settings} className="news-carousel">
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`${title} ${index}`} className="news-image" />
          </div>
        ))}
      </Slider>
      <div className="news-info">
        <span className={`news-category ${category.toLowerCase()}`}>{category}</span>
        <h2 className="news-title">{title}</h2>
        <p className="news-date">{date}</p>
        <p className="news-content">{content}</p>
      </div>
    </div>
  );
};

const HolidayNews = () => {
  const newsList = [
    {
      title: "Celebração da Páscoa!",
      date: "31 de março de 2024",
      content: "A Páscoa está chegando! Tempo de renovação, esperança e união entre amigos e familiares. Celebre com amor e alegria!",
      category: "Notícias",
      images: [pascoa, pascoa01, pascoa02, pascoa03]
    },
    {
      title: "Feliz Natal!",
      date: "25 de dezembro de 2024",
      content: "O Natal chegou! Um momento especial para compartilhar felicidade e espalhar o espírito natalino. Desejamos a todos um Natal cheio de amor e paz!",
      category: "Artigo",
      images: [natal, natalOne, natalSeg, natalTerc]
    },
    {
      title: "Dia das Crianças Chegando!",
      date: "12 de outubro de 2024",
      content: "Dia de celebrar a alegria e a inocência das crianças! Diversas atividades especiais acontecerão para garantir a diversão dos pequenos!",
      category: "Notícias",
      images: [
        "/images/QrCode02.jpeg",
        "/images/alimentacaoSolidaria.jpg",
        "/images/batalhaRap.webp"
      ]
    }
  ];

  return (
    <div className="news-container">
      <h1 className="blog-title">Ações Realizadas</h1>
      <div className="news-grid">
        {newsList.map((news, index) => (
          <News key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default HolidayNews;
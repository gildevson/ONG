import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programa.css";

const News = ({ title, date, content, category, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="news-card">
      <Slider {...settings} className="news-carousel">
        {images.map((img, index) => (
          <div key={index}>
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
      images: [
        "https://via.placeholder.com/300/FF5733",
        "https://via.placeholder.com/300/33FF57",
        "https://via.placeholder.com/300/3357FF"
      ]
    },
    {
      title: "Feliz Natal!",
      date: "25 de dezembro de 2024",
      content: "O Natal chegou! Um momento especial para compartilhar felicidade e espalhar o espírito natalino. Desejamos a todos um Natal cheio de amor e paz!",
      category: "Artigo",
      images: [
        "https://via.placeholder.com/300/FF3333",
        "https://via.placeholder.com/300/33FFFF",
        "https://via.placeholder.com/300/FFFF33"
      ]
    },
    {
      title: "Dia das Crianças Chegando!",
      date: "12 de outubro de 2024",
      content: "Dia de celebrar a alegria e a inocência das crianças! Diversas atividades especiais acontecerão para garantir a diversão dos pequenos!",
      category: "Notícias",
      images: [
        "https://via.placeholder.com/300/9933FF",
        "https://via.placeholder.com/300/FF9933",
        "https://via.placeholder.com/300/99FF33"
      ]
    }
  ];

  return (
    <div className="news-container">
      <h1 className="blog-title">BLOG</h1>
      <div className="news-filters">
        <input type="text" placeholder="PESQUISAR..." className="search-input" />
        <select className="category-select">
          <option>Selecionar Categoria</option>
        </select>
      </div>
      <div className="news-grid">
        {newsList.map((news, index) => (
          <News key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default HolidayNews;

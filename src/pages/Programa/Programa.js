import React from "react";
import "./Programa.css";

const News = ({ title, date, content, category, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />
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
      image: "https://via.placeholder.com/300" 
    },
    {
      title: "Feliz Natal!",
      date: "25 de dezembro de 2024",
      content: "O Natal chegou! Um momento especial para compartilhar felicidade e espalhar o espírito natalino. Desejamos a todos um Natal cheio de amor e paz!",
      category: "Artigo",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Dia das Crianças Chegando!",
      date: "12 de outubro de 2024",
      content: "Dia de celebrar a alegria e a inocência das crianças! Diversas atividades especiais acontecerão para garantir a diversão dos pequenos!",
      category: "Notícias",
      image: "https://via.placeholder.com/300"
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

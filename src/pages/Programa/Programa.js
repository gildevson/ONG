import React from "react";
import "./Programa.css";

const News = ({ title, date, content }) => {
  return (
    <div className="news-container">
      <h2>{title}</h2>
      <p className="news-date">{date}</p>
      <p className="news-content">{content}</p>
    </div>
  );
};

const HolidayNews = () => {
  const newsList = [
    {
      title: "Celebração da Páscoa!",
      date: "31 de março de 2024",
      content: "A Páscoa está chegando! Tempo de renovação, esperança e união entre amigos e familiares. Celebre com amor e alegria!"
    },
    {
      title: "Feliz Natal!",
      date: "25 de dezembro de 2024",
      content: "O Natal chegou! Um momento especial para compartilhar felicidade e espalhar o espírito natalino. Desejamos a todos um Natal cheio de amor e paz!"
    },
    {
      title: "Dia das Crianças Chegando!",
      date: "12 de outubro de 2024",
      content: "Dia de celebrar a alegria e a inocência das crianças! Diversas atividades especiais acontecerão para garantir a diversão dos pequenos!"
    }
  ];

  return (
    <div className="news-wrapper">
      {newsList.map((news, index) => (
        <News key={index} title={news.title} date={news.date} content={news.content} />
      ))}
    </div>
  );
};

export default HolidayNews;

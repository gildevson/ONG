import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programa.css";
import pascoa01 from "../images/pascoa01.jpeg";
import pascoa02 from "../images/pascoa02.jpeg";
import pascoa04 from "../images/pascoa04.jpeg";
import natal from "../images/natal.jpeg";
import natalOne from "../images/natal02.jpeg";
import natalSeg from "../images/natal03.jpeg";
import natalTerc from "../images/natal04.jpeg";
import crianca from "../images/crianca.jpeg";
import crianca02 from "../images/crianca02.jpeg"
import crianca03 from "../images/crianca03.jpeg"

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
      title: "Pascoa Missionária",
      date: "31 de março",
      content: "A Páscoa está chegando! Tempo de renovação, esperança e união entre amigos e familiares. Celebre com amor e alegria!",
      category: "Notícias",
      images: [pascoa04, pascoa01, pascoa02]
    },
    {
      title: "Natal Solidário!",
      date: "25 de dezembro",
      content: "O Natal chegou! Um momento especial para compartilhar felicidade e espalhar o espírito natalino. Desejamos a todos um Natal cheio de amor e paz!",
      category: "Artigo",
      images: [natal, natalOne, natalSeg, natalTerc]
    },
    {
      title: "Dia das Crianças",
      date: "12 de outubro",
      content: "Dia de celebrar a alegria e a inocência das crianças! Diversas atividades especiais acontecerão para garantir a diversão dos pequenos!",
      category: "Notícias",
      images: [ crianca, crianca02, crianca03]
    }
  ];

  return (
    <div className="news-container">
      <h1 className="blog-title">Notícias</h1>
      <p className="news-intro">
  Nesta seção especial, celebramos datas marcantes como a <strong>Páscoa</strong>, o <strong>Natal</strong> e o <strong>Dia das Crianças</strong> — momentos únicos que fortalecem os laços de amor, união e alegria entre famílias e comunidade. Acompanhe nossas comemorações, confira as fotos dos eventos e fique por dentro de tudo que preparamos com carinho para essas ocasiões tão especiais!
</p>
      <div className="news-grid">
        {newsList.map((news, index) => (
          <News key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default HolidayNews;
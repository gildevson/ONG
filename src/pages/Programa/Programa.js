import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programa.css";
import pascoa01 from "../images/pascoa01.jpeg";
import pascoa04 from "../images/pascoa04.jpeg";
import natal from "../images/natal.jpeg";
import natalOne from "../images/natal02.jpeg";
import natalSeg from "../images/natal03.jpeg";
import natalTerc from "../images/natal04.jpeg";
import crianca from "../images/crianca.jpeg";
import crianca02 from "../images/crianca02.jpeg";
import crianca03 from "../images/crianca03.jpeg";
import crianca06 from "../images/crianca06.jpeg";
import crianca07 from "../images/crianca07.jpeg";
import crianca08  from "../images/crianca08.jpeg";
import arena01 from "../images/arena01.jpeg"
import arena02 from "../images/arena02.jpeg"
import arena04 from "../images/arena04.jpeg"
import arena05 from "../images/arena05.jpeg"

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
<<<<<<< HEAD
      title: "Passeio na Arena da baixada",
      date: "31 de março de 2024",
      content: "95% das nossas crianças, nunca tinham ido em um estadio, como também estamos inseridos no ambiente, sabemos que é bem fora da realidade de muitos, mas ao mesmo tempo, também é o sonho de quase todos. Sabendo disso, buscamos realizar esse sonho tão especial de cada um e os levamos para conhecer simplesmente um dos estadios mais lindos e modernos do Pais, a famosa Ligga Arena. Foram quase 100 crianças que tiveram o sonho da vida realizado, uma data que jamais esqueceremos.",
      category: "",
      images: [arena05, arena02, arena04]
    },
    {
      title: "Celebração da Páscoa!",
      date: "31 de março de 2024",
=======
      title: "Pascoa Missionária",
      date: "31 de março",
>>>>>>> d4c76b84eceab34b57a46eeee1f8f6d381516b35
      content: "A Páscoa está chegando! Tempo de renovação, esperança e união entre amigos e familiares. Celebre com amor e alegria!",
      category: "Notícias",
      images: [pascoa04, pascoa01]
    },
    {
<<<<<<< HEAD
      title: "Feliz Natal!",
      date: "25 de dezembro de 2024",
      content: "Todo natal, fazemos uma campanha chamada 'adote uma cartinha', uma iniciativa onde as crianças da nossa comunidade escrevem uma carta dizendo o que gostariam de ganhar no natal, com isso, fazemos a distribuição dessas cartinhas para padrinhos ou pessoas com o interesse de  atender algum desses sonhos, após distribuir todas essas cartinhas, reunimos as crianças e entregamos os presentes para elas. No natal do ano passado, foram quase 300 crianças atendidas.",
      category: "",
=======
      title: "Natal Solidário!",
      date: "25 de dezembro",
      content: "O Natal chegou! Um momento especial para compartilhar felicidade e espalhar o espírito natalino. Desejamos a todos um Natal cheio de amor e paz!",
      category: "Artigo",
>>>>>>> d4c76b84eceab34b57a46eeee1f8f6d381516b35
      images: [natal, natalOne, natalSeg, natalTerc]
    },
    {
      title: "Dia das Crianças",
<<<<<<< HEAD
      date: "12 de outubro de 2024",
      content: "95% das nossas crianças, nunca tinham ido em um estadio, como também estamos inseridos no ambiente, sabemos que é bem fora da realidade de muitos, mas ao mesmo tempo, também é o sonho de quase todos. Sabendo disso, buscamos realizar esse sonho tão especial de cada um e os levamos para conhecer simplesmente um dos estadios mais lindos e modernos do Pais, a famosa Ligga Arena. Foram quase 100 crianças que tiveram o sonho da vida realizado, uma data que jamais esqueceremos.",
      category: "",
      images: [crianca, crianca02, crianca03, crianca06, crianca07, crianca08]
=======
      date: "12 de outubro",
      content: "Dia de celebrar a alegria e a inocência das crianças! Diversas atividades especiais acontecerão para garantir a diversão dos pequenos!",
      category: "Notícias",
      images: [ crianca, crianca02, crianca03]
>>>>>>> d4c76b84eceab34b57a46eeee1f8f6d381516b35
    }
  ];

  return (
    <div className="news-container">
      <h1 className="blog-title">Nossas Acões</h1>
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
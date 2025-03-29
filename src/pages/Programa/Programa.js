import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programa.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import pascoa01 from "../images/pascoa01.jpeg";
import pascoa04 from "../images/pascoa04.jpeg";
import natal from "../images/natal.jpeg";
import natalOne from "../images/natal02.jpeg";
import natalSeg from "../images/natal03.jpeg";
import natalTerc from "../images/natal04.jpeg";
import natal05 from "../images/natal05.jpeg";
import natal06 from "../images/natal06.jpeg";
import natal07 from "../images/natal07.jpeg";
import natal08 from "../images/natal08.jpeg";
import crianca from "../images/crianca.jpeg";
import crianca02 from "../images/crianca02.jpeg";
import crianca03 from "../images/crianca03.jpeg";
import crianca06 from "../images/crianca06.jpeg";
import crianca07 from "../images/crianca07.jpeg";
import crianca08 from "../images/crianca08.jpeg";
import arena02 from "../images/arena02.jpeg";
import arena04 from "../images/arena04.jpeg";
import arena05 from "../images/arena05.jpeg";

const News = ({ title, date, content, category, images, videoUrl }) => {
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
      {videoUrl ? (
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Slider {...settings} className="news-carousel">
          {images.map((img, index) => (
            <div key={index} className="carousel-slide">
              <img src={img} alt={`${title} ${index}`} className="news-image" />
            </div>
          ))}
        </Slider>
      )}

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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingRedirect, setLoadingRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Tela de carregamento (inicial ou após clique no botão)
  if (loading || loadingRedirect) {
    return <Loading />;
  }

  const handleRedirect = () => {
    setLoadingRedirect(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 rola para o topo suavemente
      navigate("/donate");
    }, 1500);
  };

  const newsList = [
    {
      title: "Taça das Favelas",
      date: "",
      content:
        "Matheus Saimon segue tocando com dedicação um projeto social inspirador em Piraquara, levando esperança, inclusão e transformação através do esporte. O trabalho ganhou ainda mais destaque durante os emocionantes finais da Taça das Favelas, um evento marcado por muito talento, garra e união da comunidade.A ocasião contou com a ilustre participação do presidente da CUFA (Central Única das Favelas), José Campos Jardim, que trouxe uma mensagem poderosa e inspiradora. Com sua frase marcante — 'Favela é potência e não carência' —, ele reforçou a força e o valor das comunidades que, mesmo diante das dificuldades, continuam sendo berços de grandes talentos e sonhos possíveis. O projeto de Matheus não só forma atletas, mas também cidadãos conscientes e preparados para o futuro. É um verdadeiro exemplo de como iniciativas sociais podem transformar vidas e fortalecer comunidades.",
      category: "Vídeo",
      videoUrl: "https://www.youtube.com/embed/Qj22G2jyZ0Y?si=lA_aUr05JLyqy6Q_",
      images: [],
    },
    {
      title: "Passeio na Arena da Baixada",
      date: "19 de Dezembro",
      content: "5% das nossas crianças nunca tinham ido a um estádio. Como estamos inseridos nesse ambiente, sabemos que é fora da realidade de muitos — mas também o sonho de quase todos. Levamos cerca de 100 crianças para conhecer a famosa Ligga Arena, um dos estádios mais modernos do país. Foi um dia inesquecível!",
      category: "Eventos",
      images: [arena05, arena02, arena04],
    },
    {
      title: "Celebração da Páscoa!",
      date: "31 de março",
      content: "A Páscoa está chegando! Tempo de renovação, esperança e união entre amigos e familiares. Celebre com amor e alegria!",
      category: "Eventos",
      images: [pascoa04, pascoa01, crianca],
    },
    {
      title: "Natal Solidário!",
      date: "25 de dezembro",
      content: "Todo Natal, fazemos uma campanha chamada 'Adote uma cartinha'. As crianças da comunidade escrevem o que gostariam de ganhar, e os padrinhos realizam esses sonhos. No último Natal, quase 300 crianças foram presenteadas!",
      category: "Eventos",
      images: [natal, natalOne, natalSeg, natalTerc, natal05, natal06, natal07, natal08],
    },
    {
      title: "Dia das Crianças",
      date: "12 de outubro",
      content: "Todo o dia das crianças, buscamos realizar uma baita festa para as crianças da nossa comunidade, com direito a brinquedos inflavéis, comida a vontade, brincadeiras, brindes e muito mais.Muitas crianças passam o ano ansiosas por nossa festa, e para muitas é o melhor dia de suas vidas como elas mesmos nos relatam, pois é um dia em que elas podem brincar e não só lembrar que são crianças, mas serem tratadas como tal, com muito amor, atenção e carinho. Em nossa ultima festa, atendemos cerca de 600 crianças e a previsão para a festa de 2025, é atender cerca de 1000 crianças.",
      category: "Notícias",
      images: [crianca02, crianca03, crianca06, crianca07, crianca08],
    },
  ];

  return (
    <div className="news-container">
      <h1 className="blog-title">Nossas Ações</h1>
      <p className="news-intro">
        Nesta seção especial, celebramos datas marcantes como a <strong>Páscoa</strong>, o <strong>Natal</strong> e o <strong>Dia das Crianças</strong> — e momentos únicos que fortalecem os laços de amor, união e alegria entre famílias e comunidade.
      </p>

      <div className="news-grid">
        {newsList.map((news, index) => (
          <News key={index} {...news} />
        ))}
      </div>

      {/* 🔸 Bloco "Junte-se a nós" com carregamento ao clicar */}
      <div className="call-to-action">
        <h2>Junte-se a nós!</h2>
        <p>
          Acreditamos que pequenas ações geram grandes transformações. Você também pode fazer parte dessas histórias de amor, solidariedade e impacto social.
        </p>
        <button className="cta-button" onClick={handleRedirect}>
          Quero fazer parte
        </button>
      </div>
    </div>
  );
};

export default HolidayNews;

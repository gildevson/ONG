import React, { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programa.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

import pascoa01   from "../images/pascoa01.jpeg";
import pascoa04   from "../images/pascoa04.jpeg";
import natal      from "../images/natal.jpeg";
import natalOne   from "../images/natal02.jpeg";
import natalSeg   from "../images/natal03.jpeg";
import natalTerc  from "../images/natal04.jpeg";
import natal05    from "../images/natal05.jpeg";
import natal06    from "../images/natal06.jpeg";
import natal07    from "../images/natal07.jpeg";
import natal08    from "../images/natal08.jpeg";
import crianca    from "../images/crianca.jpeg";
import crianca02  from "../images/crianca02.jpeg";
import crianca03  from "../images/crianca03.jpeg";
import crianca06  from "../images/crianca06.jpeg";
import crianca07  from "../images/crianca07.jpeg";
import crianca08  from "../images/crianca08.jpeg";
import arena02    from "../images/arena02.jpeg";
import arena04    from "../images/arena04.jpeg";
import arena05    from "../images/arena05.jpeg";

/* ── Card de evento (imagens) ──────────────────────────────── */
const NewsCard = ({ title, date, content, category, images, onImageClick }) => {
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
        {images.map((img, i) => (
          <div key={i} className="carousel-slide">
            <img
              src={img}
              alt={`${title} ${i}`}
              className="news-image"
              style={{ cursor: "zoom-in" }}
              onClick={() => onImageClick && onImageClick(images, i)}
            />
          </div>
        ))}
      </Slider>

      <div className="news-info">
        <span className={`news-category ${category.toLowerCase()}`}>{category}</span>
        {date && <p className="news-date">📅 {date}</p>}
        <h2 className="news-title">{title}</h2>
        <p className="news-content">{content}</p>
      </div>
    </div>
  );
};

/* ── Card em destaque (vídeo) ──────────────────────────────── */
const FeaturedVideoCard = ({ title, content, videoUrl }) => (
  <div className="news-card-featured">
    <div className="featured-video-side">
      <iframe
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="featured-text-side">
      <span className="featured-label">▶ Destaque</span>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </div>
);

/* ── Página principal ──────────────────────────────────────── */
const HolidayNews = () => {
  const navigate = useNavigate();
  const [loading, setLoading]               = useState(true);
  const [loadingRedirect, setLoadingRedirect] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() =>
    setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }))
  , []);
  const next = useCallback(() =>
    setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length }))
  , []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (loading || loadingRedirect) return <Loading />;

  const handleRedirect = () => {
    setLoadingRedirect(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/donate");
    }, 1500);
  };

  const featuredVideo = {
    title: "Taça das Favelas",
    content:
      "Matheus Saimon segue tocando com dedicação um projeto social inspirador em Piraquara, levando esperança, inclusão e transformação através do esporte. O trabalho ganhou ainda mais destaque durante os emocionantes finais da Taça das Favelas, um evento marcado por muito talento, garra e união da comunidade. A ocasião contou com a ilustre participação do presidente da CUFA (Central Única das Favelas), José Campos Jardim, que trouxe uma mensagem poderosa e inspiradora. Com sua frase marcante — 'Favela é potência, favela não é carência' —, ele reforçou a força e o valor das comunidades que, mesmo diante das dificuldades, continuam sendo berços de grandes talentos e sonhos possíveis. O projeto de Matheus não só forma atletas, mas também cidadãos conscientes e preparados para o futuro. É um verdadeiro exemplo de como iniciativas sociais podem transformar vidas e fortalecer comunidades.",
    videoUrl: "https://www.youtube.com/embed/Qj22G2jyZ0Y?si=lA_aUr05JLyqy6Q_",
  };

  const eventList = [
    {
      title: "Passeio na Arena da Baixada",
      date: "19 de Dezembro",
      content:
        "95% das nossas crianças nunca tinham ido a um estádio. Como estamos inseridos nesse ambiente, sabemos que é fora da realidade de muitos — mas também o sonho de quase todos. Levamos cerca de 100 crianças para conhecer a famosa Ligga Arena, um dos estádios mais modernos do país. Foi um dia inesquecível!",
      category: "Eventos",
      images: [arena05, arena02, arena04],
    },
    {
      title: "Páscoa Missionária!",
      date: "31 de março",
      content:
        "Por aqui, a Páscoa nunca passa em branco. Todo ano nós arrecadamos centenas de caixas de bombons e distribuímos para as crianças da nossa comunidade, e não só isso — nessa data também aproveitamos para lembrá-las do verdadeiro significado da Páscoa, que é a ressurreição de Jesus Cristo, a data em que o amor venceu.",
      category: "Eventos",
      images: [pascoa04, pascoa01, crianca],
    },
    {
      title: "Natal Solidário!",
      date: "25 de dezembro",
      content:
        "Todo Natal, fazemos uma campanha chamada 'Adote uma cartinha'. As crianças da comunidade escrevem o que gostariam de ganhar, e os padrinhos realizam esses sonhos. No último Natal, quase 300 crianças foram presenteadas!",
      category: "Eventos",
      images: [natal, natalOne, natalSeg, natalTerc, natal05, natal06, natal07, natal08],
    },
    {
      title: "Dia das Crianças",
      date: "12 de outubro",
      content:
        "Todo o Dia das Crianças, buscamos realizar uma baita festa para as crianças da nossa comunidade, com direito a brinquedos infláveis, comida à vontade, brincadeiras, brindes e muito mais. Muitas crianças passam o ano ansiosas por nossa festa, e para muitas é o melhor dia de suas vidas — como elas mesmas nos relatam — pois é um dia em que podem brincar e não só lembrar que são crianças, mas serem tratadas como tal, com muito amor, atenção e carinho. Em nossa última festa atendemos cerca de 600 crianças, e a previsão para a festa de 2025 é atender cerca de 1.000 crianças.",
      category: "Eventos",
      images: [crianca02, crianca03, crianca06, crianca07, crianca08],
    },
  ];

  return (
    <div className="programa-page">

      {/* ── Hero ────────────────────────────────────── */}
      <div className="programa-hero">
        <div className="programa-hero-inner">
          <span className="programa-hero-label">✦ Histórias reais</span>
          <h1>Nossas <span>Ações</span></h1>
          <p className="programa-intro">
            Celebramos datas marcantes como a <strong>Páscoa</strong>, o{" "}
            <strong>Natal</strong> e o <strong>Dia das Crianças</strong> — e
            momentos únicos que fortalecem os laços de amor, união e alegria
            entre famílias e comunidade.
          </p>
        </div>
      </div>

      {/* ── Conteúdo ────────────────────────────────── */}
      <div className="programa-content">

        {/* Destaque: vídeo */}
        <FeaturedVideoCard {...featuredVideo} />

        {/* Grid de eventos */}
        <div className="news-section">
          <div className="news-section-inner">
            <div className="news-section-header">
              <span className="news-section-label">Eventos & Ações</span>
              <h2>Momentos que <span>transformam</span></h2>
            </div>
            <div className="news-grid">
              {eventList.map((event, i) => (
                <NewsCard key={i} {...event} onImageClick={openLightbox} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="call-to-action">
          <div className="cta-deco-ring" />
          <div className="cta-deco-grid" />
          <span className="cta-label">❤ Faça a diferença</span>
          <h2>Junte-se a nós!</h2>
          <p>
            Acreditamos que pequenas ações geram grandes transformações. Você
            também pode fazer parte dessas histórias de amor, solidariedade e
            impacto social.
          </p>
          <button className="cta-button" onClick={handleRedirect}>
            Quero fazer parte →
          </button>
        </div>
      </div>

      {/* ── Lightbox ──────────────────────────────── */}
      {lightbox && (
        <div className="prog-lightbox-overlay" onClick={closeLightbox}>
          <button className="prog-lightbox-close" onClick={closeLightbox}>✕</button>

          {lightbox.images.length > 1 && (
            <button className="prog-lightbox-nav prog-lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>&#8249;</button>
          )}

          <img
            className="prog-lightbox-img"
            src={lightbox.images[lightbox.index]}
            alt="Foto ampliada"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button className="prog-lightbox-nav prog-lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>&#8250;</button>
          )}

          <span className="prog-lightbox-counter">
            {lightbox.index + 1} / {lightbox.images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default HolidayNews;

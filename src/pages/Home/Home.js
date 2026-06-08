import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../../components/Loading";

import image1 from "../../assets/image1.jpg";

import supporter1 from "../../assets/apoiador1.png";
import supporter2 from "../../assets/apoiador2.jpg";
import supporter3 from "../../assets/apoiador3.png";
import supporter4 from "../../assets/apoiador4.png";
import supporter5 from "../../assets/apoiador5.png";
import supporter6 from "../../assets/apoiador6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { FaHandsHelping, FaBookOpen, FaUsers, FaHeart } from "react-icons/fa";

const cards = [
  {
    id: 1,
    icon: <FaHandsHelping size={46} />,
    title: "NOSSA MISSÃO",
    text: "Promover a inclusão e o desenvolvimento de crianças e jovens por meio da educação, da cultura e do esporte.",
  },
  {
    id: 2,
    icon: <FaBookOpen size={46} />,
    title: "EDUCAÇÃO PARA O FUTURO",
    text: "Apoiamos crianças com reforço escolar, acesso a livros e oportunidades de aprendizado contínuo.",
  },
  {
    id: 3,
    icon: <FaUsers size={46} />,
    title: "TRABALHO COMUNITÁRIO",
    text: "Nossos projetos impactam a comunidade local, fortalecendo vínculos sociais e oferecendo suporte essencial.",
  },
  {
    id: 4,
    icon: <FaHeart size={46} />,
    title: "JUNTE-SE A NÓS",
    text: "Seja um voluntário ou faça uma doação! Pequenas ações transformam vidas e constroem um futuro melhor.",
  },
];

const supporters = [
  { id: 1, name: "Henrique Imóvel Legal", logo: supporter1 },
  { id: 2, name: "CECOVI",               logo: supporter2 },
  { id: 3, name: "Laggus",               logo: supporter3 },
  { id: 4, name: "Aroma da carne",       logo: supporter4 },
  { id: 5, name: "Gama - Equipamentos industriais", logo: supporter5 },
  { id: 6, name: "Adega Mil Grau",       logo: supporter6 },
];

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { images, index }

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

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/Programa");
    }, 2000);
  };

  return (
    <div className="home-wrapper">
      {loading && <Loading />}

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="instituto-section">
        <div className="hero-inner">
          <div className="instituto-text">
            <h2 className="instituto-title">
              <span>INSTITUTO</span>{" "}
              <strong>INFLUENCIANDO GERAÇÕES</strong>
            </h2>
            <p>
              O <strong>Instituto Influenciando Gerações</strong> é uma
              organização sem fins lucrativos dedicada a defender e proteger os
              direitos das crianças e dos jovens de Piraquara, além de buscar
              proporcionar oportunidade e inclusão por meio da educação, da
              cultura e do esporte e de iniciativas sociais.
            </p>
            <p>
              Acreditamos que{" "}
              <strong>
                pequenas ações podem gerar grandes mudanças e salvar vidas!
              </strong>{" "}
              Venha fazer parte dessa transformação.
            </p>
            <button onClick={handleNavigation} className="instituto-button">
              Saiba Mais <FaArrowRight />
            </button>
          </div>

          <div className="imagem-container">
            <img
              src={image1}
              alt="Instituto Influenciando Gerações"
              className="instituto-image"
            />
          </div>
        </div>
      </section>

      {/* ── VÍDEO DE IMPACTO ─────────────────────────── */}
      <section className="impacto-section">
        <div className="impacto-inner">
          <div className="impacto-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/A8sj6vfGCMw"
              title="Instituto Influenciando Gerações"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="impacto-texto">
            <span className="impacto-label">▶ Assista agora</span>
            <h3>Veja o impacto do nosso trabalho!</h3>
            <p>
              Nosso compromisso vai além das palavras — veja com seus próprios
              olhos como transformamos vidas. Assista ao vídeo e conheça mais de
              perto as ações do Instituto e a alegria das crianças e jovens que
              fazem parte dessa jornada.
            </p>
          </div>
        </div>
      </section>

      {/* ── CARDS DE MISSÃO ──────────────────────────── */}
      <section className="cards-section">
        <div className="cards-inner">
          {cards.map((card) => (
            <div key={card.id} className="instituto-card">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APOIADORES ───────────────────────────────── */}
      <section className="instituto-supporters">
        <div className="supporters-inner">
          <div className="supporters-highlight">
            <h3>Principais Apoiadores</h3>
            <p>
              Essas empresas são fundamentais para o nosso projeto, fornecendo
              suporte para nossas ações sociais. Agradecemos por acreditarem em
              nossa missão!
            </p>
          </div>

          {/* Grid — desktop */}
          <div className="supporters-cards">
            {supporters.map((supporter) => (
              <div key={supporter.id} className="supporter-card">
                <img
                  src={supporter.logo}
                  alt={supporter.name}
                  className="supporter-logo"
                />
                <p className="supporter-name">{supporter.name}</p>
              </div>
            ))}
          </div>

          {/* Carrossel — mobile */}
          <div className="supporters-carousel">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={16}
              slidesPerView={1.15}
              centeredSlides={true}
              breakpoints={{
                480: { slidesPerView: 1.3, spaceBetween: 18 },
                600: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
              }}
            >
              {supporters.map((supporter) => (
                <SwiperSlide key={supporter.id}>
                  <div className="supporter-card-sm">
                    <div
                      className="supporter-logo-wrap"
                      onClick={() => openLightbox(supporters.map(s => s.logo), supporters.findIndex(s => s.id === supporter.id))}
                      style={{ cursor: "zoom-in" }}
                    >
                      <img
                        src={supporter.logo}
                        alt={supporter.name}
                        className="supporter-logo-sm"
                      />
                    </div>
                    <p className="supporter-name-sm">{supporter.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ── Lightbox apoiadores ──────────────────── */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>

          {lightbox.images.length > 1 && (
            <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>&#8249;</button>
          )}

          <img
            className="lightbox-img"
            src={lightbox.images[lightbox.index]}
            alt="Apoiador"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>&#8250;</button>
          )}

          <span className="lightbox-counter">
            {lightbox.index + 1} / {lightbox.images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
